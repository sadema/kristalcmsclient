import { Component, Input } from "angular2/core";
import { ClickableItemType } from "../core/clickable-item";
import { ClickableItem } from "../core/clickable-item.component";
import {TemplateService} from "./template-service";

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

  constructor(public templateService: TemplateService) {
    this.additionalClasses = "nav-link";
  }

  onItemSelected(item: ClickableItemType) {
    this.templateService.setCurrentTemplateItem(item);
  }
}
