import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards';
import { DashboardComponent } from './dashboard/dashboard.component'
import { DemoComponent } from './demoComponent/demo.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'demo', component: DemoComponent, canActivate: [AuthGuard] },

];

export const routing = RouterModule.forChild(appRoutes);