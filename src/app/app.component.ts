import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      :host ::ng-deep button {
          margin-right: .25em;
      }
  `]
})
export class AppComponent { 
    visibleSidebar1;
    items: MenuItem[];

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.items = [
        {
        label: 'Home',
        icon:'pi pi-fw pi-home',
        },
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-chart-bar',
        },
        {
          label: 'Standard User Tools',
          icon: 'pi pi-fw pi-briefcase',
          items: [
            {
              label: 'Employee Details',
            },
            {
              label: 'Field Eployee Details',
            },
            {
              label: 'Customer Details',
            },
            {
              label: 'Invoice Details',
            },
            {
              label: 'Canadian PCard',
            },
            {
              label: 'OEM Information',
            },
            {
              label: 'Missing RO',
            }
          ]
        },
        {
          label: 'Management Tools',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Review Loop',
            },
            {
              label: 'Memo Management',
            },
            {
              label: 'Project Management',
            },
            {
              label: 'Field Employee Admin',
            }
          ]
        },{
          label: 'Admin Tools',
          icon: 'pi pi-fw pi-key',
          items: [
            {
              label: 'ORM Criteria',
            },
            {
              label: 'User Management',
            },
            {
              label: 'Role Management',
            }
          ]
        }
      ]
    };
}