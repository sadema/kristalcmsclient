/**
 * Created by sjoerdadema on 16/04/16.
 */

import {Component,Input} from 'angular2/core';
import {ClickableItem} from "../core/clickable-item.component";
import {ClickableItemType} from "../core/clickable-item";
import {ContentTypeService} from "./contenttype-service";

@Component({
  selector: 'content-types',
  template: `
    <ul class="nav">
      <li *ngFor="#item of contentTypeList"
        [clickableItem] = 'item'
        [cssClass] = 'additionalClasses'
        [class.nav-item] = 'true'
        (selectItemEvent) = 'onItemSelected($event)'>
      </li>
    </ul>
  `,
  directives: [ClickableItem]
})
export class ContentTypeList {
  @Input() contentTypeList: ClickableItemType[];
  additionalClasses: string;

  constructor(public contentTypeService: ContentTypeService) {
    this.additionalClasses = "nav-link";
  }

  onItemSelected(item: ClickableItemType) {
    this.contentTypeService.setItem(item);
  }

}
