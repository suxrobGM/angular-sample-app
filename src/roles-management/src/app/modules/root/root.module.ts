import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RootRoutingModule } from './root-routing.module';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RolesComponent } from './components/roles/roles.component';
import { GroupsComponent } from './components/groups/groups.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class RootModule { }
