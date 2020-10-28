import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherCOneComponent } from './other-c-one/other-c-one.component';



@NgModule({
  declarations: [OtherCOneComponent],
  imports: [
    CommonModule
  ],
  exports: [OtherCOneComponent]
})
export class OtherModule { }
