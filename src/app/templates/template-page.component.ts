/**
 * Created by sjoerdadema on 01/04/16.
 */

import {Component} from 'angular2/core';
import {ClickableItemType} from "../core/clickable-item";
import {TemplateList} from './template-list';
import {TemplatePanel} from './template-panel';
import {Http} from "angular2/http";

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

  constructor(public http: Http) {
    this.leadText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod autem principium officii quaerunt, melius quam Pyrrho; Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines';
    this.templates = [
      {name: 'main', href: '#'},
      {name: 'product list', href: '#'},
      {name: 'product detail', href: '#', disabled: true},
      {name: 'shopping card', href: '#'}
    ];

  }

  /*
   <templates [templateList] = "templates"></templates>
   <template-details></template-details>

   */
}
