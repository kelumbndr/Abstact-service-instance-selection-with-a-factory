import { Component, VERSION } from '@angular/core';
import { AbstractService } from './services/abstract.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  serviceImpl:string;

  constructor(private abstractService: AbstractService){
    this.serviceImpl = this.abstractService.whoAmI();
  }
}
