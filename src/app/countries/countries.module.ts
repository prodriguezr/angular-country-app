import { NgModule } from '@angular/core';
import {
  ByCapitalPageComponent,
  ByCountryPageComponent,
  ByRegionPageComponent,
  CountryPageComponent,
} from './pages';

import { CountriesRoutingModule } from '.';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { CountriesResultsComponent } from './components/countries-results/countries-results.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountriesResultsComponent,
  ],
  imports: [CountriesRoutingModule, SharedModule, CommonModule],
})
export class CountryModule {}
