import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable({
   providedIn: 'root'
})
export class ConnectionBridge{

   constructor(
    private route: ActivatedRoute
   ){}

   private serviceType : 'IMPL1' | 'IMPL2' | string;

   getServiceType(): string{
      // get it from route
      this.serviceType = this.route.snapshot.queryParams["serviceImpl"];

      // get it from local storage
      if(!this.serviceType){
         this.serviceType = <string>localStorage.getItem('serviceImpl');
      }
      return this.serviceType;
   }

}