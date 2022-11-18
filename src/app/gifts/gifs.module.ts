import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FindComponent } from './find/find.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResultadoComponent } from './resultado/resultado.component';
import { GifService } from './service/gif.service';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    FooterComponent,
    FindComponent,
    ResultadoComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [SidebarComponent, MainComponent],
  providers: [GifService],
})
export class GifsModule {}
