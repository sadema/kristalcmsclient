/**
 * Created by sjoerdadema on 24/03/16.
 */

import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TemplateService {
  constructor(public http: Http) {}

  getTemplate(href: string) {
    var headers = new Headers();
    headers.append('Accept', 'text/html');
    return this.http.get(href, {headers: headers})
      .map((res:Response) => res.text());
  }
}
