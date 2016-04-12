/**
 * Created by sjoerdadema on 24/03/16.
 */

import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TemplateService {
  constructor(public http: Http) {}

  getTemplate(name: string) {
    var headers = new Headers();
    headers.append('Accept', 'text/html');
    //var url = "./app/templates/template.json";
    var url = "http://localhost:8080/kristalcms/resources/cms/belastingdienst/templates/" + name;
    //var url = "http://jsonplaceholder.typicode.com/posts/1";
    return this.http.get(url, {headers: headers})
      .map((res:Response) => res.text());
    /*
    return this.http.get(url)
      .map((res:Response) => res.json())
      .map((json:any) => json.template);
      */
  }
}
