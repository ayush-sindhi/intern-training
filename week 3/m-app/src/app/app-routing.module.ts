import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {TestComponent} from './test/test.component'
import {ContactComponent} from './contact/contact.component'
import {ErrorComponent} from './error/error.component'


const routes: Routes = [{path:'main',component:TestComponent},{path:'',redirectTo:'home',pathMatch:"full"},{path:'contact',component:ContactComponent},{path:'home',component:HomeComponent},{path:'about',component:AboutComponent},{path:'**', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
