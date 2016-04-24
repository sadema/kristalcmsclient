/**
 * Created by sjoerdadema on 14/04/16.
 */

import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CustomerService {
  constructor(public http:Http) {
  }

  getCustomer(name: string) {
    var url = "http://localhost:8080/kristalcms/resources/cms/" + name;
    return this.http.get(url)
      .map(response => {
        return response.json();
      })
      .map((jsonObject) => {
        return jsonObject.customer;
      });
  }

  getCustomerTemplateList(href: string) {
    return this.http.get(href)
      .map(response => {
        return response.json();
      })
      .map(jsonObject => {
        return jsonObject.templates.templateList;
      })
  }
}
