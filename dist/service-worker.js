if (!self.define) {
    let e,
        c = {};
    const f = (f, i) => (
        (f = new URL(f + ".js", i).href),
        c[f] ||
            new Promise((c) => {
                if ("document" in self) {
                    const e = document.createElement("script");
                    (e.src = f), (e.onload = c), document.head.appendChild(e);
                } else (e = f), importScripts(f), c();
            }).then(() => {
                let e = c[f];
                if (!e) throw new Error(`Module ${f} didn’t register its module`);
                return e;
            })
    );
    self.define = (i, d) => {
        const s = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (c[s]) return;
        let r = {};
        const a = (e) => f(e, s),
            b = { module: { uri: s }, exports: r, require: a };
        c[s] = Promise.all(i.map((e) => b[e] || a(e))).then((e) => (d(...e), r));
    };
}
define(["./workbox-915e8d08"], function (e) {
    "use strict";
    self.addEventListener("message", (e) => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
        e.precacheAndRoute(
            [
                { url: "142.js", revision: "64b3f6d0e62c30e7f6d2064eb5f5c417" },
                { url: "146.js", revision: "2dfb5d80b87ffdef81919c93573f4dfe" },
                { url: "190.js", revision: "a1065063791ea339338b532eaa947763" },
                { url: "214.js", revision: "3fe21bcf85e24f05afc6df8e8c3cea56" },
                { url: "220.js", revision: "3c03decc82d2450f132a2d7b0f580619" },
                { url: "24.js", revision: "168929d9ee081405fcd3e019dd62a9ae" },
                { url: "244.js", revision: "d1f020997313d5daa8bcb07b50442719" },
                { url: "254.js", revision: "941a95cb1674f235ba14ef0c4d4ba98b" },
                { url: "276.js", revision: "6cd29d6f5be84ebdf0cc611c79b7bcaa" },
                { url: "300.js", revision: "42362d996f15a57d461897c086364c63" },
                { url: "326.js", revision: "e7c351e9fbe69dbcb38b3e336c1df09b" },
                { url: "411.js", revision: "5cc33d95e3c48c7d0205275c85116b17" },
                { url: "430.js", revision: "e534406bd4db78c50fc336c0b28d3379" },
                { url: "465.js", revision: "594640ec89a78c0b25107945dbfdaddf" },
                { url: "466.js", revision: "dcc9f0237aa48704061ad45fd9837b6c" },
                { url: "470.js", revision: "76cacece68fdddf4fb1f77e5fcd60b5d" },
                { url: "510.js", revision: "60d47ab1f4804fc3a245c579dd9de5f3" },
                { url: "514.js", revision: "ebfc84dfd27f73b863ca65f36855f94e" },
                { url: "522.js", revision: "42f8443e27af767d2c187f55bbefb721" },
                { url: "526.js", revision: "a15ecbea6806e6f164c54f59f81d1f8c" },
                { url: "54.js", revision: "f812ff244c9542feaf8e7101151851cb" },
                { url: "566.js", revision: "7c488eed9c3a3fca18710d053b71add8" },
                { url: "60.js", revision: "c04be8d00c7c20350389a9132d2a1bdd" },
                { url: "662.js", revision: "99e8cd860a955415e553ea15d3e66c85" },
                { url: "67.js", revision: "a0b015bb130a8146239b0b20e0e809ff" },
                { url: "70.js", revision: "fb75d027794f41cd21ad0bc08304be12" },
                { url: "734.js", revision: "278381efee44611c2ac86cf9b6f2d604" },
                { url: "736.js", revision: "d3f2bdcfafad0377ca533ec00f4a5afe" },
                { url: "774.js", revision: "80d3a3aa5d9d47cddb333ac0c5a6d2cc" },
                { url: "78.js", revision: "0588a4780ff30e63d90e443ce8a1ba62" },
                { url: "790.js", revision: "d751ccdb74df244bfbb3f70e93f60a10" },
                { url: "794.js", revision: "c8879515cb3cff935d32c24cff4a3cfe" },
                { url: "80.js", revision: "0cc7390a6a9ad5391c3696cb1b8d9878" },
                { url: "833.js", revision: "4ad607530ca5517d45ec8ce19eb1fc54" },
                { url: "86.js", revision: "3a170229862a0cff610283e33fa47433" },
                { url: "866.js", revision: "8ae58f574ab9793be5dbbc11c75faf02" },
                { url: "874.js", revision: "ed137a92895a09acf38ce2ca1f7c4621" },
                { url: "892.js", revision: "89a5323f1be85a337da830f2330ad7cc" },
                { url: "938.js", revision: "3031823dc006cf6a070ad753ef11dce3" },
                { url: "956.js", revision: "188799d1e060390c595a9c19d6fa9b9e" },
                { url: "974.js", revision: "0ffac39ca096c36e38b4e9d225b87c06" },
                { url: "index.html", revision: "94b19e1969e71d36a74ce911098744ce" },
                { url: "main.css", revision: "74308ac51258f749f57b4c71f38a5dfd" },
                { url: "main.js", revision: "5399a01f274dd9cbd126e3858328b57b" },
                { url: "main.js.LICENSE.txt", revision: "cdec0f21261e186ea5e002716cb01deb" },
            ],
            {},
        );
});
