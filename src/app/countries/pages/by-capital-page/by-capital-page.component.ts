import { Component, OnInit } from '@angular/core';

import { Country } from '@countries/interfaces';
import { CountriesService } from '@countries/services';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private readonly _CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.initialValue = this._CountriesService.store.byCapital.search;
    this.countries = this._CountriesService.store.byCapital.results;
  }

  searchByCapital(searchTerm: string): void {
    this.isLoading = true;

    this._CountriesService.searchByCapital(searchTerm).subscribe((response) => {
      this.countries = response;
      this.isLoading = false;
    });
  }
}
