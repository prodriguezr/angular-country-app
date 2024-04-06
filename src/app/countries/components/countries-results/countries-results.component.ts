import { Component, Input } from '@angular/core';
import { Country } from '@countries/interfaces';

@Component({
  selector: 'countries-results',
  templateUrl: './countries-results.component.html',
  styles: `
    img {
      width: 25px;
    }
  `,
})
export class CountriesResultsComponent {
  @Input()
  public countries: Country[] = [];
}
