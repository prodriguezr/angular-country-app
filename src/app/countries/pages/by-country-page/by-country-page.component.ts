import { Component } from '@angular/core';
import { Country } from '@countries/interfaces';
import { CountriesService } from '@countries/services';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private readonly _CountriesService: CountriesService) {}

  searchByCountry(searchTerm: string): void {
    this._CountriesService.searchByCountry(searchTerm).subscribe((response) => {
      this.countries = response;
    });
  }
}
