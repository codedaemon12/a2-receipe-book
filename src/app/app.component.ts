import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ReceipesComponent } from './receipes';

@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  directives : [HeaderComponent,ReceipesComponent]
})
export class AppComponent {

}
