import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';
import { HomeComponent } from "./home.component";
import { NavbarComponent } from './navbar/navbar.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { ModalMutationComponent } from './modal-mutation/modal-mutation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule, MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { GplService } from "../services/gpl.service";
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    routing,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    MatDialogModule,
    InfiniteScrollModule,
    MatSelectModule
  ],
  providers: [GplService, NgForm],
  entryComponents: [ModalMutationComponent],
  declarations: [HomeComponent, NavbarComponent, ListVehiclesComponent, DetailsComponent, HeaderComponent, ModalMutationComponent]
})
export class HomeModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'https://api.nimble.com.br/veiculoQL/v1/gql' }),
      cache: new InMemoryCache()
    });
  }
}
