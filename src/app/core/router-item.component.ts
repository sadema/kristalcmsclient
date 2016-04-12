/**
 * Created by sjoerdadema on 02/04/16.
 */

import {Component, Input} from "angular2/core";
import {RouterItemType} from "./router-item";
import {ROUTER_DIRECTIVES} from "angular2/router";

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

  constructor() {}

  isDisabled(item: RouterItemType): boolean {
    return item.disabled || false;
  }

}
