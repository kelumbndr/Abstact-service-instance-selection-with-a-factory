import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract.service";

/**
 * developed by kelumb
 * implementation 1
 */
 @Injectable({
  providedIn: 'root'
})
export class Impl1Service extends AbstractService {

  public whoAmI(): string{
    console.log("I am implementation 1");
    return "I am implementation 1";
  };

}