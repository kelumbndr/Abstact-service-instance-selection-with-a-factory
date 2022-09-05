import { Injectable } from '@angular/core';

/**
 * developed by kelumb
 * mention all the methods required here
 * implement them accordingly
 */
@Injectable({
  providedIn: 'root',
})
export abstract class AbstractService {
  public abstract whoAmI(): string;
}
