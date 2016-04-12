/**
 * Created by sjoerdadema on 02/04/16.
 */

import {Component, Input, Output, EventEmitter} from "angular2/core";
import {RouterItemType} from "./router-item";
import {ROUTER_DIRECTIVES,Router,RouteDefinition} from "angular2/router";

@Component({
  selector: 'li',
  template: `
    <a [routerLink] = 'routerItem.link'
      [class.nav-link] = 'true'
      [class.disabled] = 'isDisabled(routerItem)'>{{routerItem.name}}</a>
    `,
  directives: [ROUTER_DIRECTIVES]
})
export class RouterItem {
  @Input()
  routerItem: RouterItemType;
  //@Output()
  //selectItemEvent: EventEmitter<RouterItemType>;

  constructor(public router: Router) {
    //this.selectItemEvent = new EventEmitter();
    //this.router.subscribe((onNext) => {
    //  console.info("onNext: " + onNext);
    //});
  }

  isDisabled(item: RouterItemType): boolean {
    return item.disabled || false;
  }

  selectItem(item: RouterItemType) {
    //this.selectItemEvent.emit(item);
  }

  /*
   (click) = 'selectItem(routerItem)'
   */
}
