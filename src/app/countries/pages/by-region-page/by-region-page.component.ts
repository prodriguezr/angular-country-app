import { Component } from '@angular/core';
import { Country } from '@countries/interfaces';
import { CountriesService } from '@countries/services';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private readonly _CountriesService: CountriesService) {}

  searchByRegion(searchTerm: string): void {
    this._CountriesService.searchByRegion(searchTerm).subscribe((response) => {
      this.countries = response;
    });
  }
}
