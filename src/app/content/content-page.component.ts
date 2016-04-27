/**
 * Created by sjoerdadema on 01/04/16.
 */

import {Component} from 'angular2/core';
import {ClickableItemType} from "../core/clickable-item";
import {CustomerService} from "../customer/customer-service";
import {ContentTypeList} from "./contenttype-list.component";
import {ContentTypePanel} from "./contenttype-panel";
import {ContentTypeService} from "./contenttype-service";
import {NavigationService} from "../navigation/navigation-service";

@Component({
  selector: 'content-page',
  template: `
    <h1>Content</h1>
    <p>{{contentHref}}</p>
    <content-types [contentTypeList] = "contentTypes"></content-types>
    <contenttype-panel></contenttype-panel>
  `,
  directives: [ContentTypeList,ContentTypePanel]
})
export class ContentPage {

  contentHref: string = "";
  contentTypes: Array<ClickableItemType> = [];

  constructor(private navigationService: NavigationService, public customerService: CustomerService, public contentTypeService: ContentTypeService) {

    navigationService.getItem().subscribe(routerItem => {
      this.contentHref = routerItem.href;
      this._createContentTypeList(routerItem.href);
    });

    /*
    customerService.getContentTypesUrl().subscribe(
      (url) => {
        this._createContentTypeList(url);
      }
    )
    */

  }

  _createContentTypeList(contentTypesUrl:string): void {
    this.contentTypeService.getContentTypes(contentTypesUrl).subscribe(
      (contenttypes) => {
        this.contentTypes = [];
        let contenttypesArr = contenttypes.contenttypeList;
        for (let i=0; i<contenttypesArr.length; i++) {
          let href = contenttypesArr[i]["atom.link"]["@href"];
          let contentType:ClickableItemType = {id: href, name: contenttypesArr[i]["@id"], href: "#/content", disabled: false};
          this.contentTypes.push(contentType);
        }
      }
    );
  }

}
