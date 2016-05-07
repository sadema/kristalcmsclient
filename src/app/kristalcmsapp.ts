import {Component} from 'angular2/core';
import {NavigationBar} from './navigation/navigationbar.component.ts';
import {RouterItemType} from './core/router-item';
import {ROUTER_DIRECTIVES,RouteConfig,Router,RouteDefinition} from "angular2/router";
import {TemplatesPage} from './templates/template-page.component';
import {PagesPage} from './pages/pages-page.component';
import {ContentPage} from './content/content-page.component';
import {Http} from 'angular2/http';
import {CustomerService} from "./customer/customer-service";
import {Subject} from "rxjs/Rx";
import {BehaviorSubject} from "rxjs/Rx";

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
    customerService.getCustomer("belastingdienst")
      .subscribe(customer => {
        this.customer = customer;
        router.config(this.routeDefinitions);
        let href = "http://localhost:8080/kristalcms/resources/cms/belastingdienst/contenttypes";
        console.info(this._getUrl("templates"));
        this.menuItems = [
          {href: this._getUrl("templates"), name: 'Templates', link: ['/Templates'], disabled: false},
          {href: this._getUrl("pages"), name: 'Pages', link: ['/Pages'], disabled: false},
          {href: href, name: 'Content', link: ['/Content'], disabled: false}
        ];
        console.info(this.menuItems);
      })
  }

  _getUrl(rel: string): string {
    return this.customer["atom.link"].filter(function(link) {
      return link["@rel"] === rel;
    }).map(link => {
      return link["@href"];
    });
  }

}
