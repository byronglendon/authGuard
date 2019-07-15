import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { dashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    AdminComponent]
})
export class DashboardModule { }
