if (!self.define) {
    let e,
        i = {};
    const s = (s, r) => (
        (s = new URL(s + ".js", r).href),
        i[s] ||
            new Promise((i) => {
                if ("document" in self) {
                    const e = document.createElement("script");
                    (e.src = s), (e.onload = i), document.head.appendChild(e);
                } else (e = s), importScripts(s), i();
            }).then(() => {
                let e = i[s];
                if (!e) throw new Error(`Module ${s} didn’t register its module`);
                return e;
            })
    );
    self.define = (r, b) => {
        const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[c]) return;
        let d = {};
        const f = (e) => s(e, c),
            a = { module: { uri: c }, exports: d, require: f };
        i[c] = Promise.all(r.map((e) => a[e] || f(e))).then((e) => (b(...e), d));
    };
}
define(["./workbox-915e8d08"], function (e) {
    "use strict";
    self.addEventListener("message", (e) => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
        e.precacheAndRoute(
            [
                { url: "129.js", revision: "f25b768d1a418453f4f96d610070263b" },
                { url: "142.js", revision: "48d05ce1382670afd5793086af4e4089" },
                { url: "146.js", revision: "e7b818ae6f6e51d2648a2e2f45364858" },
                { url: "190.js", revision: "1637e3a030cd6a19c0cfd3eccfdc173e" },
                { url: "214.js", revision: "41ce78e0b64bd51b806da44ba100ca18" },
                { url: "220.js", revision: "e74b4d00bfdb81ad66cfcde39d45f208" },
                { url: "24.js", revision: "bd225907c65aad41e9d466e3280d5667" },
                { url: "244.js", revision: "cde36a7b3177321c032e024c8b26137f" },
                { url: "254.js", revision: "5043694281c6067c7b6cf6a00e603819" },
                { url: "276.js", revision: "aa17ddf3b10b68a1c6243b14ef6cdebc" },
                { url: "300.js", revision: "fe74da42e1e363db527bbe3dbb73cd97" },
                { url: "326.js", revision: "6015ad95979c826fd1390b660a5b8cab" },
                { url: "411.js", revision: "dea6219aa784520bb55ec2e2a9d7fa5b" },
                { url: "430.js", revision: "ad6b1fd5024fe35371851ce9bc5a10e1" },
                { url: "436.js", revision: "96ffb00b541e417095af2e4214092a92" },
                { url: "465.js", revision: "bf2d749442b4079279bb0f2d98bdbcc8" },
                { url: "466.js", revision: "c170bc59e6c803b6bec1fd4d4d402235" },
                { url: "470.js", revision: "12206cb466f4f09d052cba8bb76f5306" },
                { url: "510.js", revision: "c94addf6ef5cc9a77f05c9e85382c543" },
                { url: "514.js", revision: "361359a6cdb3a6c81f2f89b652d54f8d" },
                { url: "522.js", revision: "2b90886e69582d61744b27bbabf160a2" },
                { url: "526.js", revision: "75b100794b771b04ef46ce4df477f3cf" },
                { url: "54.js", revision: "c4f41ad302850289f65685bc7595f2e9" },
                { url: "566.js", revision: "eb9f2f936539d2ccf32ba686c7abfde1" },
                { url: "60.js", revision: "d8aa3f9ceb951dd36760f8b0fe05d495" },
                { url: "612.js", revision: "02e311cfba58f431eb934b0b4586a996" },
                { url: "614.js", revision: "bb58c36055f82fc0bacd127153353313" },
                { url: "662.js", revision: "2a05abefc04407e012fec6d497fcc846" },
                { url: "67.js", revision: "2bc9421354d3e3c1e0507924a4f5ee0b" },
                { url: "70.js", revision: "dff254ea9c667dca23d53eabc61cf1c6" },
                { url: "734.js", revision: "870bda4a9322386c48cbab03c92a80b9" },
                { url: "736.js", revision: "acdfe870b77b22867b7471470f2e09a4" },
                { url: "774.js", revision: "d0dd44136fe638fb307d338b14385e29" },
                { url: "78.js", revision: "ce0527cd5e7d109346b0e4ba5d08a517" },
                { url: "790.js", revision: "455b90338500ef3b35631b4aade6c904" },
                { url: "794.js", revision: "356a25d4438cd27a3d33832c5f112b8c" },
                { url: "80.js", revision: "3a9ead8f5a6ac63df8bef419d43ce154" },
                { url: "833.js", revision: "dfc3e2af593b1199b33c89ccf01c944d" },
                { url: "86.js", revision: "05542082415cc663290317371c4b0658" },
                { url: "866.js", revision: "9d2cbb8b81468616e6d01cf9f54993cf" },
                { url: "874.js", revision: "de38ae7e625819cfdf85e73445fead42" },
                { url: "884.js", revision: "0a78bbbc274624a1020511b17f483f2e" },
                { url: "892.js", revision: "527c3b73757219b651e3799ec979dae2" },
                { url: "938.js", revision: "57190b0be84bac6280ab4ed6f5b62b03" },
                { url: "956.js", revision: "670c5b0d07e19fe2dc52a359f53d1d96" },
                { url: "974.js", revision: "e4b916fd6a49e425b25b79334baa802a" },
                { url: "index.html", revision: "94b19e1969e71d36a74ce911098744ce" },
                { url: "main.css", revision: "7762af801afacdc85d1bb57275f28814" },
                { url: "main.js", revision: "ff45e3dd926c5240673ee810a06664ae" },
                { url: "main.js.LICENSE.txt", revision: "fbe86efadd34c22f192559bad5bcedc6" },
            ],
            {},
        );
});
