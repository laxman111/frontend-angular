import { Component, OnInit, Input } from '@angular/core';

import { LayoutService } from '../../_services';
 
@Component({
    selector: 'app-header',
    templateUrl: 'appHeader.component.html'
})

export class AppHeaderComponent implements OnInit {
    @Input() loginUserInfo: any;

    constructor(private layoutService: LayoutService) { }

    ngOnInit() {
    }

    toggleSidenav() {
        this.layoutService.toggle();
    }
}