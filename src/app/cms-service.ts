/**
 * Created by sjoerdadema on 16/04/16.
 */

import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Rx";

@Injectable()
export class CmsService {

  constructor() {}

  getRoot() {
    // todo http.get
    return new Observable(observer => {
      observer.next({"href": "http://localhost:8080/cms/contenttypes"});
      observer.complete();
    });
  }
}
