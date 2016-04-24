/**
 * Created by sjoerdadema on 16/04/16.
 */

import { Component } from 'angular2/core';
import {ContentTypeService} from "./contenttype-service";
import {ClickableItemType} from "../core/clickable-item";

@Component({
  selector: 'contenttype-panel',
  template: `
    <h3>Content type</h3>
    {{name}}
    <contenttype-contentlist [contentTypeContentList] = "contentList"></contenttype-contentlist>
  `
})
export class ContentTypePanel {
  name: string;
  contentList: ClickableItemType[];

  constructor(public contentTypeService: ContentTypeService) {
    contentTypeService.getItem().subscribe(contentTypeItem => {
      this.name = contentTypeItem.name;

    })
  }

  _getContentListUrl(data: Object):string {
    return "http://localhost:8080/cms/contenttypes/card";
  }

  _createContentTypeContentList(contentListUrl:string): void {
    this.contentTypeService.getContentTypeList(contentListUrl).subscribe(
      (contentTypeArr) => {
        this.contentList = [
          {id: "", name: "JavaCard", href: "#/content", disabled: false},
          {id: "", name: "WebCard", href: "#/content", disabled: false}
        ];
      }
    );
  }

}
