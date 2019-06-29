/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timing' })
export class TimingPipe implements PipeTransform {
  transform(time: number): string {
    if (time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
    }

    return '00:00';
  }

  private initZero(time: number): string {
    return time < 10 ? '0' : '';
  }
}
