!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("4",tinymce.util.Tools.resolve),g("1",["4"],function(a){return a("tinymce.PluginManager")}),g("2",["4"],function(a){return a("tinymce.Env")}),g("3",["4"],function(a){return a("tinymce.util.Tools")}),g("0",["1","2","3"],function(a,b,c){return a.add("preview",function(a){var d=a.settings,e=!b.ie;a.addCommand("mcePreview",function(){a.windowManager.open({title:"Preview",width:parseInt(a.getParam("plugin_preview_width","650"),10),height:parseInt(a.getParam("plugin_preview_height","500"),10),html:'<iframe src="javascript:\'\'" frameborder="0"'+(e?' sandbox="allow-scripts"':"")+"></iframe>",buttons:{text:"Close",onclick:function(){this.parent().parent().close()}},onPostRender:function(){var b,f="",g=a.dom.encode;f+='<base href="'+g(a.documentBaseURI.getURI())+'">',c.each(a.contentCSS,function(b){f+='<link type="text/css" rel="stylesheet" href="'+g(a.documentBaseURI.toAbsolute(b))+'">'});var h=d.body_id||"tinymce";h.indexOf("=")!=-1&&(h=a.getParam("body_id","","hash"),h=h[a.id]||h);var i=d.body_class||"";i.indexOf("=")!=-1&&(i=a.getParam("body_class","","hash"),i=i[a.id]||"");var j='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A") {e.preventDefault();}}}, false);</script> ',k=a.settings.directionality?' dir="'+a.settings.directionality+'"':"";if(b="<!DOCTYPE html><html><head>"+f+'</head><body id="'+g(h)+'" class="mce-content-body '+g(i)+'"'+g(k)+">"+a.getContent()+j+"</body></html>",e)this.getEl("body").firstChild.src="data:text/html;charset=utf-8,"+encodeURIComponent(b);else{var l=this.getEl("body").firstChild.contentWindow.document;l.open(),l.write(b),l.close()}}})}),a.addButton("preview",{title:"Preview",cmd:"mcePreview"}),a.addMenuItem("preview",{text:"Preview",cmd:"mcePreview",context:"view"})}),function(){}}),d("0")()}();