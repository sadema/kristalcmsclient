/**
 * Created by sjoerdadema on 24/03/16.
 */

import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import {ClickableItemType} from "../core/clickable-item";
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class TemplateService {
  currentTemplateItem: Subject<ClickableItemType> = new BehaviorSubject<ClickableItemType>({id: '', name:'', href:''});

  constructor(public http: Http) {}

  setCurrentTemplateItem(item: ClickableItemType): void {
    console.log(item.name);
    this.currentTemplateItem.next(item);
  }

  getCurrentTemplateItem(): Subject<ClickableItemType> {
    return this.currentTemplateItem;
  }
  getTemplate(href: string) {
    var headers = new Headers();
    headers.append('Accept', 'text/html');
    return this.http.get(href, {headers: headers})
      .map((res:Response) => res.text());
  }
}
