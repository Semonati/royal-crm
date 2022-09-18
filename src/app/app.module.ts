import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routes/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './root/app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavComponent } from './layout/main/side-nav/side-nav.component';
import { LogoComponent } from './layout/header/top-nav/logo/logo.component';
import { HamburgerComponent } from './layout/header/top-nav/hamburger/hamburger.component';
import { LeftTopNavComponent } from './layout/header/top-nav/left-top-nav/left-top-nav.component';
import { RightTopNavComponent } from './layout/header/top-nav/right-top-nav/right-top-nav.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RandomNumPipe } from './pipes/random-num.pipe';
import { FirstLetterUppercasePipe } from './pipes/first-letter-uppercase.pipe';
import { TopNavLinkComponent } from './layout/header/top-nav/top-nav-link/top-nav-link.component';
import { SideNavLinkComponent } from './layout/main/side-nav/side-nav-link/side-nav-link.component';
import { routingComponentes } from './routes/app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/Users/login-page/login-page.component';
import { UnloggedComponent } from './layout/header/top-nav/right-top-nav/unlogged/unlogged.component';
import { LoggedComponent } from './layout/header/top-nav/right-top-nav/logged/logged.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactFormComponent } from './pages/contacts/contact-form/contact-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { DisplayModeControllersComponent } from './components/display-mode-controllers/display-mode-controllers.component';
import { CustomerFormComponent } from './pages/customers/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './pages/customers/customer-details/customer-details.component';
import { EditCustomerComponent } from './pages/customers/edit-customer/edit-customer.component';
import { CustomersFoldersComponent } from './pages/customers/customer-display-mode/customers-folders/customers-folders.component';
import { CustomersTableComponent } from './pages/customers/customer-display-mode/customers-table/customers-table.component';
import { ContactsTableComponent } from './pages/contacts/contacts-display-mode/contacts-table/contacts-table.component';
import { ContactsFolderComponent } from './pages/contacts/contacts-display-mode/contacts-folder/contacts-folder.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    UnloggedComponent,
    LoggedComponent,
    routingComponentes,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SideNavComponent,
    LogoComponent,
    HamburgerComponent,
    LeftTopNavComponent,
    RightTopNavComponent,
    PageHeaderComponent,
    TopNavLinkComponent,
    RandomNumPipe,
    FirstLetterUppercasePipe,
    SideNavLinkComponent,
    LoginPageComponent,
    AboutPageComponent,
    ContactFormComponent,
    SearchBarComponent,
    DisplayModeControllersComponent,
    CustomerFormComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    CustomersFoldersComponent,
    CustomersTableComponent,
    ContactsTableComponent,
    ContactsFolderComponent,
    SpinnerLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
