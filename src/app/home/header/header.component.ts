import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Output() create = new EventEmitter();

  constructor() { }

  goCriate(){
    this.create.emit()
  }

}
