import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routerComponent,} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';


@NgModule({
  declarations: [
    AppComponent,
    routerComponent,
    DirectiveComponent,
    TemplatedrivenComponent 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
