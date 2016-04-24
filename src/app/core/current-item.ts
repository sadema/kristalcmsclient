/**
 * Created by sjoerdadema on 24/04/16.
 */

import {Subject} from "rxjs/Rx";

export interface CurrentItem<T> {

  setItem(item:T):void;
  getItem():Subject<T>;

}
