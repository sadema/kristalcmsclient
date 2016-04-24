import {Component} from 'angular2/core';
import {NavigationBar} from './navigation/navigationbar.component.ts';
import {RouterItemType} from './core/router-item';
import {ROUTER_DIRECTIVES,RouteConfig,Router,RouteDefinition} from "angular2/router";
import {TemplatesPage} from './templates/template-page.component';
import {PagesPage} from './pages/pages-page.component';
import {ContentPage} from './content/content-page.component';
import {Http} from 'angular2/http';
import {CustomerService} from "./customer/customer-service";

@Component({
  selector: 'kristalcms-app',
  template: `
    <nav  [routerList] = "menuItems">
    </nav>
    <div class="container">
      <div><p>{{customer["@id"]}}</p></div>
      <router-outlet></router-outlet>
    </div>
    `,
  directives: [NavigationBar,ROUTER_DIRECTIVES]
})
export class KristalcmsApp {
  menuItems:RouterItemType[];
  customer: Object = {id: ""};
  routeDefinitions: RouteDefinition[] = [
    { path: '/', name: 'Root', redirectTo: ['/Templates']},
    { path: '/templates', name: 'Templates', component: TemplatesPage, useAsDefault: true},
    { path: '/pages', name: 'Pages', component: PagesPage},
    { path: '/content', name: 'Content', component: ContentPage},
  ];

  constructor(public http: Http, public router: Router, public customerService:CustomerService) {
    router.config(this.routeDefinitions);
    this.menuItems = [
      {name: 'Templates', link: ['/Templates'], disabled: false},
      {name: 'Pages', link: ['/Pages'], disabled: false},
      {name: 'Content', link: ['/Content'], disabled: false}
    ];
    customerService.getCustomer("belastingdienst")
      .subscribe(customer => {
        this.customer = customer;
      })
  }

}
