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
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UnloggedComponent } from './layout/header/top-nav/right-top-nav/unlogged/unlogged.component';
import { LoggedComponent } from './layout/header/top-nav/right-top-nav/logged/logged.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactFormComponent } from './pages/contacts/contact-form/contact-form.component';


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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
