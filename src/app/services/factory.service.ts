import { Injectable, Injector } from "@angular/core";
import { AbstractService } from "./abstract.service";
import { Impl1Service } from "./impl1.service";
import { Impl2Service } from "./impl2.service";


/**
 * developed by kelumb
 * service factory
 */
@Injectable({
  providedIn: 'root'
})
export class ServiceFactory {

  constructor(private injector: Injector) {
  }
  
  getReleventService(serviceType: string): AbstractService {
      let mediatorServiceInstance: AbstractService;
      switch(serviceType){
          case 'IMPL1':
              mediatorServiceInstance = this.injector.get(Impl1Service);
              break;
          case 'IMPL2':
              mediatorServiceInstance =this.injector.get(Impl2Service);
              break;
          default:
              mediatorServiceInstance = this.injector.get(Impl1Service);
              break;
      }
      return mediatorServiceInstance;
  }
}