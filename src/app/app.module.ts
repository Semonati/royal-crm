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



@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
