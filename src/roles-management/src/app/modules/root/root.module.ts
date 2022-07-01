import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RootRoutingModule } from './root-routing.module';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RolesComponent } from './components/roles/roles.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GroupsComponent } from './components/groups/groups.component'

@NgModule({
  declarations: [
    HomePageComponent,
    Error404PageComponent,
    RolesComponent,
    GroupsComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class RootModule { }
