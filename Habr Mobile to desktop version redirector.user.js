// ==UserScript==
// @name        Habr Mobile to desktop version redirector
// @namespace   https://github.com/IRainman/user_scripts
// @supportURL  https://github.com/IRainman/user_scripts/issues
// @version     1.1
// @description Automatically redirects from mobile to desktop version
// @author      HedgehogInTheCPP
// @match       https://m.habr.com/*
// @match       http://m.habr.com/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    var url = 'https://habr.com' + window.location.href.toString().split(window.location.host)[1];
    var form = document.createElement('form');
    form.method = 'post';
    form.action = url;
    document.body.appendChild(form);
    form.submit();
})();
