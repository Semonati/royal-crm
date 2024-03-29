import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Controller } from './controller';

@Component({
  selector: 'display-mode-controllers',
  templateUrl: './display-mode-controllers.component.html',
  styles: [
  ]
})
export class DisplayModeControllersComponent {
  @Input() controllers: Array<Controller> = [];
  @Output() onChangeDisplay = new EventEmitter();

  onChangeDisplayMode(display: string) {
    this.onChangeDisplay.emit(display);
  }

}
