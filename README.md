backbone-boilerplate-analytics
==============================

This is a small module for backbone.js framework used with backbone-boilerplate AMD architecture. It wraps google analytics tool to track each route your app's router creates to send google a pageview event.

#How to use it
You just need to add this module into your app, maybe in the module directory or as we do into a repo directory, and add this few lines to your main.js file.

##Bind to the router the analytics module
####Don't forget to require the module file.
Add these few lines into your router initialize method.

```javascript  
window._gaq = window._gaq || [];  
window._gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);  
window._gaq.push(['_setDomainName', 'yourdomain.com']);  
return this.bind('all', this._trackPageview);  
```  

##Add a _trackPageView method to your router
Add into your router a method that will listen to every route of your app.

```javascript  
_trackPageview: function() {  
    var url;  
    url = Backbone.history.getFragment();  
    window._gaq.push(['_trackPageview', "/" + url]);  
}  
```  
##You're good to go !
Please send me any feedback. I tested it and it seemed to work pretty well, but I'm more than open to feedback and updates. Feel free to fork and pull request any time.

