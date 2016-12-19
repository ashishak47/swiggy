angular.module("bucketList",["ionic","tabSlideBox","florian.directives","load.directives","ionic.service.analytics","ngCordova","ionic.service.push","angularReverseGeocode","controllers","services","ngAnimate","ngAutocomplete"]).run(["$ionicPlatform","$rootScope","$ionicAnalytics","$window","$ionicLoading","$state",function(e,t,r,n,a,o){setTimeout(function(){angular.bootstrap(document,["Demo"])},1e3),e.ready(function(){t.baseuRL=location.origin,r.register(),window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault(),t.show=function(e){t.loading=a.show({template:e?e:"Loading..",animation:"fade-in",showBackdrop:!0,maxWidth:200,showDelay:0})},t.hide=function(){a.hide()},t.notify=function(e){t.show(e),n.setTimeout(function(){t.hide()},1999)},t.logout=function(){t.auth.$logout(),t.checkSession(),n.location.href="#/signin"}})}]).config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("signup",{url:"/signup",templateUrl:"templates/auth-signup.html",controller:"SignUpCtrl"}).state("signin",{url:"/signin",templateUrl:"templates/auth-signin.html",controller:"SignInCtrl"}).state("menu",{url:"/menu",templateUrl:"templates/menu.html"}).state("menu.restaurant",{url:"/restaurant",views:{"side-menu21":{templateUrl:"templates/restaurant.html"}}}).state("menu.restaurant.overview",{url:"/overview",views:{restaurantdetails:{templateUrl:"templates/overview.html",controller:"overviewCtrl"}}}).state("menu.restaurant.card",{url:"/card",views:{restaurantdetails:{templateUrl:"templates/card.html",controller:"cardCtrl"}}}).state("menu.restaurant.notification",{url:"/notification",views:{restaurantdetails:{templateUrl:"templates/notification.html",controller:"notificationCtrl"}}}),t.otherwise("/menu/restaurant/overview")}]).factory("mySocket",["socketFactory",function(e){var t=io.connect("http://localhost:3001",{reconnect:!0}),r=e({ioSocket:t});return r}]).filter("cuisineFilter",function(){return function(e){var t=(e.length,"");for(var r in e)t+=e;return t}}).directive("helloWorld",function(){return{restrict:"AE",replace:!0,template:'<p style="background-color:{{color}}">Hello World',link:function(e,t,r){t.bind("click",function(){t.css("background-color","white"),e.color="white"}),t.bind("mouseover",function(){t.css("cursor","pointer")})}}}),angular.module("florian.directives",[]).directive("ionSearchBar",["$timeout",function(e){return{restrict:"E",replace:!0,scope:{search:"=?filter"},link:function(e,t,r){e.placeholder=r.placeholder||"",e.search={value:"",focus:!1},r.class&&t.addClass(r.class);var n=t.find("input")[0];e.cancelSearch=function(){n.blur(),e.search.value=""},angular.element(n).bind("focus",function(){e.search.focus=1,t.addClass("search-bar-focused"),angular.element(document.querySelector(".has-search-bar")).addClass("search-bar-focused"),e.$digest()}),angular.element(n).bind("blur",function(){e.search.focus=0,t.removeClass("search-bar-focused"),angular.element(document.querySelector(".has-search-bar")).removeClass("search-bar-focused")})},template:'<div class="search-bar bar bar-header item-input-inset"><label class="item-input-wrapper"><i class="icon ion-ios-search placeholder-icon"></i><input type="search" placeholder="" ng-model="search.value"></label><button class="button button-clear button-positive" ng-show="search.focus" ng-click="cancelSearch()">Cancel</button></div>'}}]),angular.module("load.directives",[]).directive("mAppLoading",["$animate",function(e){function t(t,r,n){e.leave(r.children().eq(1)).then(function(){r.remove(),t=r=n=null})}return{link:t,restrict:"C"}}]);