// ==UserScript==
// @name        VK Video to My video
// @version     0.1
// @description Автоматическое перенаправленные на свои видео вместо общего каталога
// @author      HedgehogInTheCPP
// @icon        https://www.google.com/s2/favicons?domain=vk.com
// @match       https://vk.com/*
// @match       http://vk.com/*
// ==/UserScript==

setInterval(function(){
    var el = document.querySelector('#l_vid');
    if (el){
        el = el.querySelector('a[href="/video"]');
        if (el){
		    el.href = 'https://vk.com/video/-1';
        }
    }
}, 200);
