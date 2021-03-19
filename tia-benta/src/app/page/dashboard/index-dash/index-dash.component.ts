import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-index-dash',
  templateUrl: './index-dash.component.html',
  styleUrls: ['./index-dash.component.scss']
})
export class IndexDashComponent {

  public menuItems: Array<PoMenuItem> = [
    { label: "home", link: "", icon: "po-icon po-icon-filter", shortLabel: "Home" },
    { label: "Cliente", link: "customer", icon: "po-icon po-icon-finance", shortLabel: "Cliente" },
    {
      label: "Teste", link: "customer", icon: "po-icon po-icon-finance", shortLabel: "Teste", subItems: [
        {
          label: "Sub Teste", link: '', subItems: [
            { label: "Temp ", link: '' },
            {
              label: "Sub Sub Item", subItems: [
                { label: "Sub Sub do Sub Item" }
              ]
            }
          ]
        }
      ]
    },
  ]

}
