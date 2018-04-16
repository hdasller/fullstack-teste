import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModalMutationComponent } from './modal-mutation/modal-mutation.component';

export const routing = RouterModule.forRoot([

  { path: 'home',
    component: HomeComponent,
    children: [

      // { path: 'modal',  component: ModalMutationComponent },

    ]



 },

], { useHash: true });

//
// export const routing = RouterModule.forRoot([
//   { path: '',  component: HomeComponent },
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   { path: 'modal', component: ModalMutationComponent }
//
// ], { useHash: true });
