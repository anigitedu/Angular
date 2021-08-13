import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DirectiveComponent } from './directive/directive.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'directive',component:DirectiveComponent},
  {path:'templatedriven',component:TemplatedrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export  const routerComponent=[HomeComponent,ProductComponent,DirectiveComponent,TemplatedrivenComponent];

