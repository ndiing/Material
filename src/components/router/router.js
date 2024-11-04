class Router {
    static set(routes = [], parent = null) {
        for (const route of routes) {
            route.parent = parent;
            route.path = `${parent?.path || ""}/${route.path}`.replace(/\/+/g, "/");
            route.regex = new RegExp(`^${route.path.replace(/:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)")}(?:/?\$)`, "i");

            if (route?.children) {
                this.set(route.children, route);
            }
        }
    }

    static get(path = "/", routes = this.routes, stacks = []) {
        for (const route of routes) {
            const match = path.match(route.regex);

            if (match) {
                route.params = { ...match?.groups };
                route.stacks = [...stacks, route];
                return route;
            }

            if (route?.children) {
                const result = this.get(path, route.children, [...stacks, route]);

                if (result) {
                    return result;
                }
            }
        }
    }

    static navigate(url) {
        if (this.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    static handleNavigate(event) {
        const element = event.target.closest("[routerLink]");

        if (element) {
            event.preventDefault();
            const url = element.getAttribute("routerLink");
            Router.navigate(url);
        }
    }

    static get pathname() {
        if (this.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?.*?$/, "") || "/";
        }
    }

    static async handleNavigation() {
        const route = this.get(this.pathname);

        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }

        if (!this.controller || (this.controller && this.controller.signal.aborted)) {
            this.controller = new AbortController();
        }

        for (const stack of route.stacks) {
            if (stack.beforeLoad) {
                try {
                    await new Promise((resolve, reject) => {
                        const next = (err) => {
                            this.controller.signal.removeEventListener("abort", next);

                            if (err) {
                                reject(err);
                            } else {
                                resolve();
                            }
                        };
                        this.controller.signal.addEventListener("abort", next);
                        stack.beforeLoad(next);
                    });
                } catch (error) {
                    console.error(error);
                    break;
                }
            }
            if (!stack.component) stack.component = await stack.load();
            const container = stack.parent?.component || document.body;
            const outlet = await new Promise((resolve) => {
                const target = stack.outlet ? document.body : container;
                const selector = stack.outlet ? `md-outlet[name="${stack.outlet}"]` : "md-outlet";
                let outlet = null;
                let observer = null;
                const callback = () => {
                    outlet = target.querySelector(selector);

                    if (outlet) {
                        if (observer) observer.disconnect();
                        resolve(outlet);
                    }
                };
                observer = new MutationObserver(callback);
                observer.observe(target, { childList: true, subtree: true });
                callback();
            });

            if (!stack.component.isConnected) {
                outlet.parentElement.insertBefore(stack.component, outlet.nextElementSibling);
                stack.component.isComponent = true;
            }
            const outlets = [...document.querySelectorAll("md-outlet")];

            for (const outlet of outlets) {
                let nextElement = outlet.nextElementSibling;

                while (nextElement) {
                    if (!route.stacks.find((stack) => stack.component === nextElement) && nextElement.isComponent && !outlets.find((outlet) => outlet === nextElement)) nextElement.remove();
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
    }

    static historyApiFallback = false;

    static init(routes = []) {
        this.routes = routes;
        this.set(this.routes);
        const pushState = window.history.pushState;

        this.handleNavigate = this.handleNavigate.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);

        window.history.pushState = function () {
            pushState.apply(this, arguments);
            const event = new CustomEvent("popstate", {
                bubbles: true,
                cancelable: true,
                detail: {},
            });
            window.dispatchEvent(event);
        };
        window.addEventListener("click", this.handleNavigate);
        window.addEventListener("DOMContentLoaded", this.handleNavigation);

        if (this.historyApiFallback) {
            window.addEventListener("popstate", this.handleNavigation);
        } else {
            window.addEventListener("hashchange", this.handleNavigation);
        }
    }
}

export { Router };
