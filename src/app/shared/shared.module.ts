import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividorComponent } from './dividor/dividor.component';

@NgModule({
  declarations: [DividorComponent],
  imports: [CommonModule],
  exports: [DividorComponent],
})
export class SharedModule {}
