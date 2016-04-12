/**
 * Created by sjoerdadema on 08/04/16.
 */

import {Injectable} from 'angular2/core';
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";
import {RouterItemType} from "../core/router-item";

@Injectable()
export class RouterItemService {
  currentRouterName: Subject<string> = new BehaviorSubject<string>("");

  constructor() {}

  setCurrentRouterName(name: string): void {
    this.currentRouterName.next(name);
  }
  getCurrentRouterName():Subject<string> {
    return this.currentRouterName;
  }
}
