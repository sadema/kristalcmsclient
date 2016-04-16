/**
 * Created by sjoerdadema on 01/04/16.
 */

import {Component} from 'angular2/core';
import {ClickableItemType} from "../core/clickable-item";
import {TemplateList} from './template-list';
import {TemplatePanel} from './template-panel';
import {Http} from "angular2/http";
import {CustomerService} from "../customer/customer-service";

@Component({
  selector: 'templates-page',
  template: `
    <div class="starter">
      <h1>Kristal Software templates</h1>
      <p class="lead">
        {{leadText}}
      </p>
    </div>
    <div>
      {{templatesUrl}}
    </div>
    <templates [templateList] = "templates"></templates>
    <template-details></template-details>
  `,
  styles: [`
      .starter {
        padding: 3rem 1.5rem;
        text-align: center;
      }
    `],
  directives: [TemplateList, TemplatePanel]
})
export class TemplatesPage {
  leadText:string;
  templates:ClickableItemType[];
  templatesUrl: string = "";

  constructor(public http: Http, public customerService: CustomerService) {
    this.leadText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod autem principium officii quaerunt, melius quam Pyrrho; Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines';
/*
    this.templates = [
      {name: 'main', href: '#'},
      {name: 'product list', href: '#'},
      {name: 'product detail', href: '#', disabled: true},
      {name: 'shopping card', href: '#'}
    ];
*/
    customerService.getCustomer("belastingdienst").subscribe(
      customer => {
        this.templatesUrl = this.getTemplatesUrl(customer);
        if (this.templatesUrl) {
          this.createTemplateList(this.templatesUrl);
        }
      },
      error => {
        console.error(error);
      });
  }

  getTemplatesUrl(customer: Object):string {
    return customer["atom.link"].filter(function(link) {
      return link["@rel"] === "templates";
    }).map(function(templateLink) {
      return templateLink["@href"];
    });
  }

  createTemplateList(templatesUrl:string): void {
    this.customerService.getCustomerTemplateList(templatesUrl).subscribe(
      templateArr => {
        console.info(templateArr);
        this.templates = [];
        for (let i=0; i<templateArr.length; ++i) {
          let item: ClickableItemType = {
              id: templateArr[i]["atom.link"]["@href"],
              name: templateArr[i]["@id"],
              href: "#",
              disabled: false
          };
          this.templates.push(item);
        }
      },
      error => {
        console.error(error);
      });
  }

}
