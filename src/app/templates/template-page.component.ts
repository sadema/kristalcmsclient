/**
 * Created by sjoerdadema on 01/04/16.
 */

import {Component} from 'angular2/core';
import {ClickableItemType} from "../core/clickable-item";
import {TemplateList} from './template-list';
import {TemplatePanel} from './template-panel';
import {CustomerService} from "../customer/customer-service";
import {TemplateService} from "./template-service";

@Component({
  selector: 'templates-page',
  template: `
    <div class="starter">
      <h1>Kristal Software templates</h1>
      <p class="lead">
        {{leadText}}
      </p>
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
  templates:Array<ClickableItemType> = [];

  constructor(public customerService: CustomerService, public templateService: TemplateService) {
    this.leadText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod autem principium officii quaerunt, melius quam Pyrrho; Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines';

    customerService.getTemplatesUrl().subscribe(
      url => {
        console.info(url);
        this._createTemplateList(url);
      }
    )

  }

  _createTemplateList(templatesUrl:string): void {
    console.info(templatesUrl);
    this.templateService.getTemplates(templatesUrl).subscribe(
      templates => {
        this.templates = [];
        let templateArr = templates.templateList;
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
      }
    );
  }

}
