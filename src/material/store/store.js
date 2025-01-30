/**
 *
 */
class Store {
    /**
     *
     * @param {Array} data
     * @param {Object} options
     */
    constructor(data = [], options = {}) {
        this.data = data;
        this.options = options;
    }
    /**
     * @typedef {Object} StoreSortSorters
     * @property {String} name
     * @property {String} [order=asc] - (desc|asc)
     */
    /**
     *
     * @param {Array} data
     * @param {StoreSortSorters} sorters
     */
    sort(data, sorters) {
        if (!sorters || !sorters.name) return data;
        return data.sort((a, b) => {
            let valueA = a[sorters.name];
            let valueB = b[sorters.name];
            if (sorters.order === "desc") return valueB > valueA ? 1 : -1;
            return valueA > valueB ? 1 : -1;
        });
    }

    /**
     *
     * @param {Object|Array|String|number} item
     * @param {String} q
     * @returns {Boolean}
     */
    deepSearch(item, q) {
        if (!item) return false;

        if (typeof item === "string" || typeof item === "number") {
            return String(item).toLowerCase().includes(q.toLowerCase());
        }

        if (Array.isArray(item)) {
            return item.some((el) => this.deepSearch(el, q));
        }

        if (typeof item === "object") {
            return Object.values(item).some((val) => this.deepSearch(val, q));
        }

        return false;
    }

    /**
     *
     * @param {Array} data
     * @param {String} q
     */
    search(data, q) {
        if (!q) return data;
        return data.filter((item) => this.deepSearch(item, q));
    }

    /**
     *
     * @param {Object} item
     * @param {String} name
     * @returns {Any}
     */
    getNestedValue(item, name) {
        return name.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), item);
    }

    /**
     * @typedef {Object} StoreFilterFilters
     * @property {String} name
     * @property {String} value
     * @property {String} [operator=_eq] - _(eq|ne|lt|gt|lte|gte|like)
     */
    /**
     *
     * @param {Array} data
     * @param {StoreFilterFilters} filters
     */
    filter(data, filters) {
        if (!filters || !Array.isArray(filters) || filters.length === 0) return data;

        return data.filter((item) => {
            return filters.every((filter) => {
                let { name, value, operator = "_eq" } = filter;
                let fieldValue = this.getNestedValue(item, name);

                switch (operator) {
                    case "_eq":
                        return fieldValue === value;
                    case "_ne":
                        return fieldValue !== value;
                    case "_lt":
                        return fieldValue < value;
                    case "_gt":
                        return fieldValue > value;
                    case "_lte":
                        return fieldValue <= value;
                    case "_gte":
                        return fieldValue >= value;
                    case "_like":
                        return String(fieldValue).toLowerCase().includes(String(value).toLowerCase());
                    case "_in":
                        return Array.isArray(value) ? value.includes(fieldValue) : false;
                    case "_nin":
                        return Array.isArray(value) ? !value.includes(fieldValue) : false;
                    default:
                        return false;
                }
            });
        });
    }

    /**
     *
     * @param {Array} data
     * @param {Number} _start
     * @param {Number} _end
     */
    range(data, _start, _end) {
        return data.slice(_start, _end);
    }

    /**
     *
     * @param {Array} data
     * @param {Number} _page
     * @param {Number} _limit
     */
    paginate(data, _page, _limit) {
        let start = (_page - 1) * _limit;
        let end = start + _limit;
        return data.slice(start, end);
    }

    /**
     * @typedef {Object} StoreGetReturn
     * @property {Array} data
     * @property {Number} length
     */
    /**
     * @typedef {Object} StoreGetOptions
     * @property {StoreSortSorters} sorters
     * @property {String} q
     * @property {StoreFilterFilters} filters
     * @property {Number} _start
     * @property {Number} _end
     * @property {Number} _page
     * @property {Number} _limit
     */
    /**
     *
     * @param {StoreGetOptions} options
     * @returns {StoreGetReturn}
     */
    get(options = {}) {
        let { sorters, q, filters, _start, _end, _page, _limit } = options;

        let data = this.data.slice();

        data = this.sort(data, sorters);
        data = this.search(data, q);
        data = this.filter(data, filters);

        let length = data.length;

        if (_start !== undefined && _end !== undefined) {
            data = this.range(data, _start, _end);
        } else if (_page !== undefined && _limit !== undefined) {
            data = this.paginate(data, _page, _limit);
        }

        return { data, length };
    }
}

export { Store };

// {
//     const data=[
//         {
//             "id": 1,
//             "name": "Leanne Graham",
//             "username": "Bret",
//             "email": "Sincere@april.biz",
//             "address": {
//                 "street": "Kulas Light",
//                 "suite": "Apt. 556",
//                 "city": "Gwenborough",
//                 "zipcode": "92998-3874",
//                 "geo": {
//                     "lat": "-37.3159",
//                     "lng": "81.1496"
//                 }
//             },
//             "phone": "1-770-736-8031 x56442",
//             "website": "hildegard.org",
//             "company": {
//                 "name": "Romaguera-Crona",
//                 "catchPhrase": "Multi-layered client-server neural-net",
//                 "bs": "harness real-time e-markets"
//             }
//         },
//         {
//             "id": 2,
//             "name": "Ervin Howell",
//             "username": "Antonette",
//             "email": "Shanna@melissa.tv",
//             "address": {
//                 "street": "Victor Plains",
//                 "suite": "Suite 879",
//                 "city": "Wisokyburgh",
//                 "zipcode": "90566-7771",
//                 "geo": {
//                     "lat": "-43.9509",
//                     "lng": "-34.4618"
//                 }
//             },
//             "phone": "010-692-6593 x09125",
//             "website": "anastasia.net",
//             "company": {
//                 "name": "Deckow-Crist",
//                 "catchPhrase": "Proactive didactic contingency",
//                 "bs": "synergize scalable supply-chains"
//             }
//         },
//         {
//             "id": 3,
//             "name": "Clementine Bauch",
//             "username": "Samantha",
//             "email": "Nathan@yesenia.net",
//             "address": {
//                 "street": "Douglas Extension",
//                 "suite": "Suite 847",
//                 "city": "McKenziehaven",
//                 "zipcode": "59590-4157",
//                 "geo": {
//                     "lat": "-68.6102",
//                     "lng": "-47.0653"
//                 }
//             },
//             "phone": "1-463-123-4447",
//             "website": "ramiro.info",
//             "company": {
//                 "name": "Romaguera-Jacobson",
//                 "catchPhrase": "Face to face bifurcated interface",
//                 "bs": "e-enable strategic applications"
//             }
//         },
//         {
//             "id": 4,
//             "name": "Patricia Lebsack",
//             "username": "Karianne",
//             "email": "Julianne.OConner@kory.org",
//             "address": {
//                 "street": "Hoeger Mall",
//                 "suite": "Apt. 692",
//                 "city": "South Elvis",
//                 "zipcode": "53919-4257",
//                 "geo": {
//                     "lat": "29.4572",
//                     "lng": "-164.2990"
//                 }
//             },
//             "phone": "493-170-9623 x156",
//             "website": "kale.biz",
//             "company": {
//                 "name": "Robel-Corkery",
//                 "catchPhrase": "Multi-tiered zero tolerance productivity",
//                 "bs": "transition cutting-edge web services"
//             }
//         },
//         {
//             "id": 5,
//             "name": "Chelsey Dietrich",
//             "username": "Kamren",
//             "email": "Lucio_Hettinger@annie.ca",
//             "address": {
//                 "street": "Skiles Walks",
//                 "suite": "Suite 351",
//                 "city": "Roscoeview",
//                 "zipcode": "33263",
//                 "geo": {
//                     "lat": "-31.8129",
//                     "lng": "62.5342"
//                 }
//             },
//             "phone": "(254)954-1289",
//             "website": "demarco.info",
//             "company": {
//                 "name": "Keebler LLC",
//                 "catchPhrase": "User-centric fault-tolerant solution",
//                 "bs": "revolutionize end-to-end systems"
//             }
//         },
//         {
//             "id": 6,
//             "name": "Mrs. Dennis Schulist",
//             "username": "Leopoldo_Corkery",
//             "email": "Karley_Dach@jasper.info",
//             "address": {
//                 "street": "Norberto Crossing",
//                 "suite": "Apt. 950",
//                 "city": "South Christy",
//                 "zipcode": "23505-1337",
//                 "geo": {
//                     "lat": "-71.4197",
//                     "lng": "71.7478"
//                 }
//             },
//             "phone": "1-477-935-8478 x6430",
//             "website": "ola.org",
//             "company": {
//                 "name": "Considine-Lockman",
//                 "catchPhrase": "Synchronised bottom-line interface",
//                 "bs": "e-enable innovative applications"
//             }
//         },
//         {
//             "id": 7,
//             "name": "Kurtis Weissnat",
//             "username": "Elwyn.Skiles",
//             "email": "Telly.Hoeger@billy.biz",
//             "address": {
//                 "street": "Rex Trail",
//                 "suite": "Suite 280",
//                 "city": "Howemouth",
//                 "zipcode": "58804-1099",
//                 "geo": {
//                     "lat": "24.8918",
//                     "lng": "21.8984"
//                 }
//             },
//             "phone": "210.067.6132",
//             "website": "elvis.io",
//             "company": {
//                 "name": "Johns Group",
//                 "catchPhrase": "Configurable multimedia task-force",
//                 "bs": "generate enterprise e-tailers"
//             }
//         },
//         {
//             "id": 8,
//             "name": "Nicholas Runolfsdottir V",
//             "username": "Maxime_Nienow",
//             "email": "Sherwood@rosamond.me",
//             "address": {
//                 "street": "Ellsworth Summit",
//                 "suite": "Suite 729",
//                 "city": "Aliyaview",
//                 "zipcode": "45169",
//                 "geo": {
//                     "lat": "-14.3990",
//                     "lng": "-120.7677"
//                 }
//             },
//             "phone": "586.493.6943 x140",
//             "website": "jacynthe.com",
//             "company": {
//                 "name": "Abernathy Group",
//                 "catchPhrase": "Implemented secondary concept",
//                 "bs": "e-enable extensible e-tailers"
//             }
//         },
//         {
//             "id": 9,
//             "name": "Glenna Reichert",
//             "username": "Delphine",
//             "email": "Chaim_McDermott@dana.io",
//             "address": {
//                 "street": "Dayna Park",
//                 "suite": "Suite 449",
//                 "city": "Bartholomebury",
//                 "zipcode": "76495-3109",
//                 "geo": {
//                     "lat": "24.6463",
//                     "lng": "-168.8889"
//                 }
//             },
//             "phone": "(775)976-6794 x41206",
//             "website": "conrad.com",
//             "company": {
//                 "name": "Yost and Sons",
//                 "catchPhrase": "Switchable contextually-based project",
//                 "bs": "aggregate real-time technologies"
//             }
//         },
//         {
//             "id": 10,
//             "name": "Clementina DuBuque",
//             "username": "Moriah.Stanton",
//             "email": "Rey.Padberg@karina.biz",
//             "address": {
//                 "street": "Kattie Turnpike",
//                 "suite": "Suite 198",
//                 "city": "Lebsackbury",
//                 "zipcode": "31428-2261",
//                 "geo": {
//                     "lat": "-38.2386",
//                     "lng": "57.2232"
//                 }
//             },
//             "phone": "024-648-3804",
//             "website": "ambrose.net",
//             "company": {
//                 "name": "Hoeger LLC",
//                 "catchPhrase": "Centralized empowering task-force",
//                 "bs": "target end-to-end models"
//             }
//         }
//     ]

//     const store=new Store(data)

//     console.table(store.get({
//         q:'mrs'
//     }).data)
// }
