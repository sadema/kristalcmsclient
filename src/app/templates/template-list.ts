import { Component, Input } from "angular2/core";
import { ClickableItemType } from "../core/clickable-item";
import { ClickableItem } from "../core/clickable-item.component";
import {TemplateItemService} from "./template-item-service";

@Component({
  selector: 'templates',
  template: `
    <ul class="nav">
      <li *ngFor = '#item of templateList'
        [clickableItem] = 'item'
        [cssClass] = 'additionalClasses'
        [class.nav-item] = 'true'
        (selectItemEvent) = 'onItemSelected($event)'>
      </li>
    </ul>
  `,
  directives: [ClickableItem]
})
export class TemplateList {
  @Input() templateList: ClickableItemType[];
  additionalClasses:string;

  constructor(public templateItemService: TemplateItemService) {
    this.additionalClasses = "nav-link";
  }

  onItemSelected(item: ClickableItemType) {
    this.templateItemService.setCurrentTemplateItem(item);
  }
}
