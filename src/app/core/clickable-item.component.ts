import {Component, Input, Output, EventEmitter} from "angular2/core";
import {ClickableItemType} from "./clickable-item";

@Component({
  selector: 'li',
  template: `
    <a
      class = '{{cssClass}}'
      href = "{{clickableItem.href}}"
      [class.disabled] = 'isDisabled(clickableItem)'
      (click) = 'selectItem(clickableItem)'>{{clickableItem.name}}</a>
    `,
})
export class ClickableItem {
  @Input()
  clickableItem: ClickableItemType;
  @Input()
  cssClass;
  @Output()
  selectItemEvent: EventEmitter<ClickableItemType>;

  constructor() {
    this.selectItemEvent = new EventEmitter();
  }

  isDisabled(item: ClickableItemType): boolean {
    return item.disabled || false;
  }

  selectItem(item: ClickableItemType) {
    this.selectItemEvent.emit(item);
  }
}
