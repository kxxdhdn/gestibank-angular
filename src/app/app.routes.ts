import { Routes } from '@angular/router';
import { ListBanqueComponent } from './banque/list-banque/list-banque.component';
import { AddBanqueComponent } from './banque/add-banque/add-banque.component';
import { UpdateBanqueComponent } from './banque/update-banque/update-banque.component';
import { ContactComponent } from './dashboard/contact/contact.component';

export const routes: Routes = [
  {
    path:"banques",
    component:ListBanqueComponent
  },
  {
    path:"banques/save",
    component:AddBanqueComponent
  },
  {
    path:"banques/update/:id",
    component:UpdateBanqueComponent
  },

  {
    path:"contact",
    component:ContactComponent
  }
];
