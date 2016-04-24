/**
 * Created by sjoerdadema on 14/04/16.
 */

import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Subject,BehaviorSubject,Observable} from "rxjs/Rx";

@Injectable()
export class CustomerService {

  contentTypesUrl:Subject<string> = new BehaviorSubject<string>("");
  templatesUrl:Subject<string> = new BehaviorSubject<string>("");

  constructor(public http:Http) {
  }

  getCustomer(name: string) {
    var url = "http://localhost:8080/kristalcms/resources/cms/" + name;
    // TODO: url vervangen
    url = "./app/customer/customer.json";
    return this.http.get(url)
      .map(response => {
        return response.json();
      })
      .map((jsonObject) => {
        let customer = jsonObject.customer;
        this._setContentTypesUrl(customer);
        this._setTemplatesUrl(customer);
        return customer;
      });
  }

  _setContentTypesUrl(customer) {
    let url:string = customer["atom.link"].filter(function(link) {
      return link["@rel"] === "contenttypes";
    }).map(function(typeslink) {
      return typeslink["@href"];
    });
    this.contentTypesUrl.next(url);
  }

  _setTemplatesUrl(customer) {
    let url:string = customer["atom.link"].filter(function(link) {
      return link["@rel"] === "templates";
    }).map(function(typeslink) {
      return typeslink["@href"];
    });
    this.templatesUrl.next(url);
  }

  getContentTypesUrl():Subject<string> {
    return this.contentTypesUrl;
  }

  getTemplatesUrl():Subject<string> {
    return this.templatesUrl;
  }

  /*
  getCustomerContenttypeList(href: string) {
    return this.http.get(href)
      .map(response => {
        return response.json();
      })
      .map(jsonObject => {
        return jsonObject.contenttypes.contenttypeList;
      })
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
  */

}
