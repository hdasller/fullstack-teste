import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModalMutationComponent } from './modal-mutation/modal-mutation.component';

export const routing = RouterModule.forRoot([

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },

], { useHash: true });
