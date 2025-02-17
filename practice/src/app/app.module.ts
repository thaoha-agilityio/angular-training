import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout';
import { UserService } from './user/services/user.service';

const routes: Routes = [{ path: '', component: MainLayoutComponent }];

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [UserService],
  bootstrap: [],
})
export class AppModule {}
