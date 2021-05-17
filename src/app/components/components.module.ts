import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    TopbarComponent
  ]
})
export class ComponentsModule { }
