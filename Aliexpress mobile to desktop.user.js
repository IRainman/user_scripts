// ==UserScript==
// @name        Aliexpress mobile to desktop version redirector
// @homepageURL https://github.com/IRainman/user_scripts
// @namespace   https://github.com/IRainman/user_scripts
// @supportURL  https://github.com/IRainman/user_scripts/issues
// @version     1.1
// @description Automatically redirects from mobile to desktop version
// @author      HedgehogInTheCPP
// @match       https://m.aliexpress.com/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    let url = 'https://aliexpress.com' + window.location.href.toString().split(window.location.host)[1];
    let form = document.createElement('form');
    form.method = 'post';
    form.action = url;
    document.body.appendChild(form);
    form.submit();
})();
