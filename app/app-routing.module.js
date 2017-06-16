"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Import all the inbuilt metadata and user-defined components and modules
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var home_component_1 = require('./home.component');
var roles_component_1 = require('./roles.component');
var admin_component_1 = require('./admin.component');
var superadmin_component_1 = require('./superadmin.component');
var member_component_1 = require('./member.component');
var routes = [
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'roles', component: roles_component_1.RolesComponent },
    { path: 'roles/admin', component: admin_component_1.AdminComponent },
    { path: 'roles/superadmin', component: superadmin_component_1.SuperadminComponent },
    { path: 'roles/member', component: member_component_1.MemberComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [about_component_1.AboutComponent, home_component_1.HomeComponent, roles_component_1.RolesComponent, admin_component_1.AdminComponent, superadmin_component_1.SuperadminComponent, member_component_1.MemberComponent]; //Export the six routed components used in this application
//# sourceMappingURL=app-routing.module.js.map