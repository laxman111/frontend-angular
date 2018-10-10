import { Component, ViewChild, OnInit, Input } from '@angular/core';

import { MatSidenav } from '@angular/material';
import { LayoutService } from '../../_services';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'appSidebar.component.html'
})

export class AppSidebarComponent implements OnInit {
    @Input() loginUserInfo: any;
    @ViewChild('sidenav') public sidenav: MatSidenav;

    mode: string;

    public color: string;
    public Links = [{ navigationLink: '/', name: 'Home' },
        { navigationLink: '/demo', name: 'Demo Material' },
        { navigationLink: '/login', name: 'Logout' }];

    constructor(private layoutService: LayoutService) { }

    ngOnInit() {
        this.layoutService.setSidenav(this.sidenav);
        
    }
}