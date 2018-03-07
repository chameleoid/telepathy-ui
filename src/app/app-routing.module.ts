import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { IdentityManagerComponent } from './identity-manager/identity-manager.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: PasswordGeneratorComponent },
  { path: 'identity', component: IdentityManagerComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
