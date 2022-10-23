import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent, NotFoundComponent],
})
export class CoreModule {}
