// ==UserScript==
// @name        Aliexpress Localized links remover
// @description Removes localized links for Aliexpress and replaces them to the English site urls
// @homepageURL https://github.com/IRainman/user_scripts
// @namespace   https://github.com/IRainman/user_scripts
// @supportURL  https://github.com/IRainman/user_scripts/issues
// @author      HedgehogInTheCPP
// @version     1.5
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
 	function checkLinkHost(host, link) {
	 	if (link.host == host) {
			return true;
		} else if (link.host.length < host.length + 1) {
			return false;
		} else if (link.host.endsWith("." + host)) {
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
		'de.aliexpress.com',
	 ];
 	const replacement = 'aliexpress.com';
	function rwLink(link) {
	 	for (let i = 0; i < domains.length; ++i) {
			if (checkLinkHost(domains[i], link) && replaceLinkPattern(domains[i], replacement, link)) {
				break;
			}
		}
	}
	function rwLinksInNode(node, patterns) {
		let links = node.getElementsByTagName('a');
		for (let i = 0; i < links.length; ++i) {
			rwLink(links[i]);
		}
	}
	(function () {
		document.addEventListener('DOMNodeInserted', function (event) {
			if (event && event.target &&(event.target instanceof HTMLElement)) {
				let node = event.target;
				if (node instanceof HTMLAnchorElement) {
					rwLink(node);
				}
				rwLinksInNode(node);
			}
		}, false);
	})();
	rwLinksInNode(document);
})();
