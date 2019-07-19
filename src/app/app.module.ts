import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogNotFoundComponent } from './blog-not-found/blog-not-found.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'pokemon/:id',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit',component:BlogEditComponent},
      {path:'**',component:BlogNotFoundComponent},
      {path:'about',component:AboutComponent}

    ])
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
