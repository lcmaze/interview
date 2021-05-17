import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SalesComponent } from './sales/sales.component';
import { ReferrerComponent } from './referrer/referrer.component';
import { ProfileComponent } from './profile/profile.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [DashboardComponent, StatisticsComponent, SalesComponent, ReferrerComponent, ProfileComponent, VideoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
