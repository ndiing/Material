if (!self.define) {
    let e,
        c = {};
    const i = (i, s) => (
        (i = new URL(i + ".js", s).href),
        c[i] ||
            new Promise((c) => {
                if ("document" in self) {
                    const e = document.createElement("script");
                    (e.src = i), (e.onload = c), document.head.appendChild(e);
                } else (e = i), importScripts(i), c();
            }).then(() => {
                let e = c[i];
                if (!e) throw new Error(`Module ${i} didn’t register its module`);
                return e;
            })
    );
    self.define = (s, r) => {
        const d = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (c[d]) return;
        let a = {};
        const f = (e) => i(e, d),
            b = { module: { uri: d }, exports: a, require: f };
        c[d] = Promise.all(s.map((e) => b[e] || f(e))).then((e) => (r(...e), a));
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
                { url: "146.js", revision: "261cd43e381811eebc12d40c5899b4f2" },
                { url: "190.js", revision: "85d5fec27e0457aa14cc93f80648a9bb" },
                { url: "214.js", revision: "6bf51b85d47507129e9b4baa80ddaccb" },
                { url: "220.js", revision: "3c03decc82d2450f132a2d7b0f580619" },
                { url: "24.js", revision: "e9691102ac91c5e6ff264fdc1a05a23a" },
                { url: "244.js", revision: "d1f020997313d5daa8bcb07b50442719" },
                { url: "254.js", revision: "cc60349e50835bb0e3628d591bd82344" },
                { url: "276.js", revision: "6cd29d6f5be84ebdf0cc611c79b7bcaa" },
                { url: "300.js", revision: "638543baa85b5adbd16ff93a423051d1" },
                { url: "411.js", revision: "5cc33d95e3c48c7d0205275c85116b17" },
                { url: "430.js", revision: "278d81b9a06b0d0c39297d34c0beca80" },
                { url: "465.js", revision: "f6cce3cc2a7ce3068dd8b3f3eaf9f9e0" },
                { url: "466.js", revision: "2a8bf0cc166cd4a84c1d0f748ea13354" },
                { url: "470.js", revision: "388262a7a5ac31bac7b4dfa0fc1fbeb4" },
                { url: "514.js", revision: "215d885ee51caa23740db81743644fa6" },
                { url: "522.js", revision: "38607978558d7c9f476abf69138c06b1" },
                { url: "526.js", revision: "a15ecbea6806e6f164c54f59f81d1f8c" },
                { url: "54.js", revision: "3f5efc9b5cc1129ea132d3110535a1a1" },
                { url: "566.js", revision: "a00a4fd9a3e0e122f33a9057a7b9a972" },
                { url: "60.js", revision: "a6ebd9ac4e6e1cbd01f098d2423e5570" },
                { url: "662.js", revision: "e35e7a3fd09858fcf86c4aabc711eef8" },
                { url: "67.js", revision: "3b624b1daf9b353ce717c88dbb79c7b4" },
                { url: "70.js", revision: "35c7f672c18922b2cfea75406d9e3486" },
                { url: "734.js", revision: "ea21ade5cd79d12882b1f9455bc94f16" },
                { url: "736.js", revision: "b5ad04611788d5499a938750cdfbdd08" },
                { url: "774.js", revision: "80d3a3aa5d9d47cddb333ac0c5a6d2cc" },
                { url: "78.js", revision: "0588a4780ff30e63d90e443ce8a1ba62" },
                { url: "790.js", revision: "1647f01f8f21a115afa244f488097630" },
                { url: "794.js", revision: "75185887f311dede3532555c6c638752" },
                { url: "80.js", revision: "df30a345b776c1d70f1d18cf6ea5fd9a" },
                { url: "833.js", revision: "31ab7971cbd123c7d7fa9ee123876c99" },
                { url: "86.js", revision: "3a170229862a0cff610283e33fa47433" },
                { url: "866.js", revision: "c24b1751152f70c889cb1da105b72e9f" },
                { url: "874.js", revision: "ed137a92895a09acf38ce2ca1f7c4621" },
                { url: "892.js", revision: "73e2eacb0fd3cdd889791ab776f220cd" },
                { url: "938.js", revision: "7b2c7e463167a1ed0d58ca1820facf04" },
                { url: "956.js", revision: "7983d38613002ea3a7d67685108f6203" },
                { url: "974.js", revision: "c388d707c6a09c37677a42401e563394" },
                { url: "index.html", revision: "94b19e1969e71d36a74ce911098744ce" },
                { url: "main.css", revision: "08450d8e414b55208c02db1931b8f5b5" },
                { url: "main.js", revision: "cfb6c3e737dc7d31c4907087f5b01d2c" },
                { url: "main.js.LICENSE.txt", revision: "cdec0f21261e186ea5e002716cb01deb" },
            ],
            {},
        );
});
