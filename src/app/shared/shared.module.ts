import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  HomePageComponent,
  AboutPageComponent,
  ContactPageComponent,
} from './pages';
import {
  LoaderSpinnerComponent,
  SearchBoxComponent,
  SidebarComponent,
} from './components';
import { CustomNumberPipe } from './pipes/custom-number.pipe';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    CustomNumberPipe,
    LoaderSpinnerComponent,
  ],
  imports: [RouterModule],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    CustomNumberPipe,
    LoaderSpinnerComponent,
  ],
})
export class SharedModule {}
