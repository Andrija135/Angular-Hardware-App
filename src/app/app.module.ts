import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwaresComponent } from './components/hardwares/hardwares.component';
import { HardwareDetailComponent } from './components/hardware-detail/hardware-detail.component';

@NgModule({
  declarations: [AppComponent, HardwaresComponent, HardwareDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
