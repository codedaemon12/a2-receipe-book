import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipe';

@Component({
  moduleId: module.id,
  selector: 'rb-receipe-detail',
  templateUrl: 'receipe-detail.component.html'
})
export class ReceipeDetailComponent implements OnInit {
  @Input() selectedReceipe : Receipe;
  constructor() { }

  ngOnInit() {
  }

}
