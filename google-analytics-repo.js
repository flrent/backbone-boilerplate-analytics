define([
    'jquery', 
    "namespace"], 

    function ($, App) {
        var instance = null;

        var GoogleAnalyticsWrapper = (function () {
            function GoogleAnalytics() {
                this.init();
            }
            //Static Variable
            GoogleAnalytics.getInstance = function () {
                if (!instance) {
                    instance = new GoogleAnalytics();
                }
                return instance;
            };
            GoogleAnalytics.prototype.init = function() {                
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            };
            return GoogleAnalytics;
        })();
        App.GA = GoogleAnalyticsWrapper.getInstance();

        return App.GA;
});