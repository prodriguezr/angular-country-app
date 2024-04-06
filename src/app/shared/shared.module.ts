import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  HomePageComponent,
  AboutPageComponent,
  ContactPageComponent,
} from './pages';
import { SearchBoxComponent, SidebarComponent } from './components';
import { CustomNumberPipe } from './pipes/custom-number.pipe';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    CustomNumberPipe,
  ],
  imports: [RouterModule],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    CustomNumberPipe,
  ],
})
export class SharedModule {}
