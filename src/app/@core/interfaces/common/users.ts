/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Observable } from 'rxjs';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  userName: string;
  picture: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  zipCode: string;
}

export abstract class UserData {
  abstract getCurrentUser(): Observable<User>;
  abstract get(id: number): Observable<User>;
  abstract update(user: User): Observable<User>;
  abstract updateCurrent(user: User): Observable<User>;
  abstract create(user: User): Observable<User>;
  abstract delete(id: number): Observable<boolean>;
}
