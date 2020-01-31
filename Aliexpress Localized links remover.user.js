// ==UserScript==
// @name        Aliexpress Localized links remover
// @description Removes localized links for Aliexpress and replaces them to the English site urls
// @namespace   https://github.com/IRainman/user_scripts
// @author      HedgehogInTheCPP
// @version     1.0
// @grant       none
// @include     http://*
// @include     https://*
// ==/UserScript==
(function () {
	String.prototype.replaceAt=function(index, replacement, length) {
    	return this.substr(0, index) + replacement + this.substr(index + length);
	}
	function replaceLinkPattern(pattern, replacement, link) {
		const index = link.href.indexOf(pattern);
		if (index !== -1) {
			link.href = link.href.replaceAt(index, replacement, pattern.length);
			return true;
		} else {
		 	return false;
		}
	}
	const domains = [
		'aliexpress.ru',
		'ru.aliexpress.com',
		'pt.aliexpress.com',
		'es.aliexpress.com',
		'id.aliexpress.com',
		'ar.aliexpress.com',
		'ko.aliexpress.com',
		'pl.aliexpress.com',
		'ja.aliexpress.com',
		'th.aliexpress.com',
		'tr.aliexpress.com',
		'it.aliexpress.com',
		'vi.aliexpress.com',
		'he.aliexpress.com',
		'fr.aliexpress.com',
	 ];
 	const replacement = 'aliexpress.com';
	function rwLink(link) {
	 	for (var i = 0; i < domains.length; ++i) {
			if (replaceLinkPattern(domains[i], replacement, link)) {
				break;
			}
		}
	}
	function rwLinksInNode(node, patterns) {
		var links = node.getElementsByTagName('a');
		for (var i = 0; i < links.length; ++i) {
			rwLink(links[i]);
		}
	}
	(function () {
		document.addEventListener('DOMNodeInserted', function (event) {
			if (event && event.target &&(event.target instanceof HTMLElement)) {
				var node = event.target;
				if (node instanceof HTMLAnchorElement) {
					rwLink(node);
				}
				rwLinksInNode(node);
			}
		}, false);
	})();
	rwLinksInNode(document);
})();