import { Component, OnInit } from '@angular/core';
import { ReceipeListComponent } from './receipe-list';
import { ReceipeDetailComponent } from './receipe-detail';
import { Receipe } from './receipe';
@Component({
  moduleId: module.id,
  selector: 'rb-receipes',
  templateUrl: 'receipes.component.html',
  directives :[ReceipeListComponent,ReceipeDetailComponent]
})
export class ReceipesComponent implements OnInit {
  selectedReceipe : Receipe;
  constructor() { }

  ngOnInit() {
  }

}
