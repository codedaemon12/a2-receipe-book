import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Receipe } from '../receipe';
import { ReceipeItemComponent } from './receipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-receipe-list',
  templateUrl: 'receipe-list.component.html',
  directives : [ReceipeItemComponent]
})
export class ReceipeListComponent implements OnInit {
 receipes : Receipe[] = [];
 @Output() receipeSelected = new EventEmitter<Receipe>();
 receipe = new Receipe("Dummy","Dummy","http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg");
  constructor() { }

  ngOnInit() {
  }

  onSelected(receipe : Receipe){
    this.receipeSelected.emit(receipe);
  }

}
