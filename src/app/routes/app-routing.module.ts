import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../layout/header/top-nav/left-top-nav/about/about.component";
import { LoggedComponent } from "../layout/header/top-nav/right-top-nav/logged/logged.component";
import { UnloggedComponent } from "../layout/header/top-nav/right-top-nav/unlogged/unlogged.component";
import { ContactsComponent } from "../pages/contacts/contacts.component";
import { CustomresPageComponent } from "../pages/customers/customres-page/customres-page.component";
import { PageNotFoundComponent } from "../pages/page-not-found/page-not-found.component";


const routers: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'customers',
    component: CustomresPageComponent,
  },
  {
    path: 'logout',
    component: LoggedComponent,
  },
  {
    path: 'login',
    component: UnloggedComponent,
  },
  {
    path: 'signup',
    component: UnloggedComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports:[RouterModule]
})

export class AppRoutingModule{ }
export const routingComponentes = [ContactsComponent,CustomresPageComponent,AboutComponent,LoggedComponent,UnloggedComponent,PageNotFoundComponent]