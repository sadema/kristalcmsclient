/**
 * Created by sjoerdadema on 25/03/16.
 */

import { Component } from 'angular2/core';
import {TemplateItemService} from "./template-item-service";
import {TemplateService} from './template-service';

@Component({
  selector: 'template-details',
  template: `
    <h2>Template details</h2>
    <div style="margin-bottom: 30px;">
      <p>{{name}}</p>
      <p>{{data}}</p>
      <p>{{content}}</p>
    </div>

  `
})
export class TemplatePanel {
  name: string;
  content: string;
  data;

  constructor(public templateItemService: TemplateItemService, public templateService: TemplateService) {
    this.templateItemService.getCurrentTemplateItem().subscribe((templateItem) => {
      console.log('new item is: ', templateItem.name);
      this.name = templateItem.name;
      if (this.name !== "") {
        templateService.getTemplate(this.name).subscribe(
          data => {
            this.data = data;
          },
          err => console.error(err)
        );
      }
    })
  }

  //templateService.getTemplate().subscribe((template) => {
  //  this.content = atob(template.content);
  //});

}
