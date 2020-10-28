import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { FormsModule } from '@angular/forms';
import { OtherModule } from './other/other.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OtherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
