// ==UserScript==
// @name        translate-helper
// @namespace   kjgong
// @match        *://translate.google.com/*
// @match        *://translate.google.cn/*
// @grant       none
// @version     1.0
// @author      kjgong@kjgong.cn
// @description 2020/12/11 下午4:25:34
// @updateURL https://raw.githubusercontent.com/Gongkangjia/translate-helper/main/translate-helper.js
// ==/UserScript==


(function() {
    'use strict';
    if (window.location.host !== 'translate.google.com' && window.location.host !== 'translate.google.cn') return;

    // 满宽屏！
    const root = document.querySelector('body > div.frame > div.page.tlid-homepage.homepage.translate-text');
    if (root) root.style.maxWidth = '96%';

    let timer = 0;

    function loop() {
        const ele = document.getElementsByTagName("textarea")[0];
        if (ele) {
            const t = ele.value;
            if (t) {
                const r = t.replace(/\n/g, ' ');
                if (r !== t) {
                    ele.value = r;
                }
            }
        }
        // timer
        clearTimeout(timer);
        timer = setTimeout(() => {
            loop();
        }, 1000);
    }

    timer = setTimeout(() => {
        loop();
    }, 1000);
})();
