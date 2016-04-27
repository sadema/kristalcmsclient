/**
 * Created by sjoerdadema on 27/04/16.
 */

import {Injectable} from "angular2/core";
import {RouterItem} from "../core/router-item.component";
import {RouterItemType} from "../core/router-item";
import {ItemState} from "../core/itemstate";
import {CurrentItem} from "../core/current-item";
import {Subject} from "rxjs/Rx";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class NavigationService implements CurrentItem<RouterItemType> {

  itemState: ItemState<RouterItemType>;

  constructor() {
    this.itemState = new ItemState<RouterItemType>(new BehaviorSubject<RouterItemType>({href: '', name: '', link: [], disabled: false}));
  }

  setItem(item:RouterItemType):void {
    this.itemState.setItem(item);
  }

  getItem():Subject<RouterItemType>{
    return this.itemState.getItem();
  }

}
