import {Component} from 'angular2/core';
import {NavigationBar} from './navigation/navigationbar.component.ts';
import {RouterItemType} from './core/router-item';
import {ROUTER_DIRECTIVES,RouteConfig,Router,RouteDefinition} from "angular2/router";
import {TemplatesPage} from './templates/template-page.component';
import {PagesPage} from './pages/pages-page.component';
import {ContentPage} from './content/content-page.component';
import {Http} from 'angular2/http';

@Component({
  selector: 'kristalcms-app',
  template: `
    <nav [routerList] = "menuItems">
    </nav>
    <div class="container">
      <div>
        {{data | json}}
      </div>
      <router-outlet></router-outlet>
    </div>
    `,
  directives: [NavigationBar,ROUTER_DIRECTIVES]
})
/*
@RouteConfig([]
  [
  { path: '/', name: 'root', redirectTo: ['/Templates']},
  { path: '/templates', name: 'Templates', component: TemplatesPage, useAsDefault: true},
  { path: '/pages', name: 'Pages', component: PagesPage},
  { path: '/content', name: 'Content', component: ContentPage},
]
)
 */
export class KristalcmsApp {
  menuItems:RouterItemType[];
  data: Object = {};
  routeDefinitions: RouteDefinition[] = [
    { path: '/', name: 'Root', redirectTo: ['/Templates']},
    { path: '/templates', name: 'Templates', component: TemplatesPage, useAsDefault: true},
    { path: '/pages', name: 'Pages', component: PagesPage},
    { path: '/content', name: 'Content', component: ContentPage},
  ];

  constructor(public http: Http, public router: Router) {
    router.config(this.routeDefinitions);
    this.menuItems = [
      {name: 'Templates', link: ['/Templates'], disabled: false},
      {name: 'Pages', link: ['/Pages'], disabled: true},
      {name: 'Content', link: ['/Content'], disabled: false}
    ];
  }

  ngOnInit() {
    console.log("ngOnInit......");
    var url = "http://localhost:8080/kristalcms/resources/cms/belastingdienst";
    this.http.get(url)
      .map(response => response.json())
      .subscribe(
        data => this.data = data.customer,
        error => console.log(error)
      );
  }

}
