/**
 * Created by sjoerdadema on 17/04/16.
 */

import {Component,Input} from "angular2/core";
import {ClickableItem} from "../core/clickable-item.component";
import {ClickableItemType} from "../core/clickable-item";

@Component({
  selector: 'contenttype-contentlist',
  template: `
    <ul class="nav">
      <li *ngFor="#item of contentTypeContentList"
        [clickableItem] = 'item'
        [cssClass] = 'additionalClasses'
        [class.nav-item] = 'true'
        (selectItemEvent) = 'onItemSelected($event)'>
      </li>
    </ul>
  `,
  directives: [ClickableItem]
})
export class ContentTypeContentList {
  @Input() contentTypeContentList: ClickableItemType[];

  constructor() {

  }

}
