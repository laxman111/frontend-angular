﻿import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../_services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
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