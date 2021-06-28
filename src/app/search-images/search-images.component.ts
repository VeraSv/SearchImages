import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';


@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent implements OnInit {

 images: Array<any>=[];
 keyword:string='';
 page:number=1;
 storage:any={};
 list:any[]=[];

 
  
  constructor(private flickrService: FlickrService) { }
  ngOnInit(): void {
   
  }
   bookmark(url:any,title:any) {
    if(!localStorage["bookmarks"]) this.storage={};
    else this.storage=JSON.parse(localStorage["bookmarks"])
   this.storage[title]={title,url};
   localStorage["bookmarks"]=JSON.stringify(this.storage);
   this.bookMarks.push(this.storage);
   }

  



search(event:any) {
  this.keyword= event.target.value.toLowerCase();
  if(this.keyword && this.keyword.length >0) {
    this.flickrService.search_keyword(this.keyword)
    .toPromise()
    .then(res =>{
      this.images =res;
     this.changePage();
    })
  }
}

setPreviousPage(p:any):void {
 this.page=p-1;
this.changePage();
}

setNextPage(p:any):void {
 this.page=p+1;
this.changePage();
}

changePage ():void {
  this.list=this.images.slice((this.page-1)*20, this.page*20)
 
}
}
