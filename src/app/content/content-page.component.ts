/**
 * Created by sjoerdadema on 01/04/16.
 */

import {Component} from 'angular2/core';
import {ClickableItemType} from "../core/clickable-item";
import {CmsService} from "../cms-service";
import {ContentTypeList} from "./contenttype-list.component";
import {ContentTypePanel} from "./contenttype-panel";
import {ContentTypeService} from "./contenttype-service";

@Component({
  selector: 'content-page',
  template: `
    <h1>Content</h1>
    <content-types [contentTypeList] = "contentTypes"></content-types>
    <contenttype-panel></contenttype-panel>
  `,
  directives: [ContentTypeList,ContentTypePanel]
})
export class ContentPage {
  contentTypes: ClickableItemType[];

  constructor(public cmsService: CmsService, public contentTypeService: ContentTypeService) {
    cmsService.getRoot().subscribe(
      (data) => {
        let contentTypesUrl = this._getContentTypesUrl(data);
        if (contentTypesUrl) {
          this._createContentTypeList(contentTypesUrl);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  _getContentTypesUrl(data: Object):string {
    return "http://localhost:8080/cms/contenttypes";
  }

  _createContentTypeList(contentTypesUrl:string): void {
    this.contentTypeService.getContentTypeList(contentTypesUrl).subscribe(
      (contentTypeArr) => {
        this.contentTypes = [
          {id: "", name: "Card", href: "#/content", disabled: false},
          {id: "", name: "Carousel", href: "#/content", disabled: false}
        ];
      }
    );
  }

}
