
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SearchImagesComponent } from './search-images/search-images.component';
import {HttpClientModule} from '@angular/common/http';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { AppComponent } from './app.component';

const routes:Routes = [
{path:'', component:SearchImagesComponent },
{path:'bookmark', component:BookmarkComponent},
{path:'**', component:SearchImagesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchImagesComponent,
    BookmarkComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap:[AppComponent]
 
})
export class AppModule { }
