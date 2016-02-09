/*!CK:1925369024!*//*1455047591,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["O8y59"]); }

__d('PagePluginEvents',['ImmutableObject','keyMirrorRecursive'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=new h(i({page_plugin:{tab:{configured:'',click:'',render:''},messages:{send:'',logged_out:'',invalid_height:''}}}));f.exports=j;},null);
__d("XPagePluginLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/plugin\/page\/logging\/",{});},null);
__d('PagePluginLogger',['AsyncRequest','XPagePluginLoggingController'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();function j(k,l){this.$PagePluginLogger1=k;this.$PagePluginLogger2=l;}j.prototype.notify=function(k,l,m){var n=i.getURIBuilder().getURI();new h().setURI(n).setMethod('POST').setData({event_name:k,page_id:this.$PagePluginLogger1,tab:l,data:Object.assign(m?m:{},{refererURL:this.$PagePluginLogger2})}).send();};f.exports=j;},null);
__d('PluginTabItem.react',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;'use strict';j=babelHelpers.inherits(l,h.Component);k=j&&j.prototype;l.prototype.render=function(){var m=this.props.tab.key;return (h.createElement('div',{className:"_eg_"+(this.props.activeTabKey===m?' '+"_eh2":''),onClick:(function(){return this.props.onSelected(m);}).bind(this)},h.createElement('div',{className:"_eh3"},this.props.tab.title)));};function l(){j.apply(this,arguments);}f.exports=l;},null);
__d('PluginTabControl.react',['Grid.react','PluginTabItem.react','React','cx'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;'use strict';var n=h.GridItem;l=babelHelpers.inherits(o,j.Component);m=l&&l.prototype;o.prototype.render=function(){return (j.createElement(h,{className:"_4v3l",cols:this.props.tabs.length,fixed:true},this.props.tabs.map((function(p){return (j.createElement(n,{className:"_4v3m",key:p.key},j.createElement(i,{activeTabKey:this.props.activeTabKey,tab:p,onSelected:this.props.onTabSelected})));}).bind(this))));};function o(){l.apply(this,arguments);}f.exports=o;},null);
__d("XPluginTabAsyncRendererController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/plugin\/tab\/renderer\/",{});},null);
__d('PluginTabFetcher.react',['AsyncRequest','DOM','DOMQuery','Event','React','ReactDOM','XPluginTabAsyncRendererController','XUISpinner.react','csx','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r,s;'use strict';r=babelHelpers.inherits(t,l.Component);s=r&&r.prototype;function t(u,v){s.constructor.call(this,u,v);this.state={isFetchingComponent:false,asyncContentLoaded:false};this.hasMoreContent=true;this.isLoadingContent=false;}t.prototype.componentWillReceiveProps=function(u){if(u.isActive===this.props.isActive||!u.isActive)return;this.$PluginTabFetcher1();};t.prototype.componentDidMount=function(){if(this.props.isActive)this.$PluginTabFetcher1();};t.prototype.$PluginTabFetcher2=function(){var u=this.refs.container,v=u.clientHeight,w=u.children[0].clientHeight,x=u.scrollTop,y=100;if(!this.isLoadingContent&&this.hasMoreContent&&x+v+y>w){this.isLoadingContent=true;this.$PluginTabFetcher3();}};t.prototype.$PluginTabFetcher3=function(){var u=n.getURIBuilder().getURI(),v=this.props.tab.configData;new h().setURI(u).setMethod('POST').setData({cursor:this.cursor,config_json:JSON.stringify(v),key:this.props.tab.key}).setHandler((function(w){this.setState({isFetchingComponent:false,asyncContentLoaded:true},(function(){var x=w.payload;this.isLoadingContent=false;if(this.hasMoreContent){var y=j.scry(this.refs.container,"._1_lk"),z=y[y.length-1];i.appendContent(z,x.content.markup);}}).bind(this));}).bind(this)).send();};t.prototype.$PluginTabFetcher4=function(){this.scrollListener=k.listen(this.refs.container,'scroll',(function(){if(this.scrollTimeout){clearTimeout(this.scrollTimeout);this.scrollTimeout=null;}this.scrollTimeout=setTimeout((function(){return this.$PluginTabFetcher2();}).bind(this),250);}).bind(this));var u=j.find(this.refs.container,"._10b6");k.listen(u,'noMoreContent',(function(){this.hasMoreContent=false;this.scrollListener.remove();}).bind(this));k.listen(u,'setCursor',(function(v){this.cursor=v.getData();}).bind(this));};t.prototype.$PluginTabFetcher1=function(){if(!this.state.asyncContentLoaded&&!this.state.isFetchingComponent){this.setState({isFetchingComponent:true});var u=n.getURIBuilder().getURI();new h().setURI(u).setMethod('POST').setData({config_json:JSON.stringify(this.props.tab.configData),key:this.props.tab.key}).setHandler((function(v){this.setState({isFetchingComponent:false,asyncContentLoaded:true},(function(){var w=v.payload;i.setContent(m.findDOMNode(this.refs.container),w.content.markup);if(this.props.tab.canLoadMore){this.cursor='';this.$PluginTabFetcher4();}}).bind(this));}).bind(this)).send();}};t.prototype.render=function(){return (l.createElement('div',{className:!this.props.isActive?"hidden_elem":''},l.createElement('div',{style:{maxHeight:this.props.tabHeight+'px'},className:"_10b4"+(this.state.isFetchingComponent?' '+"hidden_elem":''),ref:'container'}),l.createElement('div',{className:"_10b5"+(!this.state.isFetchingComponent?' '+"hidden_elem":'')},l.createElement(o,{className:"_4g7o",size:'large'}))));};f.exports=t;},null);
__d('PluginTabContainer.react',['PluginTabControl.react','PluginTabFetcher.react','React','cx'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;'use strict';l=babelHelpers.inherits(n,j.Component);m=l&&l.prototype;function n(o,p){m.constructor.call(this,o,p);this.state={activeTabKey:this.props.activeTabKey};}n.prototype.componentDidMount=function(){this.props.tabs.map((function(o){return this.onTabLoaded(o);}).bind(this));};n.prototype.onTabLoaded=function(o){};n.prototype.onTabSelected=function(o){this.setState({activeTabKey:o});};n.prototype.render=function(){var o=this.props.tabs.length;if(o===0)return null;return (j.createElement('div',null,o>1?j.createElement(h,{tabs:this.props.tabs,activeTabKey:this.state.activeTabKey,onTabSelected:(function(p){return this.onTabSelected(p);}).bind(this)}):null,j.createElement('div',{className:"_2hkj"},this.props.tabs.map((function(p){return (j.createElement(i,{key:p.key,tab:p,isActive:p.key===this.state.activeTabKey,tabHeight:this.props.tabHeight}));}).bind(this)))));};f.exports=n;},null);
__d('PagePluginTabContainer.react',['PagePluginEvents','PagePluginLogger','PluginTabContainer.react'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;'use strict';k=babelHelpers.inherits(m,j);l=k&&k.prototype;function m(n,o){l.constructor.call(this,n,o);this.$PagePluginTabContainer1=new i(n.pageID,n.refererURI);}m.prototype.onTabLoaded=function(n){this.$PagePluginTabContainer1.notify(h.page_plugin.tab.configured,n.key);};m.prototype.onTabSelected=function(n){this.$PagePluginTabContainer1.notify(h.page_plugin.tab.click,n);l.onTabSelected.call(this,n);};f.exports=m;},null);