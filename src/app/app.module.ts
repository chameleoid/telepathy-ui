import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { IdentityManagerComponent } from './identity-manager/identity-manager.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    IdentityManagerComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,

    MatTooltipModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
