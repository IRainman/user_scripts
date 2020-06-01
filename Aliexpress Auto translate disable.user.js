// ==UserScript==
// @name        Aliexpress Auto translate disable
// @description Disable auto translation in title and description for Aliexpress sites.
// @homepageURL https://github.com/IRainman/user_scripts
// @namespace   https://github.com/IRainman/user_scripts
// @supportURL  https://github.com/IRainman/user_scripts/issues
// @author      HedgehogInTheCPP
// @version     1.2
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
	function rwLink(link) {
		if (link.href.indexOf('.aliexpress.com/item/') !== -1 ||
			link.href.indexOf('.aliexpress.com/store/product/') !== -1) {
			if (link.href.indexOf('isOrigTitle') == -1 &&
				link.href.indexOf('isOrig') == -1) {
				if (!replaceLinkPattern('?', '?isOrigTitle=true&isOrig=true&', link) &&
					!replaceLinkPattern('#', '?isOrigTitle=true&isOrig=true#', link)) {
						link.href += '?isOrigTitle=true&isOrig=true';
				}
			}
		}
	}
	rwLink(location);
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
