import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DirectivesComponent,
  HighlightDirective,
} from './Directives/directives/directives.component';

@NgModule({
  declarations: [AppComponent, DirectivesComponent, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
