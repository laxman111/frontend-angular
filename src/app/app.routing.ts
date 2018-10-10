import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { AgencyUserPortalComponent } from './agencyUserPortal/agencyUserPortal.component'

const appRoutes: Routes = [
   { path: '',
    component: AgencyUserPortalComponent,
    canActivate: [AuthGuard],
    children: [
            {
                path: '',
                loadChildren: './agencyUserPortal/agencyUserPortal.module#AgencyUserPortalModule',
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);