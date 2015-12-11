tinymce.PluginManager.add("lists",function(a){function b(a){return a&&/^(OL|UL|DL)$/.test(a.nodeName)}function c(a){return a.parentNode.firstChild==a}function d(a){return a.parentNode.lastChild==a}function e(b){return b&&!!a.schema.getTextBlockElements()[b.nodeName]}function f(b){return b===a.getBody()}var g=this;a.on("init",function(){function h(a,b){var c=x.isEmpty(a);return b&&x.select("span[data-mce-type=bookmark]").length>0?!1:c}function i(a){function b(b){var d,e,f;e=a[b?"startContainer":"endContainer"],f=a[b?"startOffset":"endOffset"],1==e.nodeType&&(d=x.create("span",{"data-mce-type":"bookmark"}),e.hasChildNodes()?(f=Math.min(f,e.childNodes.length-1),b?e.insertBefore(d,e.childNodes[f]):x.insertAfter(d,e.childNodes[f])):e.appendChild(d),e=d,f=0),c[b?"startContainer":"endContainer"]=e,c[b?"startOffset":"endOffset"]=f}var c={};return b(!0),a.collapsed||b(),c}function j(a){function b(b){function c(a){for(var b=a.parentNode.firstChild,c=0;b;){if(b==a)return c;(1!=b.nodeType||"bookmark"!=b.getAttribute("data-mce-type"))&&c++,b=b.nextSibling}return-1}var d,e,f;d=f=a[b?"startContainer":"endContainer"],e=a[b?"startOffset":"endOffset"],d&&(1==d.nodeType&&(e=c(d),d=d.parentNode,x.remove(f)),a[b?"startContainer":"endContainer"]=d,a[b?"startOffset":"endOffset"]=e)}b(!0),b();var c=x.createRng();c.setStart(a.startContainer,a.startOffset),a.endContainer&&c.setEnd(a.endContainer,a.endOffset),y.setRng(c)}function k(b,c){var d,e,f,g=x.createFragment(),h=a.schema.getBlockElements();if(a.settings.forced_root_block&&(c=c||a.settings.forced_root_block),c&&(e=x.create(c),e.tagName===a.settings.forced_root_block&&x.setAttribs(e,a.settings.forced_root_block_attrs),g.appendChild(e)),b)for(;d=b.firstChild;){var i=d.nodeName;f||"SPAN"==i&&"bookmark"==d.getAttribute("data-mce-type")||(f=!0),h[i]?(g.appendChild(d),e=null):c?(e||(e=x.create(c),g.appendChild(e)),e.appendChild(d)):g.appendChild(d)}return a.settings.forced_root_block?f||tinymce.Env.ie&&!(tinymce.Env.ie>10)||e.appendChild(x.create("br",{"data-mce-bogus":"1"})):g.appendChild(x.create("br")),g}function l(){return tinymce.grep(y.getSelectedBlocks(),function(a){return/^(LI|DT|DD)$/.test(a.nodeName)})}function m(a,b,c){function d(a){tinymce.each(g,function(c){a.parentNode.insertBefore(c,b.parentNode)}),x.remove(a)}var e,f,g,i;for(g=x.select('span[data-mce-type="bookmark"]',a),c=c||k(b),e=x.createRng(),e.setStartAfter(b),e.setEndAfter(a),f=e.extractContents(),i=f.firstChild;i;i=i.firstChild)if("LI"==i.nodeName&&x.isEmpty(i)){x.remove(i);break}x.isEmpty(f)||x.insertAfter(f,a),x.insertAfter(c,a),h(b.parentNode)&&d(b.parentNode),x.remove(b),h(a)&&x.remove(a)}function n(a){var c,d;if(c=a.nextSibling,c&&b(c)&&c.nodeName==a.nodeName){for(;d=c.firstChild;)a.appendChild(d);x.remove(c)}if(c=a.previousSibling,c&&b(c)&&c.nodeName==a.nodeName){for(;d=c.firstChild;)a.insertBefore(d,a.firstChild);x.remove(c)}}function o(a){tinymce.each(tinymce.grep(x.select("ol,ul",a)),function(a){var c,d=a.parentNode;"LI"==d.nodeName&&d.firstChild==a&&(c=d.previousSibling,c&&"LI"==c.nodeName&&(c.appendChild(a),h(d)&&x.remove(d))),b(d)&&(c=d.previousSibling,c&&"LI"==c.nodeName&&c.appendChild(a))})}function p(a){function e(a){h(a)&&x.remove(a)}var g,i=a.parentNode,j=i.parentNode;return f(i)?!0:"DD"==a.nodeName?(x.rename(a,"DT"),!0):c(a)&&d(a)?("LI"==j.nodeName?(x.insertAfter(a,j),e(j),x.remove(i)):b(j)?x.remove(i,!0):(j.insertBefore(k(a),i),x.remove(i)),!0):c(a)?("LI"==j.nodeName?(x.insertAfter(a,j),a.appendChild(i),e(j)):b(j)?j.insertBefore(a,i):(j.insertBefore(k(a),i),x.remove(a)),!0):d(a)?("LI"==j.nodeName?x.insertAfter(a,j):b(j)?x.insertAfter(a,i):(x.insertAfter(k(a),i),x.remove(a)),!0):("LI"==j.nodeName?(i=j,g=k(a,"LI")):g=b(j)?k(a,"LI"):k(a),m(i,a,g),o(i.parentNode),!0)}function q(a){function c(c,d){var e;if(b(c)){for(;e=a.lastChild.firstChild;)d.appendChild(e);x.remove(c)}}var d,e;return"DT"==a.nodeName?(x.rename(a,"DD"),!0):(d=a.previousSibling,d&&b(d)?(d.appendChild(a),!0):d&&"LI"==d.nodeName&&b(d.lastChild)?(d.lastChild.appendChild(a),c(a.lastChild,d.lastChild),!0):(d=a.nextSibling,d&&b(d)?(d.insertBefore(a,d.firstChild),!0):d&&"LI"==d.nodeName&&b(a.lastChild)?!1:(d=a.previousSibling,d&&"LI"==d.nodeName?(e=x.create(a.parentNode.nodeName),d.appendChild(e),e.appendChild(a),c(a.lastChild,e),!0):!1)))}function r(){var b=l();if(b.length){for(var c=i(y.getRng(!0)),d=0;d<b.length&&(q(b[d])||0!==d);d++);return j(c),a.nodeChanged(),!0}}function s(){var b=l();if(b.length){var c,d,e=i(y.getRng(!0)),f=a.getBody();for(c=b.length;c--;)for(var g=b[c].parentNode;g&&g!=f;){for(d=b.length;d--;)if(b[d]===g){b.splice(c,1);break}g=g.parentNode}for(c=0;c<b.length&&(p(b[c])||0!==c);c++);return j(e),a.nodeChanged(),!0}}function t(c){function d(){function b(a){var b,c;for(b=g[a?"startContainer":"endContainer"],c=g[a?"startOffset":"endOffset"],1==b.nodeType&&(b=b.childNodes[Math.min(c,b.childNodes.length-1)]||b);b.parentNode!=f;){if(e(b))return b;if(/^(TD|TH)$/.test(b.parentNode.nodeName))return b;b=b.parentNode}return b}for(var c,d=[],f=a.getBody(),h=b(!0),i=b(),j=[],k=h;k&&(j.push(k),k!=i);k=k.nextSibling);return tinymce.each(j,function(a){if(e(a))return d.push(a),void(c=null);if(x.isBlock(a)||"BR"==a.nodeName)return"BR"==a.nodeName&&x.remove(a),void(c=null);var b=a.nextSibling;return tinymce.dom.BookmarkManager.isBookmarkNode(a)&&(e(b)||!b&&a.parentNode==f)?void(c=null):(c||(c=x.create("p"),a.parentNode.insertBefore(c,a),d.push(c)),void c.appendChild(a))}),d}var f,g=y.getRng(!0),h="LI";"false"!==x.getContentEditable(y.getNode())&&(c=c.toUpperCase(),"DL"==c&&(h="DT"),f=i(g),tinymce.each(d(),function(a){var d,e;e=a.previousSibling,e&&b(e)&&e.nodeName==c?(d=e,a=x.rename(a,h),e.appendChild(a)):(d=x.create(c),a.parentNode.insertBefore(d,a),d.appendChild(a),a=x.rename(a,h)),n(d)}),j(f))}function u(){var c=i(y.getRng(!0)),d=a.getBody();tinymce.each(l(),function(a){var c,e;if(!f(a.parentNode)){if(h(a))return void p(a);for(c=a;c&&c!=d;c=c.parentNode)b(c)&&(e=c);m(e,a)}}),j(c)}function v(a){var b=x.getParent(y.getStart(),"OL,UL,DL");if(!f(b))if(b)if(b.nodeName==a)u(a);else{var c=i(y.getRng(!0));n(x.rename(b,a)),j(c)}else t(a)}function w(b){return function(){var c=x.getParent(a.selection.getStart(),"UL,OL,DL");return c&&c.nodeName==b}}var x=a.dom,y=a.selection;g.backspaceDelete=function(c){function d(b,c){var d,e,f=b.startContainer,g=b.startOffset;if(3==f.nodeType&&(c?g<f.data.length:g>0))return f;for(d=a.schema.getNonEmptyElements(),e=new tinymce.dom.TreeWalker(b.startContainer);f=e[c?"next":"prev"]();){if("LI"==f.nodeName&&!f.hasChildNodes())return f;if(d[f.nodeName])return f;if(3==f.nodeType&&f.data.length>0)return f}}function e(a,c){var d,e,g=a.parentNode;if(b(c.lastChild)&&(e=c.lastChild),d=c.lastChild,d&&"BR"==d.nodeName&&a.hasChildNodes()&&x.remove(d),h(c,!0)&&x.$(c).empty(),!h(a,!0))for(;d=a.firstChild;)c.appendChild(d);e&&c.appendChild(e),x.remove(a),h(g)&&!f(g)&&x.remove(g)}if(y.isCollapsed()){var g,k,l,m=x.getParent(y.getStart(),"LI");if(m){if(g=m.parentNode,f(g)&&x.isEmpty(g))return!0;if(k=y.getRng(!0),l=x.getParent(d(k,c),"LI"),l&&l!=m){var n=i(k);return c?e(l,m):e(m,l),j(n),!0}if(!l&&!c&&u(g.nodeName))return!0}}},a.on("BeforeExecCommand",function(b){var c,d=b.command.toLowerCase();return"indent"==d?r()&&(c=!0):"outdent"==d&&s()&&(c=!0),c?(a.fire("ExecCommand",{command:b.command}),b.preventDefault(),!0):void 0}),a.addCommand("InsertUnorderedList",function(){v("UL")}),a.addCommand("InsertOrderedList",function(){v("OL")}),a.addCommand("InsertDefinitionList",function(){v("DL")}),a.addQueryStateHandler("InsertUnorderedList",w("UL")),a.addQueryStateHandler("InsertOrderedList",w("OL")),a.addQueryStateHandler("InsertDefinitionList",w("DL")),a.on("keydown",function(b){9!=b.keyCode||tinymce.util.VK.metaKeyPressed(b)||a.dom.getParent(a.selection.getStart(),"LI,DT,DD")&&(b.preventDefault(),b.shiftKey?s():r())})}),a.addButton("indent",{icon:"indent",title:"Increase indent",cmd:"Indent",onPostRender:function(){var b=this;a.on("nodechange",function(){for(var d=a.selection.getSelectedBlocks(),e=!1,f=0,g=d.length;!e&&g>f;f++){var h=d[f].nodeName;e="LI"==h&&c(d[f])||"UL"==h||"OL"==h||"DD"==h}b.disabled(e)})}}),a.on("keydown",function(a){a.keyCode==tinymce.util.VK.BACKSPACE?g.backspaceDelete()&&a.preventDefault():a.keyCode==tinymce.util.VK.DELETE&&g.backspaceDelete(!0)&&a.preventDefault()})});