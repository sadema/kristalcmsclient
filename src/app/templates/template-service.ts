/**
 * Created by sjoerdadema on 24/03/16.
 */

import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {ClickableItemType} from "../core/clickable-item";
import {ItemState} from "../core/itemstate";
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {CurrentItem} from "../core/current-item";

@Injectable()
export class TemplateService implements CurrentItem<ClickableItemType> {

  itemState: ItemState<ClickableItemType>;

  constructor(public http: Http) {
    this.itemState = new ItemState(new BehaviorSubject<ClickableItemType>({id: '', name:'', href:''}));
  }

  setItem(item:ClickableItemType):void {
    this.itemState.setItem(item);
  }

  getItem():Subject<ClickableItemType>{
    return this.itemState.getItem();
  }

  getTemplate(href: string) {
    var headers = new Headers();
    headers.append('Accept', 'text/html');
    return this.http.get(href, {headers: headers})
      .map((res:Response) => res.text());
  }
}
