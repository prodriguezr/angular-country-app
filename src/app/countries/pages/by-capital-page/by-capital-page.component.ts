import { Component } from '@angular/core';

import { Country } from '@countries/interfaces';
import { CountriesService } from '@countries/services';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private readonly _CountriesService: CountriesService) {}

  searchByCapital(searchTerm: string): void {
    this._CountriesService.searchByCapital(searchTerm).subscribe((response) => {
      this.countries = response;
    });
  }
}
