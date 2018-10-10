import 'hammerjs';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AppHeaderComponent } from './_directives/app-header/appHeader.component';
import { AppSidebarComponent } from './_directives/app-sidebar/appSidebar.component';
import { LayoutService } from './_services';
import { AgencyUserPortalComponent } from './agencyUserPortal/agencyUserPortal.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppMaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        routing,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        AppHeaderComponent,
        AppSidebarComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AgencyUserPortalComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        LayoutService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }