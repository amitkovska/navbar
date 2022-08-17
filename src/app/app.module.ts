import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header/header/header.component';
import { FooterComponent } from './shared-components/footer/footer/footer.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HomeComponent } from './home/home/home.component';
import { SetingsComponent } from './setings/setings/setings.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader';  
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    HomeComponent,
    SetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,  
    TranslateModule.forRoot({  
    loader: {  
       provide: TranslateLoader,  
       useFactory: httpTranslateLoader,  
       deps: [HttpClient]  
       }  
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {  
  return new TranslateHttpLoader(http);  
}  