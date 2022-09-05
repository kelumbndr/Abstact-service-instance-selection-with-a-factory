import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AbstractService } from './services/abstract.service';
import { ServiceFactory } from './services/factory.service';
import { ConnectionBridge } from './services/connection-bridge.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'test', component: AppComponent }];

export function initializeServiceFactory(
  serviceFactory: ServiceFactory,
  bridgeService: ConnectionBridge
) {
  return serviceFactory.getReleventService(bridgeService.getServiceType());
}

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    ConnectionBridge,
    {
      provide: AbstractService,
      useFactory: initializeServiceFactory,
      deps: [ServiceFactory, ConnectionBridge],
      multi: false,
    },
  ],
})
export class AppModule {}
