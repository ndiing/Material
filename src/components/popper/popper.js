import { closestScrollable } from "../util/util";

class PopperController {
    constructor(host) {
        (this.host = host).addController(this);
    }

    async hostConnected() {
        await this.host.updateComplete;
    }

    hostDisconnected() {}

    calcPosition = {
        "top-start": ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.left, top: buttonRect.top - tooltipRect.height - offset }),
        top: ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.left - (tooltipRect.width - buttonRect.width) / 2, top: buttonRect.top - tooltipRect.height - offset }),
        "top-end": ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.right - tooltipRect.width, top: buttonRect.top - tooltipRect.height - offset }),
        "top-right": ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.right + offset, top: buttonRect.top - tooltipRect.height - offset }),
        "right-start": ({ buttonRect, offset }) => ({ left: buttonRect.right + offset, top: buttonRect.top }),
        right: ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.right + offset, top: buttonRect.top - (tooltipRect.height - buttonRect.height) / 2 }),
        "right-end": ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.right + offset, top: buttonRect.bottom - tooltipRect.height }),
        "bottom-right": ({ buttonRect, offset }) => ({ left: buttonRect.right + offset, top: buttonRect.bottom + offset }),
        "bottom-end": ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.right - tooltipRect.width, top: buttonRect.bottom + offset }),
        bottom: ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.left - (tooltipRect.width - buttonRect.width) / 2, top: buttonRect.bottom + offset }),
        "bottom-start": ({ buttonRect, offset }) => ({ left: buttonRect.left, top: buttonRect.bottom + offset }),
        "bottom-left": ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.left - tooltipRect.width - offset, top: buttonRect.bottom + offset }),
        "left-end": ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.left - tooltipRect.width - offset, top: buttonRect.bottom - tooltipRect.height }),
        left: ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.left - tooltipRect.width - offset, top: buttonRect.top - (tooltipRect.height - buttonRect.height) / 2 }),
        "left-start": ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.left - tooltipRect.width - offset, top: buttonRect.top }),
        "top-left": ({ tooltipRect, buttonRect, offset }) => ({ left: buttonRect.left - tooltipRect.width - offset, top: buttonRect.top - tooltipRect.height - offset }),
    };

    getPosition({ placement, tooltipRect, buttonRect, offset }) {
        let left = buttonRect.left - (tooltipRect.width - buttonRect.width) / 2;
        let top = buttonRect.top - (tooltipRect.height - buttonRect.height) / 2;
        ({ left, top } = this.calcPosition[placement]({
            tooltipRect,
            buttonRect,
            offset,
        }));
        const right = left + tooltipRect.width;
        const bottom = top + tooltipRect.height;
        return { left, top, right, bottom };
    }

    placements = ["top-start", "top", "top-end", "top-right", "right-start", "right", "right-end", "bottom-right", "bottom-end", "bottom", "bottom-start", "bottom-left", "left-end", "left", "left-start", "top-left"];

    setPosition(options = {}) {
        const { placements = this.placements.slice(), tooltip = this.host, button, offset = 0 } = options;
        let { container } = options;

        if (!container) {
            container = closestScrollable(tooltip);
        }
        let placement = placements.shift();
        let left, top, right, bottom;
        const tooltipRect = tooltip.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        while (placement) {
            ({ left, top, right, bottom } = this.getPosition({
                placement,
                tooltipRect,
                buttonRect,
                offset,
            }));
            left = left < containerRect.left ? Math.max(left, containerRect.left) : left;
            top = top < containerRect.top ? Math.max(top, containerRect.top) : top;
            right = left + tooltipRect.width;
            bottom = top + tooltipRect.height;
            right = right > containerRect.right ? Math.min(right, containerRect.right) : right;
            bottom = bottom > containerRect.bottom ? Math.min(bottom, containerRect.bottom) : bottom;
            const inContainer = !(left < containerRect.left || top < containerRect.top || right > containerRect.right || bottom > containerRect.bottom);
            const overButton = !(left < buttonRect.right && right > buttonRect.left && top < buttonRect.bottom && bottom > buttonRect.top);

            if (inContainer && overButton) {
                break;
            }
            placement = placements.shift();
        }
        tooltip.style.setProperty("left", left + "px");
        tooltip.style.setProperty("top", top + "px");
    }
}

export { PopperController };
