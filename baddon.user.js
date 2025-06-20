// ==UserScript==
// @name         B/addons NI
// @version      1.2
// @description  Menadżer dodatków by besiak
// @author       besiak
// @match        https://*.margonem.pl/
// @grant        none
// @icon         https://i.imgur.com/OAtRFEw.png
// @downloadURL  https://github.com/besiak6/baddonz/raw/refs/heads/main/baddon.user.js
// @updateURL    https://github.com/besiak6/baddonz/raw/refs/heads/main/baddon.user.js
// ==/UserScript==
(function() {
    const version = Date.now();
    const build = "https://addons2.margonem.pl/get/153/153352dev.js";
    const script = document.createElement("script");
    script.src = `${build}?v=${version}`;
    document.body.appendChild(script);
})();
