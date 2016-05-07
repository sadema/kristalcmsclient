/**
 * Created by sjoerdadema on 16/04/16.
 */

import { Component } from 'angular2/core';
import {ContentTypeService} from "./contenttype-service";
import {ClickableItemType} from "../core/clickable-item";
import {ContentTypeContentList} from "./contenttype-contentlist.component";
import {ContentTypeContentPanel} from "./contenttype-content-panel.component";

@Component({
  selector: 'contenttype-panel',
  template: `
    <h3>Content type</h3>
    {{name}}
    {{href}}
    <contenttype-contentlist [contentTypeContentList] = "contentList"></contenttype-contentlist>
    <contenttype-contentpanel></contenttype-contentpanel>
  `,
  directives: [ContentTypeContentList,ContentTypeContentPanel]
})
export class ContentTypePanel {
  name: string;
  href: string;
  contentList: ClickableItemType[];

  constructor(public contentTypeService: ContentTypeService) {
    contentTypeService.getItem().subscribe(contentTypeItem => {
      this.name = contentTypeItem.name;
      this._createContentTypeContentList(contentTypeItem.id);
    })
  }

  _createContentTypeContentList(contentListUrl:string): void {
    this.href = contentListUrl;
    this.contentTypeService.getContentType(contentListUrl).subscribe(
      (type) => {
        this.contentList = [];
        let contentArr = type.contentList;
        for (let i=0; i<contentArr.length; ++i) {
          let name = contentArr[i]["@id"];
          let href = contentArr[i]["atom.link"]["@href"];
          let content = {id: href, name: name, href: "#/content", disabled: false};
          this.contentList.push(content);
        }
      }
    );
  }

}
