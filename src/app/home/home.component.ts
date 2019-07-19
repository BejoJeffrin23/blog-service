import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: "app-home",
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allPokemons;
  constructor(public data:DataService) { }

  ngOnInit() {
    this.allPokemons=this.data.getAll()
    console.log('home called')
  }

}
