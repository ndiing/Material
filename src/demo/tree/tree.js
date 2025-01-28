import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTree extends MdComponent {

/**
 * @private
 */
    constructor() {
        super();
        this.items = [
            {
                label: "Item 1",
                children: [
                    {
                        label: "Item 1.1",
                        children: [
                            {
                                label: "Item 1.1.1",
                                expanded: true,
                                children: [
                                    { label: "Item 1.1.1.1", children: [] },
                                    { label: "Item 1.1.1.2", children: [] },
                                    { label: "Item 1.1.1.3", children: [] },
                                    { label: "Item 1.1.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.1.2",
                                children: [
                                    { label: "Item 1.1.2.1", children: [] },
                                    { label: "Item 1.1.2.2", children: [] },
                                    { label: "Item 1.1.2.3", children: [] },
                                    { label: "Item 1.1.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.1.3",
                                children: [
                                    { label: "Item 1.1.3.1", children: [] },
                                    { label: "Item 1.1.3.2", children: [] },
                                    { label: "Item 1.1.3.3", children: [] },
                                    { label: "Item 1.1.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.1.4",
                                children: [
                                    { label: "Item 1.1.4.1", children: [] },
                                    { label: "Item 1.1.4.2", children: [] },
                                    { label: "Item 1.1.4.3", children: [] },
                                    { label: "Item 1.1.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 1.2",
                        children: [
                            {
                                label: "Item 1.2.1",
                                children: [
                                    { label: "Item 1.2.1.1", selected: true, children: [] },
                                    { label: "Item 1.2.1.2", children: [] },
                                    { label: "Item 1.2.1.3", children: [] },
                                    { label: "Item 1.2.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.2.2",
                                children: [
                                    { label: "Item 1.2.2.1", children: [] },
                                    { label: "Item 1.2.2.2", children: [] },
                                    { label: "Item 1.2.2.3", children: [] },
                                    { label: "Item 1.2.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.2.3",
                                children: [
                                    { label: "Item 1.2.3.1", children: [] },
                                    { label: "Item 1.2.3.2", children: [] },
                                    { label: "Item 1.2.3.3", children: [] },
                                    { label: "Item 1.2.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.2.4",
                                children: [
                                    { label: "Item 1.2.4.1", children: [] },
                                    { label: "Item 1.2.4.2", children: [] },
                                    { label: "Item 1.2.4.3", children: [] },
                                    { label: "Item 1.2.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 1.3",
                        children: [
                            {
                                label: "Item 1.3.1",
                                children: [
                                    { label: "Item 1.3.1.1", children: [] },
                                    { label: "Item 1.3.1.2", children: [] },
                                    { label: "Item 1.3.1.3", children: [] },
                                    { label: "Item 1.3.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.3.2",
                                children: [
                                    { label: "Item 1.3.2.1", children: [] },
                                    { label: "Item 1.3.2.2", children: [] },
                                    { label: "Item 1.3.2.3", children: [] },
                                    { label: "Item 1.3.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.3.3",
                                children: [
                                    { label: "Item 1.3.3.1", children: [] },
                                    { label: "Item 1.3.3.2", children: [] },
                                    { label: "Item 1.3.3.3", children: [] },
                                    { label: "Item 1.3.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.3.4",
                                children: [
                                    { label: "Item 1.3.4.1", children: [] },
                                    { label: "Item 1.3.4.2", children: [] },
                                    { label: "Item 1.3.4.3", children: [] },
                                    { label: "Item 1.3.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 1.4",
                        children: [
                            {
                                label: "Item 1.4.1",
                                children: [
                                    { label: "Item 1.4.1.1", children: [] },
                                    { label: "Item 1.4.1.2", children: [] },
                                    { label: "Item 1.4.1.3", children: [] },
                                    { label: "Item 1.4.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.4.2",
                                children: [
                                    { label: "Item 1.4.2.1", children: [] },
                                    { label: "Item 1.4.2.2", children: [] },
                                    { label: "Item 1.4.2.3", children: [] },
                                    { label: "Item 1.4.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.4.3",
                                children: [
                                    { label: "Item 1.4.3.1", children: [] },
                                    { label: "Item 1.4.3.2", children: [] },
                                    { label: "Item 1.4.3.3", children: [] },
                                    { label: "Item 1.4.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 1.4.4",
                                children: [
                                    { label: "Item 1.4.4.1", children: [] },
                                    { label: "Item 1.4.4.2", children: [] },
                                    { label: "Item 1.4.4.3", children: [] },
                                    { label: "Item 1.4.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: "Item 2",
                children: [
                    {
                        label: "Item 2.1",
                        children: [
                            {
                                label: "Item 2.1.1",
                                children: [
                                    { label: "Item 2.1.1.1", children: [] },
                                    { label: "Item 2.1.1.2", children: [] },
                                    { label: "Item 2.1.1.3", children: [] },
                                    { label: "Item 2.1.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.1.2",
                                children: [
                                    { label: "Item 2.1.2.1", children: [] },
                                    { label: "Item 2.1.2.2", children: [] },
                                    { label: "Item 2.1.2.3", children: [] },
                                    { label: "Item 2.1.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.1.3",
                                children: [
                                    { label: "Item 2.1.3.1", children: [] },
                                    { label: "Item 2.1.3.2", children: [] },
                                    { label: "Item 2.1.3.3", children: [] },
                                    { label: "Item 2.1.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.1.4",
                                children: [
                                    { label: "Item 2.1.4.1", children: [] },
                                    { label: "Item 2.1.4.2", children: [] },
                                    { label: "Item 2.1.4.3", children: [] },
                                    { label: "Item 2.1.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 2.2",
                        children: [
                            {
                                label: "Item 2.2.1",
                                children: [
                                    { label: "Item 2.2.1.1", children: [] },
                                    { label: "Item 2.2.1.2", children: [] },
                                    { label: "Item 2.2.1.3", children: [] },
                                    { label: "Item 2.2.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.2.2",
                                children: [
                                    { label: "Item 2.2.2.1", children: [] },
                                    { label: "Item 2.2.2.2", children: [] },
                                    { label: "Item 2.2.2.3", children: [] },
                                    { label: "Item 2.2.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.2.3",
                                children: [
                                    { label: "Item 2.2.3.1", children: [] },
                                    { label: "Item 2.2.3.2", children: [] },
                                    { label: "Item 2.2.3.3", children: [] },
                                    { label: "Item 2.2.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.2.4",
                                children: [
                                    { label: "Item 2.2.4.1", children: [] },
                                    { label: "Item 2.2.4.2", children: [] },
                                    { label: "Item 2.2.4.3", children: [] },
                                    { label: "Item 2.2.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 2.3",
                        children: [
                            {
                                label: "Item 2.3.1",
                                children: [
                                    { label: "Item 2.3.1.1", children: [] },
                                    { label: "Item 2.3.1.2", children: [] },
                                    { label: "Item 2.3.1.3", children: [] },
                                    { label: "Item 2.3.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.3.2",
                                children: [
                                    { label: "Item 2.3.2.1", children: [] },
                                    { label: "Item 2.3.2.2", children: [] },
                                    { label: "Item 2.3.2.3", children: [] },
                                    { label: "Item 2.3.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.3.3",
                                children: [
                                    { label: "Item 2.3.3.1", children: [] },
                                    { label: "Item 2.3.3.2", children: [] },
                                    { label: "Item 2.3.3.3", children: [] },
                                    { label: "Item 2.3.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.3.4",
                                children: [
                                    { label: "Item 2.3.4.1", children: [] },
                                    { label: "Item 2.3.4.2", children: [] },
                                    { label: "Item 2.3.4.3", children: [] },
                                    { label: "Item 2.3.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 2.4",
                        children: [
                            {
                                label: "Item 2.4.1",
                                children: [
                                    { label: "Item 2.4.1.1", children: [] },
                                    { label: "Item 2.4.1.2", children: [] },
                                    { label: "Item 2.4.1.3", children: [] },
                                    { label: "Item 2.4.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.4.2",
                                children: [
                                    { label: "Item 2.4.2.1", children: [] },
                                    { label: "Item 2.4.2.2", children: [] },
                                    { label: "Item 2.4.2.3", children: [] },
                                    { label: "Item 2.4.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.4.3",
                                children: [
                                    { label: "Item 2.4.3.1", children: [] },
                                    { label: "Item 2.4.3.2", children: [] },
                                    { label: "Item 2.4.3.3", children: [] },
                                    { label: "Item 2.4.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 2.4.4",
                                children: [
                                    { label: "Item 2.4.4.1", children: [] },
                                    { label: "Item 2.4.4.2", children: [] },
                                    { label: "Item 2.4.4.3", children: [] },
                                    { label: "Item 2.4.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: "Item 3",
                children: [
                    {
                        label: "Item 3.1",
                        children: [
                            {
                                label: "Item 3.1.1",
                                children: [
                                    { label: "Item 3.1.1.1", children: [] },
                                    { label: "Item 3.1.1.2", children: [] },
                                    { label: "Item 3.1.1.3", children: [] },
                                    { label: "Item 3.1.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.1.2",
                                children: [
                                    { label: "Item 3.1.2.1", children: [] },
                                    { label: "Item 3.1.2.2", children: [] },
                                    { label: "Item 3.1.2.3", children: [] },
                                    { label: "Item 3.1.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.1.3",
                                children: [
                                    { label: "Item 3.1.3.1", children: [] },
                                    { label: "Item 3.1.3.2", children: [] },
                                    { label: "Item 3.1.3.3", children: [] },
                                    { label: "Item 3.1.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.1.4",
                                children: [
                                    { label: "Item 3.1.4.1", children: [] },
                                    { label: "Item 3.1.4.2", children: [] },
                                    { label: "Item 3.1.4.3", children: [] },
                                    { label: "Item 3.1.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 3.2",
                        children: [
                            {
                                label: "Item 3.2.1",
                                children: [
                                    { label: "Item 3.2.1.1", children: [] },
                                    { label: "Item 3.2.1.2", children: [] },
                                    { label: "Item 3.2.1.3", children: [] },
                                    { label: "Item 3.2.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.2.2",
                                children: [
                                    { label: "Item 3.2.2.1", children: [] },
                                    { label: "Item 3.2.2.2", children: [] },
                                    { label: "Item 3.2.2.3", children: [] },
                                    { label: "Item 3.2.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.2.3",
                                children: [
                                    { label: "Item 3.2.3.1", children: [] },
                                    { label: "Item 3.2.3.2", children: [] },
                                    { label: "Item 3.2.3.3", children: [] },
                                    { label: "Item 3.2.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.2.4",
                                children: [
                                    { label: "Item 3.2.4.1", children: [] },
                                    { label: "Item 3.2.4.2", children: [] },
                                    { label: "Item 3.2.4.3", children: [] },
                                    { label: "Item 3.2.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 3.3",
                        children: [
                            {
                                label: "Item 3.3.1",
                                children: [
                                    { label: "Item 3.3.1.1", children: [] },
                                    { label: "Item 3.3.1.2", children: [] },
                                    { label: "Item 3.3.1.3", children: [] },
                                    { label: "Item 3.3.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.3.2",
                                children: [
                                    { label: "Item 3.3.2.1", children: [] },
                                    { label: "Item 3.3.2.2", children: [] },
                                    { label: "Item 3.3.2.3", children: [] },
                                    { label: "Item 3.3.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.3.3",
                                children: [
                                    { label: "Item 3.3.3.1", children: [] },
                                    { label: "Item 3.3.3.2", children: [] },
                                    { label: "Item 3.3.3.3", children: [] },
                                    { label: "Item 3.3.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.3.4",
                                children: [
                                    { label: "Item 3.3.4.1", children: [] },
                                    { label: "Item 3.3.4.2", children: [] },
                                    { label: "Item 3.3.4.3", children: [] },
                                    { label: "Item 3.3.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 3.4",
                        children: [
                            {
                                label: "Item 3.4.1",
                                children: [
                                    { label: "Item 3.4.1.1", children: [] },
                                    { label: "Item 3.4.1.2", children: [] },
                                    { label: "Item 3.4.1.3", children: [] },
                                    { label: "Item 3.4.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.4.2",
                                children: [
                                    { label: "Item 3.4.2.1", children: [] },
                                    { label: "Item 3.4.2.2", children: [] },
                                    { label: "Item 3.4.2.3", children: [] },
                                    { label: "Item 3.4.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.4.3",
                                children: [
                                    { label: "Item 3.4.3.1", children: [] },
                                    { label: "Item 3.4.3.2", children: [] },
                                    { label: "Item 3.4.3.3", children: [] },
                                    { label: "Item 3.4.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 3.4.4",
                                children: [
                                    { label: "Item 3.4.4.1", children: [] },
                                    { label: "Item 3.4.4.2", children: [] },
                                    { label: "Item 3.4.4.3", children: [] },
                                    { label: "Item 3.4.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: "Item 4",
                children: [
                    {
                        label: "Item 4.1",
                        children: [
                            {
                                label: "Item 4.1.1",
                                children: [
                                    { label: "Item 4.1.1.1", children: [] },
                                    { label: "Item 4.1.1.2", children: [] },
                                    { label: "Item 4.1.1.3", children: [] },
                                    { label: "Item 4.1.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.1.2",
                                children: [
                                    { label: "Item 4.1.2.1", children: [] },
                                    { label: "Item 4.1.2.2", children: [] },
                                    { label: "Item 4.1.2.3", children: [] },
                                    { label: "Item 4.1.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.1.3",
                                children: [
                                    { label: "Item 4.1.3.1", children: [] },
                                    { label: "Item 4.1.3.2", children: [] },
                                    { label: "Item 4.1.3.3", children: [] },
                                    { label: "Item 4.1.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.1.4",
                                children: [
                                    { label: "Item 4.1.4.1", children: [] },
                                    { label: "Item 4.1.4.2", children: [] },
                                    { label: "Item 4.1.4.3", children: [] },
                                    { label: "Item 4.1.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 4.2",
                        children: [
                            {
                                label: "Item 4.2.1",
                                children: [
                                    { label: "Item 4.2.1.1", children: [] },
                                    { label: "Item 4.2.1.2", children: [] },
                                    { label: "Item 4.2.1.3", children: [] },
                                    { label: "Item 4.2.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.2.2",
                                children: [
                                    { label: "Item 4.2.2.1", children: [] },
                                    { label: "Item 4.2.2.2", children: [] },
                                    { label: "Item 4.2.2.3", children: [] },
                                    { label: "Item 4.2.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.2.3",
                                children: [
                                    { label: "Item 4.2.3.1", children: [] },
                                    { label: "Item 4.2.3.2", children: [] },
                                    { label: "Item 4.2.3.3", children: [] },
                                    { label: "Item 4.2.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.2.4",
                                children: [
                                    { label: "Item 4.2.4.1", children: [] },
                                    { label: "Item 4.2.4.2", children: [] },
                                    { label: "Item 4.2.4.3", children: [] },
                                    { label: "Item 4.2.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 4.3",
                        children: [
                            {
                                label: "Item 4.3.1",
                                children: [
                                    { label: "Item 4.3.1.1", children: [] },
                                    { label: "Item 4.3.1.2", children: [] },
                                    { label: "Item 4.3.1.3", children: [] },
                                    { label: "Item 4.3.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.3.2",
                                children: [
                                    { label: "Item 4.3.2.1", children: [] },
                                    { label: "Item 4.3.2.2", children: [] },
                                    { label: "Item 4.3.2.3", children: [] },
                                    { label: "Item 4.3.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.3.3",
                                children: [
                                    { label: "Item 4.3.3.1", children: [] },
                                    { label: "Item 4.3.3.2", children: [] },
                                    { label: "Item 4.3.3.3", children: [] },
                                    { label: "Item 4.3.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.3.4",
                                children: [
                                    { label: "Item 4.3.4.1", children: [] },
                                    { label: "Item 4.3.4.2", children: [] },
                                    { label: "Item 4.3.4.3", children: [] },
                                    { label: "Item 4.3.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Item 4.4",
                        children: [
                            {
                                label: "Item 4.4.1",
                                children: [
                                    { label: "Item 4.4.1.1", children: [] },
                                    { label: "Item 4.4.1.2", children: [] },
                                    { label: "Item 4.4.1.3", children: [] },
                                    { label: "Item 4.4.1.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.4.2",
                                children: [
                                    { label: "Item 4.4.2.1", children: [] },
                                    { label: "Item 4.4.2.2", children: [] },
                                    { label: "Item 4.4.2.3", children: [] },
                                    { label: "Item 4.4.2.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.4.3",
                                children: [
                                    { label: "Item 4.4.3.1", children: [] },
                                    { label: "Item 4.4.3.2", children: [] },
                                    { label: "Item 4.4.3.3", children: [] },
                                    { label: "Item 4.4.3.4", children: [] },
                                ],
                            },
                            {
                                label: "Item 4.4.4",
                                expanded: true,
                                children: [
                                    { label: "Item 4.4.4.1", children: [] },
                                    { label: "Item 4.4.4.2", children: [] },
                                    { label: "Item 4.4.4.3", children: [] },
                                    { label: "Item 4.4.4.4", children: [] },
                                ],
                            },
                        ],
                    },
                ],
            },
        ];
    }

/**
 * @private
 */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tree .items="${this.items}"></md-tree>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-tree", DemoTree);
export default document.createElement("demo-tree");
