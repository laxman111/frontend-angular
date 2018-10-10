import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../_services';
import { Subscription } from 'rxjs';

@Component({ templateUrl: 'agencyUserPortal.component.html' })
export class AgencyUserPortalComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    loginUserInfo: any;
    isDarkTheme: boolean = false;

    constructor(private authService: AuthenticationService) {
        if(localStorage.getItem('currentUser')) {
            let token = localStorage.getItem('currentUser');
            this.authService.refreshAuthToken(token);
        }
    }

    ngOnInit() {
        this.subscription = this.authService.getLoginUserInfo().subscribe(user => { 
            this.loginUserInfo = user;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}