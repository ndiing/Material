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
    self.define = (r, f) => {
        const d = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[d]) return;
        let a = {};
        const c = (e) => s(e, d),
            n = { module: { uri: d }, exports: a, require: c };
        i[d] = Promise.all(r.map((e) => n[e] || c(e))).then((e) => (f(...e), a));
    };
}
define(["./workbox-915e8d08"], function (e) {
    "use strict";
    self.addEventListener("message", (e) => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
        e.precacheAndRoute(
            [
                { url: "142.js", revision: "edfcc15ce21d5c98e6df554c318c0f51" },
                { url: "146.js", revision: "5bd3f694b86625e72f5d8a0556570e2b" },
                { url: "190.js", revision: "7a52af9aa43e3f2b95767f2bb68c23af" },
                { url: "220.js", revision: "23d0e998872cd9b401d8a5ac86a672e1" },
                { url: "24.js", revision: "e5fff09638ae219aba96afbcc933ebc9" },
                { url: "254.js", revision: "1aa445fd35d91e4ed773b509739e4014" },
                { url: "276.js", revision: "4db1082454d6ef2728fc15fa4c52458c" },
                { url: "300.js", revision: "1f56cfd3e5623320159f708613880b79" },
                { url: "411.js", revision: "44aaa40c4a0b8743f4b5fd109ffb124c" },
                { url: "465.js", revision: "011865a425e2d839036bd5124260927d" },
                { url: "466.js", revision: "2fdc69badf833fcaa70f8878f838baf6" },
                { url: "526.js", revision: "718ebe8286764fff3e79b5236242ec78" },
                { url: "54.js", revision: "3a47631a6db96511f7070a848aa918db" },
                { url: "566.js", revision: "479bdd8815d36470e94cf16c9da3a5a1" },
                { url: "60.js", revision: "897de3ba8435d0a117ed495dd7363445" },
                { url: "662.js", revision: "79c2a80d08ca3b8bf8584a26f9bd198d" },
                { url: "734.js", revision: "a11f17929e25c0a526f8b18699e008fc" },
                { url: "736.js", revision: "607937fd5ec94d449bd3d09eb985a045" },
                { url: "774.js", revision: "fd34ce8ad17d39d447c01ae99b80bf56" },
                { url: "78.js", revision: "fad09205e93fe0a7c220071af9ea221f" },
                { url: "790.js", revision: "f383727465a26bdace33c16cebf6b453" },
                { url: "794.js", revision: "c9f8b8387de265d47903e890a37c0d73" },
                { url: "80.js", revision: "ad4efc5deee4c7968cef0f85dd6868e8" },
                { url: "86.js", revision: "9fbf3d309e7fc310ac0f2703fb99f882" },
                { url: "874.js", revision: "bb14a64e517bcb533429fe88a342c52c" },
                { url: "892.js", revision: "224e4f404119a413f23385a6977973fb" },
                { url: "938.js", revision: "f39bf046455cfa8f0996e21701af3093" },
                { url: "956.js", revision: "5426d67fa4b0a576ad78c5cb8c58c595" },
                { url: "974.js", revision: "24e27afed5b9f42dd74c2d3044600e20" },
                { url: "index.html", revision: "73999020102d52818a0121b5d766eac6" },
                { url: "main.css", revision: "062c140e8ee8b1da447ae79eb76531d5" },
                { url: "main.js", revision: "0283569b9630d40e994b168f0e61cdfa" },
                { url: "main.js.LICENSE.txt", revision: "cdec0f21261e186ea5e002716cb01deb" },
            ],
            {},
        );
});
