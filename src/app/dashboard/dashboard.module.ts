import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { dashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [
    AuthGuard,
    RoleGuard
  ],
  declarations: [HomeComponent, AdminComponent, LayoutComponent]
})
export class DashboardModule { }
