/**
 * Created by sjoerdadema on 01/04/16.
 */

import {Component} from 'angular2/core';
import {CanActivate} from 'angular2/router';
import {NavigationService} from "../navigation/navigation-service";

@Component({
  selector: 'pages-page',
  template: `
    <h1>Pages</h1>
    <p>{{pagesHref}}</p>
  `
})
@CanActivate((next, prev) => {
  console.info("CanActivate hook..........");
  return true;
})
export class PagesPage {

  pagesHref: string = "";

  constructor(private navigationService: NavigationService) {
    console.info("PagesPage constructor");
    navigationService.getItem().subscribe(item => {
      this.pagesHref = item.href;
    });
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
