/**
 * Created by sjoerdadema on 17/04/16.
 */

import {Injectable} from "angular2/core";
import {ClickableItemType} from "../core/clickable-item";
import {CurrentItem} from "../core/current-item";
import {Subject} from "rxjs/Rx";
import {BehaviorSubject} from "rxjs/Rx";
import {ItemState} from "../core/itemstate";

@Injectable()
export class ContentTypeContentService implements CurrentItem<ClickableItemType> {

  itemState: ItemState<ClickableItemType>;

  constructor() {
    this.itemState = new ItemState<ClickableItemType>(new BehaviorSubject({}));
  }

  setItem(item:ClickableItemType):void {
    this.itemState.setItem(item);
  }

  getItem():Subject<ClickableItemType>{
    return this.itemState.getItem();
  }

}
