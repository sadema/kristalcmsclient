/**
 * Created by sjoerdadema on 16/04/16.
 */

import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {CurrentItem} from "../core/current-item";
import {ItemState} from "../core/itemstate";
import {ClickableItemType} from "../core/clickable-item";
import {BehaviorSubject,Subject,Observable} from "rxjs/Rx";

@Injectable()
export class ContentTypeService implements CurrentItem<ClickableItemType> {

  itemState:ItemState<ClickableItemType>;

  constructor(public http:Http) {
    this.itemState = new ItemState<ClickableItemType>(new BehaviorSubject<ClickableItemType>({id: '', name:'', href:''}));
  }

  setItem(item:ClickableItemType):void {
    this.itemState.setItem(item);
  }

  getItem():Subject<ClickableItemType> {
    return this.itemState.getItem();
  }

  getContentTypeList(href: string) {
    // TODO: http.get implementeren
    return new Observable(observer => {
      observer.next("bla");
    });
  }

}
