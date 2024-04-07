import { Component, OnInit } from '@angular/core';
import { Country } from '@countries/interfaces';
import { CountriesService } from '@countries/services';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(private readonly _CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.initialValue = this._CountriesService.store.byCountries.search;
    this.countries = this._CountriesService.store.byCountries.results;
  }

  searchByCountry(searchTerm: string): void {
    this.isLoading = true;

    this._CountriesService.searchByCountry(searchTerm).subscribe((response) => {
      this.countries = response;
      this.isLoading = false;
    });
  }
}
