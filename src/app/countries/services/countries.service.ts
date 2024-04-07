import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { CountriesResponse, Country, Store } from '@countries/interfaces';
import { Region } from '@countries/types';

type UrlTypeSearch = 'capital' | 'name' | 'region' | 'alpha';
@Injectable({ providedIn: 'root' })
export class CountriesService {
  private readonly _BaseApiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private readonly _HttpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  public store: Store = {
    byCapital: { search: '', results: [] },
    byRegion: { results: [] },
    byCountries: { search: '', results: [] },
  };

  private searchBy(
    searchTerm: string,
    urlTypeSearch: UrlTypeSearch
  ): Observable<Country[]> {
    return this._HttpClient
      .get<CountriesResponse[]>(
        `${this._BaseApiUrl}/${urlTypeSearch}/${searchTerm}`
      )
      .pipe(catchError(() => of([])));
  }

  searchByCapital(search: string): Observable<Country[]> {
    return this.searchBy(search, 'capital').pipe(
      tap((results) => {
        this.store.byCapital = { search, results };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByCountry(search: string): Observable<Country[]> {
    return this.searchBy(search, 'name').pipe(
      tap((results) => {
        this.store.byCountries = { search, results };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByRegion(region: Region): Observable<Country[]> {
    return this.searchBy(region, 'region').pipe(
      tap((results) => {
        this.store.byRegion = { region, results };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByAlphaCode(code: string): Observable<Country | null> {
    return this.searchBy(code, 'alpha').pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null))
    );
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('countriesStore', JSON.stringify(this.store));
  }

  private loadFromLocalStorage(): void {
    if (!localStorage.getItem('countriesStore')) return;

    this.store = JSON.parse(
      localStorage.getItem('countriesStore') || ''
    ) as Store;
  }
}
