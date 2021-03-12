import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-index-dash',
  templateUrl: './index-dash.component.html',
  styleUrls: ['./index-dash.component.scss']
})
export class IndexDashComponent {

  public menuItems: Array<PoMenuItem> = [
    { label: "home", link: "" },
    { label: "Cliente", link: "customer" }
  ]

}
