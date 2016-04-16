/**
 * Created by sjoerdadema on 16/04/16.
 */

import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {ClickableItemType} from "../core/clickable-item";
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";

@Injectable()
export class ContentTypeService {
  currentContentTypeItem: Subject<ClickableItemType> = new BehaviorSubject<ClickableItemType>({id: '', name:'', href:''});

  constructor(public http:Http) {

  }

  getContentTypeList(href: string) {
    // TODO: http.get implementeren
    return new Observable(observer => {
      observer.next("bla");
    });
  }

  setCurrentContentTypeItem(item: ClickableItemType): void {
    this.currentContentTypeItem.next(item);
  }

  getCurrentContentTypeItem(): Subject<ClickableItemType> {
    return this.currentContentTypeItem;
  }

}
