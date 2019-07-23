import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from 'ng2-completer';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BriefAgencyComponent } from './Agency/brief-agency/brief-agency.component';

import { AGENCY,AgencyService } from './interfaces/agency.service';
import{AllAgenciesService} from './Agency/all-agencies.service';
import { FiltrPipe } from './filtr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BriefAgencyComponent,
    FiltrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CompleterModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  providers: [AllAgenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
