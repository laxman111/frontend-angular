import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'
import { routing } from './agencyUserPortal.routing';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app.material.module';
import { DemoComponent } from './demoComponent/demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    routing
  ],
  exports: [
    RouterModule,
    AppMaterialModule,
  ],
  declarations: [
    DashboardComponent,
    DemoComponent,
  ]
})
export class AgencyUserPortalModule { }