import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { RootRoutingModule } from './root-routing.module';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule
  ],
  exports: [
    HomePageComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class RootModule { }
