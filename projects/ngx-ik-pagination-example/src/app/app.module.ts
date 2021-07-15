import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxIkPaginationModule } from '../../../ngx-ik-pagination/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxIkPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
