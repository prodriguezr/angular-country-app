import { Region } from '@countries/types';
import { Country } from './countries.interface';

export interface TypeCountryStore {
  search: string;
  results: Country[];
}

export interface TypeCountryStoreRegion {
  region?: Region;
  results: Country[];
}

export interface Store {
  byCapital: TypeCountryStore;
  byRegion: TypeCountryStoreRegion;
  byCountries: TypeCountryStore;
}
