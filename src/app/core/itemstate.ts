/**
 * Created by sjoerdadema on 24/04/16.
 */

import {CurrentItem} from "./current-item";
import {Subject} from "rxjs/Rx";

export class ItemState<T> implements CurrentItem<T> {

  constructor(private currentItem:Subject<T>) {
  }

  setItem(item:T):void {
    this.currentItem.next(item);
  }

  getItem():Subject<T>{
    return this.currentItem;
  }

}
