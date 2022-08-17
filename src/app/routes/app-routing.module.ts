import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContactsComponent } from "../pages/contacts/contacts.component";
import { CustomresPageComponent } from "../pages/customers/customres-page/customres-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { PageNotFoundComponent } from "../pages/page-not-found/page-not-found.component";
import { LogoutPageComponent } from "../pages/logout-page/logout-page.component"; 
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { SinginPageComponent } from "../pages/singin-page/singin-page.component";
import { NewCustomerComponent } from "../pages/customers/new-customer/new-customer.component";
import { NewContactComponent } from "../pages/contacts/new-contact/new-contact.component";
import { ContactDetailsComponent } from "../pages/contacts/contact-details/contact-details.component";
import { EditContactComponent } from "../pages/contacts/edit-contact/edit-contact.component";


const routers: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'contacts/add-contact',
    component: NewContactComponent,
  },
  {
    path: 'contacts/contact-details/:id',
    component: ContactDetailsComponent,
  },
  {
    path: 'contacts/edit-contact/:id',
    component: EditContactComponent,
  },
  {
    path: 'customers',
    component: CustomresPageComponent,
  },
  {
    path: 'customers/new-customer',
    component: NewCustomerComponent,
  },
  {
    path: 'logout',
    component: LogoutPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SinginPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    component: LoginPageComponent,
    // component: PageNotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports:[RouterModule]
})

export class AppRoutingModule{ }
export const routingComponentes = [
  ContactsComponent,
  NewContactComponent,
  CustomresPageComponent,
  ContactDetailsComponent,
  EditContactComponent,
  NewCustomerComponent,
  LogoutPageComponent,
  LoginPageComponent,
  AboutPageComponent,
  SinginPageComponent,
  PageNotFoundComponent,
];