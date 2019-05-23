import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('NavSelection') choice = new EventEmitter<string>();

  onSelect( choice: string) {
    console.log('clicking');
    this.choice.emit(choice);
  }
}
