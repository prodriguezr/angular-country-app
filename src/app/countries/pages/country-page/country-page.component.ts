import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country, Translate, Translation } from '@countries/interfaces';
import { CountriesService } from '@countries/services';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public isLoading: boolean = false;

  translates: Translate[] = [
    { code: 'ara', name: 'Arabic' },
    { code: 'bre', name: 'Breton' },
    { code: 'ces', name: 'Czech' },
    { code: 'cym', name: 'Welsh' },
    { code: 'deu', name: 'German' },
    { code: 'est', name: 'Estonian' },
    { code: 'fin', name: 'Finnish' },
    { code: 'fra', name: 'French' },
    { code: 'hrv', name: 'Croatian' },
    { code: 'hun', name: 'Hungarian' },
    { code: 'ita', name: 'Italian' },
    { code: 'jpn', name: 'Japanese' },
    { code: 'kor', name: 'Korean' },
    { code: 'nld', name: 'Dutch' },
    { code: 'per', name: 'Persian' },
    { code: 'pol', name: 'Polish' },
    { code: 'por', name: 'Portuguese' },
    { code: 'rus', name: 'Russian' },
    { code: 'slk', name: 'Slovak' },
    { code: 'spa', name: 'Spanish' },
    { code: 'srp', name: 'Serbian' },
    { code: 'swe', name: 'Swedish' },
    { code: 'tur', name: 'Turkish' },
    { code: 'urd', name: 'Urdu' },
    { code: 'zho', name: 'Chinese' },
  ];

  public country?: Country;

  constructor(
    private readonly _ActivatedRoute: ActivatedRoute,
    private readonly _CountriesService: CountriesService,
    private readonly _Router: Router
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.params
      .pipe(
        switchMap(({ countryId }) =>
          this._CountriesService.searchByAlphaCode(countryId)
        )
      )
      .subscribe((country) => {
        if (!country) return this._Router.navigateByUrl('');

        return (this.country = country);
      });
  }

  getTranslationValueByCode(code: string): string {
    if (!this.country) return '';

    return this.country.translations[code].common;
  }

  get getAllTranslationsKeys(): string[] {
    return Object.keys(this.country?.translations || []);
  }

  get getAllTranslatesKeys(): string[] {
    return Object.keys(this.translates || []);
  }

  searchCountryByAlphaCode(alphaCode: string) {
    this._CountriesService
      .searchByAlphaCode(alphaCode)
      .subscribe((countries) => {
        console.log(countries);
      });
  }
}
