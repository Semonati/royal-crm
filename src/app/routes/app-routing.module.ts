import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactsComponent } from "../pages/contacts/contacts-page/contacts.component";
import { CustomresPageComponent } from "../pages/customers/customres-page/customres-page.component";
import { LoginPageComponent } from "../pages/Users/login-page/login-page.component";
import { PageNotFoundComponent } from "../pages/page-not-found/page-not-found.component";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { SinginPageComponent } from "../pages/Users/singin-page/singin-page.component";
import { NewCustomerComponent } from "../pages/customers/new-customer/new-customer.component";
import { NewContactComponent } from "../pages/contacts/new-contact/new-contact.component";
import { ContactDetailsComponent } from "../pages/contacts/contact-details/contact-details.component";
import { EditContactComponent } from "../pages/contacts/edit-contact/edit-contact.component";
import { EditCustomerComponent } from "../pages/customers/edit-customer/edit-customer.component";
import { AuthGuard } from "./auth.guard";
import { LoggedGuard } from "./logged.guard";
import { CustomerDetailsComponent } from "../pages/customers/customer-details/customer-details.component";


const routers: Routes = [
  {
    path: 'customers',
    component: CustomresPageComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'customers/new-customer',
    component: NewCustomerComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'customers/customer-details/:id',
    component: CustomerDetailsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'customers/edit-customer/:id',
    component: EditCustomerComponent,
    // canActivate: [AuthGuard],
  },

  {
    path: 'contacts',
    component: ContactsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'contacts/add-contact',
    component: NewContactComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'contacts/contact-details/:id',
    component: ContactDetailsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'contacts/edit-contact/:id',
    component: EditContactComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SinginPageComponent,
  },
  {
    path: '',
    component: LoginPageComponent,
    //  canActivate: [LoggedGuard] 
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponentes = [
  ContactsComponent,
  NewContactComponent,
  CustomresPageComponent,
  ContactDetailsComponent,
  EditContactComponent,
  NewCustomerComponent,
  LoginPageComponent,
  AboutPageComponent,
  SinginPageComponent,
  PageNotFoundComponent,
];