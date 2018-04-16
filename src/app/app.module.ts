import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HomeModule,
    NgbModule.forRoot(),
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule {

}
