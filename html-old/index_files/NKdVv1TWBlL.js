/*!CK:536585034!*//*1454768604,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/phnW"]); }

__d('PluginFeedFooterActionLogger',['BanzaiLogger','DOM','Event','EmbeddedPostPluginActions','EmbeddedPostPluginActionTypes'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={initializeClickLoggers:function(n,o,p,q,r,s,t,u,v){var w=function(x,y){try{var aa=i.find(n,'.'+x);j.listen(aa,'click',function(ba){h.log('PostPluginActionsLoggerConfig',{embedded_post_action:y,embedded_post_action_type:l.CLICK,embedded_post_source:s,story_token:t,referer_url:u,is_sdk:v});});}catch(z){}};w(o,k.EMBEDDED_POSTS_LIKE);w(p,k.EMBEDDED_POSTS_UNLIKE);w(q,k.EMBEDDED_POSTS_COMMENT);w(r,k.EMBEDDED_POSTS_SHARE);}};f.exports=m;},null);