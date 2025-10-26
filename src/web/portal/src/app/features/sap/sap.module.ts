import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SapComponent } from './sap.component';

@NgModule({
  declarations: [SapComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SapComponent],
})
export class SapModule {}