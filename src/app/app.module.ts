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
import { InputTextComponent } from './shared/input-text/input-text.component';

@NgModule({
  declarations: [AppComponent, DirectivesComponent, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule, InputTextComponent],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
