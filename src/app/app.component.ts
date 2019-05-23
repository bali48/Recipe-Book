import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selection = 'Recipes';
  atNavigation(selection : string){
    this.selection = selection;
  }
}
