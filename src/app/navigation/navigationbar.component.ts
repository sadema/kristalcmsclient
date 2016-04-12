import {Component,Input} from 'angular2/core';
import {RouterItemType} from '../core/router-item';
import {RouterItem} from "../core/router-item.component";
import {Router,RouteDefinition} from 'angular2/router';

@Component({
  selector: 'nav',
  host: {'class': 'navbar navbar-light bg-faded'},
  template: `
            <a class="navbar-brand" href="#">{{title}}</a>
            <ul class="nav navbar-nav">
                <li
                    *ngFor = '#item of routerList'
                    [routerItem] = 'item'
                    [class.nav-item] = 'true'
                    [class.active] = 'isActiveItem(item)'
                    >
                </li>
            </ul>
    `,
  directives: [RouterItem],
})
export class NavigationBar {
  title:string;
  activeItem:RouterItemType;
  activeName: string;
  @Input()
  routerList:RouterItemType[];

  constructor(public router: Router) {
    this.title = 'Kristal Software';
    this.activeItem = null;
    this.router.subscribe((onNext) => {
      console.info("onNext: " + onNext);
      this.activeName = onNext;

      //console.info(this.router.isRouteActive(this.router.currentInstruction));
      //console.info(this.router.lastNavigationAttempt);
      //console.info(this.router.isRouteActive(this.router.generate(['Templates'])));
    })
  }

  isActiveItem(item:RouterItemType):boolean {
    return this.activeName === item.name.toLowerCase();
  }
}
