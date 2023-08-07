import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent,
    MessageComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    AboutComponent,
    MessageComponent,
    ServicesComponent,
    ContactComponent
  ]
})
export class ComponentsModule { }
