import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  list:Array<any>=[];
  images: Array<any>=[];
  storage:any={};
  bookmarks:Array<any>=[];
  key:string="bookmarks";
  constructor() { }

  ngOnInit(): void {
    
    if(!localStorage[this.key])  this.storage={}
    else this.storage=JSON.parse(localStorage[this.key]);
    for(let key in this.storage) {
      this.images.push(this.storage[key])
    }
   
  
  }

  remove(title:string):void {
    
    if (title in this.storage) delete this.storage[title];
 
    localStorage[this.key]=JSON.stringify(this.storage);
   }
}
