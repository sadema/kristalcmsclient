/**
 * Created by sjoerdadema on 01/04/16.
 */

import {Component} from 'angular2/core';
import {CanActivate} from 'angular2/router';

@Component({
  selector: 'pages-page',
  template: `
    <h1>Pages</h1>
  `
})
@CanActivate((next, prev) => {
  console.info("CanActivate hook..........");
  return true;
})
export class PagesPage {

  constructor() {
    console.info("PagesPage constructor");
  }

  /*
  checkIt() {
    return true;
  }
  isDisabled(next,prev): Promise<boolean> {
    console.info('@CanActivate...........');
    return new Promise(this.checkIt);
  }
  */
}
