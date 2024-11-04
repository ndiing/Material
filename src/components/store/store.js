import { getNestedValue, isNumber } from "../util/util";

class MemoryStore {
    constructor({ docs = [], instance } = {}) {
        this.instance = instance;
        this.docs = docs;
    }

    async post(doc) {
        if (!doc._id) {
            throw new Error("_id tidak boleh kosong");
        }
        const index = this.docs.findIndex((oldDoc) => oldDoc._id === doc._id);

        if (index !== -1) {
            throw new Error("doc sudah ada");
        }
        this.docs.push(doc);
    }

    async get(_id) {
        const oldDoc = this.docs.find((oldDoc) => oldDoc._id === _id);
        return oldDoc || null;
    }

    sort(docs, sorters) {
        return docs.sort((a, b) => {
            for (const { _sort, _order } of sorters) {
                const aValues = getNestedValue(a, _sort);
                const bValues = getNestedValue(b, _sort);
                const aValue = aValues[0];
                const bValue = bValues[0];
                if (aValue < bValue) return _order === "asc" ? -1 : 1;
                if (aValue > bValue) return _order === "asc" ? 1 : -1;
            }
            return 0;
        });
    }

    search(docs, q) {
        return docs.filter((doc) => {
            return Object.keys(doc).some((key) => {
                const values = getNestedValue(doc, key);
                return values.some((value) => {
                    if (typeof value === "string") {
                        return value.includes(q);
                    } else if (typeof value === "object" && value !== null) {
                        return Object.values(value).some((innerValue) => {
                            if (typeof innerValue === "string") {
                                return innerValue.includes(q);
                            }
                            return false;
                        });
                    }
                    return false;
                });
            });
        });
    }

    filter(docs, filters) {
        return docs.filter((doc) => {
            return filters.every(({ name, value, operator }) => {
                const values = getNestedValue(doc, name);
                return values.some((field) => {
                    switch (operator) {
                        case "_eq":
                            return field === value;
                        case "_ne":
                            return field !== value;
                        case "_lt":
                            return field < value;
                        case "_gt":
                            return field > value;
                        case "_lte":
                            return field <= value;
                        case "_gte":
                            return field >= value;
                        case "_like":
                            return typeof field === "string" && field.includes(value);
                        default:
                            return true;
                    }
                });
            });
        });
    }

    paginate(docs, _page, _limit) {
        const start = (_page - 1) * _limit;
        return docs.slice(start, start + _limit);
    }

    range(docs, _start, _end) {
        return docs.slice(_start, _end);
    }

    async getAll() {
        const { sorters, q, _page, _limit, _start, _end, filters } = this.instance.query();
        let docs = this.docs.slice();

        if (sorters?.length) {
            docs = this.sort(docs, sorters);
        }

        if (q) {
            docs = this.search(docs, q);
        }

        if (filters?.length) {
            docs = this.filter(docs, filters);
        }
        this.total = docs.length;

        if (isNumber(_page) && isNumber(_limit)) {
            docs = this.paginate(docs, _page, _limit);
        } else if (isNumber(_start) && isNumber(_end)) {
            docs = this.range(docs, _start, _end);
        }
        return docs;
    }

    async patch(_id, doc) {
        if (!_id) {
            throw new Error("_id tidak boleh kosong");
        }
        const index = this.docs.findIndex((oldDoc) => oldDoc._id === _id);

        if (index === -1) {
            throw new Error("doc tidak ada");
        }
        const oldDoc = this.docs[index];
        const newDoc = { ...oldDoc, ...doc, _id };
        this.docs.splice(index, 1, newDoc);
    }

    async put(doc) {
        if (!doc._id) {
            throw new Error("_id tidak boleh kosong");
        }
        const index = this.docs.findIndex((oldDoc) => oldDoc._id === doc._id);

        if (index === -1) {
            return this.post(doc);
        } else {
            return this.patch(doc._id, doc);
        }
    }

    async delete(_id) {
        if (!_id) {
            throw new Error("_id tidak boleh kosong");
        }
        const index = this.docs.findIndex((oldDoc) => oldDoc._id === _id);

        if (index === -1) {
            throw new Error("doc tidak ada");
        }
        this.docs.splice(index, 1);
    }
}

class Store {
    constructor({
        adapter = "memory",
        path = "/users/",
        base = "https://jsonplaceholder.typicode.com/",
        paths = {
            post: "/users/",
            get: "/users/:_id",
            patch: "/users/:_id",
            put: "/users/",
            delete: "/users/:_id",
        },
    } = {}) {
        const adapters = {
            memory: MemoryStore,
        };
        this.adapter = new adapters[adapter]({ instance: this });
        this.path = path;
        this.paths = paths;

        this._URL = new URL(path, base);

        this.multipleProperties = {
            _sort: {},
            _order: {},
        };
        this.singleProperties = {
            q: { type: String },
            _page: { type: Number },
            _limit: { type: Number },
            _start: { type: Number },
            _end: { type: Number },
        };

        this.multipleKeys = Object.keys(this.multipleProperties);
        this.singleKeys = Object.keys(this.singleProperties);
        this.keys = this.multipleKeys.concat(this.singleKeys);

        this.sorters = [];
        this.filters = [];
    }

    async post(doc) {
        this.url(this.paths.post, {});

        return this.adapter.post(doc);
    }

    async get(_id) {
        this.url(this.paths.get, { _id });
        return this.adapter.get(_id);
    }

    sort(_sort, _order) {
        if (_sort) {
            const _sortAll = Array.from(this._URL.searchParams.getAll("_sort"));
            const _orderAll = Array.from(this._URL.searchParams.getAll("_order"));
            const index = _sortAll.indexOf(_sort);
            this._URL.searchParams.delete("_sort");
            this._URL.searchParams.delete("_order");
            this.sorters = [];

            if (_order) {
                if (index === -1) {
                    _sortAll.push(_sort);
                    _orderAll.push(_order);
                } else {
                    _orderAll.splice(index, 1, _order);
                }
            } else {
                _sortAll.splice(index, 1);
                _orderAll.splice(index, 1);
            }

            for (let i = 0; i < _sortAll.length; i++) {
                const _sort = _sortAll[i];
                const _order = _orderAll[i];
                this._URL.searchParams.append("_sort", _sort);
                this._URL.searchParams.append("_order", _order);
                this.sorters.push({ _sort, _order });
            }
        } else {
            this._URL.searchParams.delete("_sort");
            this._URL.searchParams.delete("_order");
            this.sorters = [];
        }
    }

    search(q) {
        if (q) {
            this._URL.searchParams.set("q", q);
        } else {
            this._URL.searchParams.delete("q");
        }
    }

    filter(name, value, operator) {
        if (name) {
            let key = name;

            if (operator) {
                key = `${name}${operator}`;
            }

            if (value) {
                this._URL.searchParams.set(key, value);
                this.filters.push({ name, value, operator });
            } else {
                this._URL.searchParams.delete(key);
                const index = this.filters.findIndex((filter) => filter.name === name && filter.operator === operator);

                if (index !== -1) {
                    this.filters.splice(index, 1);
                }
            }
        } else {
            for (const name of Array.from(this._URL.searchParams.keys())) {
                if (this.keys.includes(name)) {
                    continue;
                }
                this._URL.searchParams.delete(name);
            }
            this.filters = [];
        }
    }

    paginate(_page, _limit) {
        if (isNumber(_page)) {
            this._URL.searchParams.set("_page", _page);
        } else {
            this._URL.searchParams.delete("_page");
        }

        if (isNumber(_limit)) {
            this._URL.searchParams.set("_limit", _limit);
        } else {
            this._URL.searchParams.delete("_limit");
        }
    }

    range(_start, _end) {
        if (isNumber(_start)) {
            this._URL.searchParams.set("_start", _start);
        } else {
            this._URL.searchParams.delete("_start");
        }

        if (isNumber(_end)) {
            this._URL.searchParams.set("_end", _end);
        } else {
            this._URL.searchParams.delete("_end");
        }
    }

    query(query = {}) {
        if (query === null) {
            for (const name of Array.from(this._URL.searchParams.keys())) {
                this._URL.searchParams.delete(name);
            }
            this.sorters = [];
            this.filters = [];
        } else {
            for (const [name, value] of Array.from(this._URL.searchParams.entries())) {
                if (!this.singleKeys.includes(name)) {
                    continue;
                }
                const type = this.singleProperties[name].type;
                query[name] = type(value);
            }

            if (this.sorters.length) {
                query.sorters = this.sorters;
            }

            if (this.filters.length) {
                query.filters = this.filters;
            }

            return query;
        }
    }

    url(pathname, params = {}) {
        this._URL.pathname = pathname.replace(/:(\w+)/g, ($, name) => params[name] || "");
    }

    async getAll() {
        this.url(this.path, {});
        return this.adapter.getAll();
    }

    async patch(_id, doc) {
        this.url(this.paths.patch, { _id });
        return this.adapter.patch(_id, doc);
    }

    async put(doc) {
        this.url(this.paths.put, {});
        return this.adapter.put(doc);
    }

    async delete(_id) {
        this.url(this.paths.delete, { _id });
        return this.adapter.delete(_id);
    }
}

export { MemoryStore, Store };
