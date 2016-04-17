/**
 * Created by sjoerdadema on 16/04/16.
 */

import { Component } from 'angular2/core';
import {ContentTypeService} from "./contenttype-service";

@Component({
  selector: 'contenttype-panel',
  template: `
    <h3>Content types</h3>
    {{name}}
  `
})
export class ContentTypePanel {
  name: string;

  constructor(public contentTypeService: ContentTypeService) {
    contentTypeService.getCurrentContentTypeItem().subscribe(contentTypeItem => {
      this.name = contentTypeItem.name;
    })
  }

}
