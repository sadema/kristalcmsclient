/**
 * Created by sjoerdadema on 29/04/16.
 */

import {Component} from "angular2/core";
import {ContentTypeContentService} from "./contenttype-content-service";

@Component({
  selector: 'contenttype-contentpanel',
  template: `
    <h2>Content panel</h2>
    <p>{{href}}</p>
  `,
})
export class ContentTypeContentPanel {

  href: string = "";

  constructor(private contentTypeContentService: ContentTypeContentService) {
    contentTypeContentService.getItem().subscribe(item => {
      this.href = item.id;
    });
  }

}
