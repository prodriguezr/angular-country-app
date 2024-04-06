import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { CountriesResponse, Country } from '@countries/interfaces';

type UrlTypeSearch = 'capital' | 'name' | 'region' | 'alpha';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private readonly _BaseApiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private readonly _HttpClient: HttpClient) {}

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

  searchByCapital(searchTerm: string): Observable<Country[]> {
    return this.searchBy(searchTerm, 'capital');
  }

  searchByCountry(searchTerm: string): Observable<Country[]> {
    return this.searchBy(searchTerm, 'name');
  }

  searchByRegion(searchTerm: string): Observable<Country[]> {
    return this.searchBy(searchTerm, 'region');
  }

  searchByAlphaCode(code: string): Observable<Country | null> {
    return this.searchBy(code, 'alpha').pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null))
    );
  }
}
