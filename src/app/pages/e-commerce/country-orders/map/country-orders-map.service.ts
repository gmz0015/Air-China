/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CountryOrdersMapService {

  constructor(private http: HttpClient) {}

  getCords(): Observable<any> {
    return this.http.get('./assets/leaflet-countries/countries.geo.json');
  }

}
