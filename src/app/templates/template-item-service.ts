/**
 * Created by sjoerdadema on 25/03/16.
 */

import { Injectable } from 'angular2/core';
import {ClickableItemType} from "../core/clickable-item";
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";

@Injectable()
export class TemplateItemService {
  currentTemplateItem: Subject<ClickableItemType> = new BehaviorSubject<ClickableItemType>({name:'', href:''});

  /*
  obs = Observable.interval(500).take(5)
  .do(i => console.log("value is: " + i));
  */

  constructor() {
  //  this.obs.subscribe(value => console.log("observer receives: " + value));
    this.currentTemplateItem.subscribe(item => console.log("observer receives: " + item.name));
  }

  setCurrentTemplateItem(item: ClickableItemType): void {
    console.log(item.name);
    this.currentTemplateItem.next(item);
  }

  getCurrentTemplateItem(): Subject<ClickableItemType> {
    return this.currentTemplateItem;
  }
}
