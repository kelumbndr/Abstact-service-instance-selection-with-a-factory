import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

/**
 * developed by kelumb
 * implementation 2
 */
@Injectable({
  providedIn: 'root',
})
export class Impl2Service extends AbstractService {
  public whoAmI(): string {
    console.log('I am implementation 2');
    return 'I am implementation 2';
  }
}
