import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankNavbarComponent } from './Components/Shared/blank-navbar/blank-navbar.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { BlankLayoutComponent } from './Components/Pages/blank-layout/blank-layout.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlankNavbarComponent,
    FooterComponent,BlankLayoutComponent
  ],
  exports:[BlankNavbarComponent,FooterComponent,BlankLayoutComponent]
})
export class CoreModule { }
