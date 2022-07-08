import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RoutesConfig } from '../../configs/routes.config';
import { GroupsComponent } from './components/groups/groups.component';
import { RolesComponent } from './components/roles/roles.component';
import { RootModule } from './root.module';

const routesNames = RoutesConfig.routesNames;

const rootRoutes: Routes = [
  { 
    path: routesNames.home, component: HomePageComponent,
    children: [
      { path: 'groups', component: GroupsComponent },
      { path: 'roles', component: RolesComponent },
    ] 
  },
  { path: routesNames.error404, component: Error404PageComponent },
  { path: '', redirectTo: routesNames.home, pathMatch: 'full'},
  { path: '**', redirectTo: RoutesConfig.routes.error404 },
];

@NgModule({
  imports: [RouterModule.forChild(rootRoutes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}