"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[612],{612:(e,n,i)=>{i.r(n),i.d(n,{default:()=>u});var t,d=i(420);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function a(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,l(t.key),t)}}function l(e){var n=function(e){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=m(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(n)?n:n+""}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(o=function(){return!!e})()}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function c(e,n){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},c(e,n)}var p=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n,i){return n=r(n),function(e,n){if(n&&("object"==m(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,o()?Reflect.construct(n,i||[],r(e).constructor):n.apply(e,i))}(this,n,arguments)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&c(e,n)}(n,e),i=n,l=[{key:"render",value:function(){return(0,d.qy)(t||(e=['\n            <div\n                class="md-grid"\n                style="margin:24px;"\n            >\n                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                    <md-form\n                        @onFormReset="','"\n                        @onFormSubmit="','"\n                        @onFormData="','"\n                    >\n                        <div class="md-grid">\n                            \x3c!-- <div \nclass="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n<label>hidden</label>\n<input type="hidden" name="hidden" value="hidden">\n</div> --\x3e\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>text</label>\n                                <input\n                                    type="text"\n                                    name="text"\n                                    value="text"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>password</label>\n                                <input\n                                    type="password"\n                                    name="password"\n                                    value="password"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>email</label>\n                                <input\n                                    type="email"\n                                    name="email"\n                                    value="ndiing.inc@gmail.com"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>tel</label>\n                                <input\n                                    type="tel"\n                                    name="tel"\n                                    value="+6281935155404"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>url</label>\n                                <input\n                                    type="url"\n                                    name="url"\n                                    value="http://www.google.com"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>search</label>\n                                <input\n                                    type="search"\n                                    name="search"\n                                    value="search"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>number</label>\n                                <input\n                                    type="number"\n                                    name="number"\n                                    value="123456789"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>date</label>\n                                <input\n                                    type="date"\n                                    name="date"\n                                    value="1990-10-17"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>datetime</label>\n                                <input\n                                    type="datetime-local"\n                                    name="datetime"\n                                    value="1990-10-17T03:00:00"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>month</label>\n                                <input\n                                    type="month"\n                                    name="month"\n                                    value="1990-10"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>time</label>\n                                <input\n                                    type="time"\n                                    name="time"\n                                    value="03:00"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>week</label>\n                                <input\n                                    type="week"\n                                    name="week"\n                                    value="1990-W42"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>checkbox</label>\n                                \x3c!-- <input type="checkbox" name="checkbox" value="1" checked> --\x3e\n                                <md-checkbox\n                                    name="checkbox"\n                                    value="1"\n                                    checked\n                                ></md-checkbox>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>checkbox</label>\n                                \x3c!-- <input type="checkbox" name="checkbox" value="2"> --\x3e\n                                <md-checkbox\n                                    name="checkbox"\n                                    value="2"\n                                ></md-checkbox>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>radio</label>\n                                \x3c!-- <input type="radio" name="radio" value="1" checked> --\x3e\n                                <md-radio-button\n                                    name="radio"\n                                    value="1"\n                                    checked\n                                ></md-radio-button>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>radio</label>\n                                \x3c!-- <input type="radio" name="radio" value="2"> --\x3e\n                                <md-radio-button\n                                    name="radio"\n                                    value="2"\n                                ></md-radio-button>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>switch</label>\n                                <md-switch\n                                    name="switch"\n                                    value="1"\n                                    checked\n                                ></md-switch>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>switch</label>\n                                <md-switch\n                                    name="switch"\n                                    value="2"\n                                ></md-switch>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>color</label>\n                                <input\n                                    type="color"\n                                    name="color"\n                                    value="#112233"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>file</label>\n                                <input\n                                    type="file"\n                                    name="file"\n                                    value="file"\n                                />\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>range</label>\n                                \x3c!-- <input type="range" name="range" value="range"> --\x3e\n                                <md-slider name="range"></md-slider>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>select</label>\n                                <select name="select0">\n                                    <option\n                                        value="1"\n                                        label="Option 1"\n                                        selected\n                                    ></option>\n                                    <option\n                                        value="2"\n                                        label="Option 2"\n                                    ></option>\n                                    <option\n                                        value="3"\n                                        label="Option 3"\n                                    ></option>\n                                </select>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>select</label>\n                                <select\n                                    name="select1"\n                                    multiple\n                                >\n                                    <option\n                                        value="1"\n                                        label="Option 1"\n                                        selected\n                                    ></option>\n                                    <option\n                                        value="2"\n                                        label="Option 2"\n                                        selected\n                                    ></option>\n                                    <option\n                                        value="3"\n                                        label="Option 3"\n                                    ></option>\n                                </select>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>select</label>\n                                <select name="select2">\n                                    <optgroup label="Group 1">\n                                        <option\n                                            value="1"\n                                            label="Option 1"\n                                            selected\n                                        ></option>\n                                        <option\n                                            value="2"\n                                            label="Option 2"\n                                        ></option>\n                                        <option\n                                            value="3"\n                                            label="Option 3"\n                                        ></option>\n                                    </optgroup>\n                                    <optgroup label="Group 2">\n                                        <option\n                                            value="a"\n                                            label="Option A"\n                                        ></option>\n                                        <option\n                                            value="b"\n                                            label="Option B"\n                                        ></option>\n                                        <option\n                                            value="c"\n                                            label="Option C"\n                                        ></option>\n                                    </optgroup>\n                                </select>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>select</label>\n                                <select\n                                    name="select3"\n                                    multiple\n                                >\n                                    <optgroup label="Group 1">\n                                        <option\n                                            value="1"\n                                            label="Option 1"\n                                            selected\n                                        ></option>\n                                        <option\n                                            value="2"\n                                            label="Option 2"\n                                        ></option>\n                                        <option\n                                            value="3"\n                                            label="Option 3"\n                                        ></option>\n                                    </optgroup>\n                                    <optgroup label="Group 2">\n                                        <option\n                                            value="a"\n                                            label="Option A"\n                                            selected\n                                        ></option>\n                                        <option\n                                            value="b"\n                                            label="Option B"\n                                        ></option>\n                                        <option\n                                            value="c"\n                                            label="Option C"\n                                        ></option>\n                                    </optgroup>\n                                </select>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <label>textarea</label>\n                                <textarea name="textarea">textarea</textarea>\n                            </div>\n                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">\n                                <md-button\n                                    variant="filled-tonal"\n                                    label="Reset"\n                                    type="reset"\n                                ></md-button>\n                                <md-button\n                                    variant="filled"\n                                    label="Submit"\n                                    type="submit"\n                                ></md-button>\n                            </div>\n                        </div>\n                    </md-form>\n                </div>\n                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>\n                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>\n            </div>\n        '],n||(n=e.slice(0)),t=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))),console.log,console.log,(function(e){return console.log(e.detail.event.body)}));var e,n}}],l&&a(i.prototype,l),Object.defineProperty(i,"prototype",{writable:!1}),i;var i,l}(i(829).$);customElements.define("demo-form",p);const u=document.createElement("demo-form",p)}}]);