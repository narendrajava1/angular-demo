import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Country } from '../../country.model';
import { CountryService } from '../../service/country.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: Country;

  constructor(private countryService: CountryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .pipe(switchMap((params: Params) => this.countryService.getCountry(+params['country-id'])))
        .subscribe(country => this.country = country);
  }

}
