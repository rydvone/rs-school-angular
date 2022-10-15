import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SettingsComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, FooterComponent, SettingsComponent],
})
export class CoreModule {}
