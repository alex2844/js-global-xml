(function() {
	'use strict';
	var XML = {
		parse: function(xmlStr) {
			if (typeof(XmlService) == 'object') {
				var root = XmlService.parse(xml).getRootElement(),
					res = {};
				res[root.getName()] = XML.el_gas(root);
				return res;
			}else{
				if ((typeof(DOMParser) == 'undefined') && (typeof(require) == 'function'))
					global.DOMParser = require('xmldom').DOMParser;
				return XML.el_node(new DOMParser().parseFromString(xmlStr, "text/xml"));
			}
		},
		el_gas: function(el) {
			var obj = {};
			el.getAttributes().forEach(function(attr) {
				obj[attr.getName()] = attr.getValue();
			});
			el.getChildren().forEach(function(child) {
				var key = child.getName(),
					value = XML.el_gas(child);
				if (obj[key]) {
					if (!(obj[key] instanceof Array))
						obj[key] = [ obj[key] ];
					obj[key].push(value);
				}else
					obj[key] = value;
			});
			var text = el.getText();
			obj['#text'] = ((text && text.trim()) ? text : null);
			return obj;
		},
		el_node: function(el) {
			var obj = {};
			if (el.nodeType == 1) {
				if (el.attributes.length > 0)
					Array.prototype.forEach.call(el.attributes, function(attr) {
						obj[attr.nodeName] = attr.nodeValue;
					});
			}else if ((el.nodeType == 3) || (el.nodeType == 4))
				obj = (el.nodeValue.trim() ? el.nodeValue : null);
			if (el.hasChildNodes())
				Array.prototype.forEach.call(el.childNodes, function(child) {
					var key = child.nodeName,
						value = XML.el_node(child);
					if (obj[key]) {
						if (typeof(obj[key].length) == 'undefined')
							obj[key] = [ obj[key] ];
						if (typeof(obj[key]) === 'object')
							obj[key].push(value);
					}else if (key)
						obj[key] = value;
				});
			return obj;
		}
	}
	if (typeof(window) == 'object')
		window.XML = XML;
	if (typeof(module) == 'object')
		module.exports = XML;
}());
