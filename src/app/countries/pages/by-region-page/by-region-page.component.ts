import { Component, OnInit } from '@angular/core';
import { Country } from '@countries/interfaces';
import { CountriesService } from '@countries/services';
import { Region } from '@countries/types';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Europe',
    'Asia',
    'Oceania',
  ];
  public selectedRegion?: Region;
  public countries: Country[] = [];

  constructor(private readonly _CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.selectedRegion = this._CountriesService.store.byRegion.region;
    this.countries = this._CountriesService.store.byRegion.results;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;

    this._CountriesService.searchByRegion(region).subscribe((response) => {
      this.countries = response;
    });
  }
}
