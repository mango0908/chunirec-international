// ==UserScript==
// @name         run chunirec-international on all chunithm-net pages
// @version      0.1
// @description  run chunirec-international on all chunithm-net pages
// @author       mango0908
// @match        https://chunithm-net-eng.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const s = document.createElement('script');
    s.src = 'https://mango0908.github.io/chunirec-international/scripts/chunirec-international.js?t=' + Math.floor(Date.now() / 60000);
    document.body.append(s);
})();
