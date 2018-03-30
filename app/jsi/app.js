
var __cov_XDNa$ej0whT0jfTkJKICPw = (Function('return this'))();
if (!__cov_XDNa$ej0whT0jfTkJKICPw.__coverage__) { __cov_XDNa$ej0whT0jfTkJKICPw.__coverage__ = {}; }
__cov_XDNa$ej0whT0jfTkJKICPw = __cov_XDNa$ej0whT0jfTkJKICPw.__coverage__;
if (!(__cov_XDNa$ej0whT0jfTkJKICPw['D:\\data\\git_projects\\f1feeder-part1\\app\\js\\app.js'])) {
   __cov_XDNa$ej0whT0jfTkJKICPw['D:\\data\\git_projects\\f1feeder-part1\\app\\js\\app.js'] = {"path":"D:\\data\\git_projects\\f1feeder-part1\\app\\js\\app.js","s":{"1":0,"2":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":6,"loc":{"start":{"line":6,"column":26},"end":{"line":6,"column":51}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":11,"column":4}},"2":{"start":{"line":7,"column":2},"end":{"line":10,"column":37}}},"branchMap":{}};
}
__cov_XDNa$ej0whT0jfTkJKICPw = __cov_XDNa$ej0whT0jfTkJKICPw['D:\\data\\git_projects\\f1feeder-part1\\app\\js\\app.js'];
__cov_XDNa$ej0whT0jfTkJKICPw.s['1']++;angular.module('F1FeederApp',['F1FeederApp.services','F1FeederApp.controllers','ngRoute']).config(['$routeProvider',function($routeProvider){__cov_XDNa$ej0whT0jfTkJKICPw.f['1']++;__cov_XDNa$ej0whT0jfTkJKICPw.s['2']++;$routeProvider.when('/drivers',{templateUrl:'partials/drivers.html',controller:'driversController'}).when('/drivers/:id',{templateUrl:'partials/driver.html',controller:'driverController'}).otherwise({redirectTo:'/drivers'});}]);
