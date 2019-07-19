import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {DataService} from '../data.service'

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
public onepokemon;

  constructor(private _route:ActivatedRoute,private router:Router,public data:DataService) { }

  ngOnInit() {
    let pokeid=this._route.snapshot.paramMap.get('id')
    console.log(pokeid)
    this.onepokemon=this.data.getsinglepokemon(pokeid)
  }
 

}
