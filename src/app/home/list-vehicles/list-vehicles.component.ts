import { Component, Output, Input, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.sass']
})
export class ListVehiclesComponent {

  constructor() { }
  @Input() vehicle;
  @Output() delete = new EventEmitter();


  public deleteVehicle(id) {
    let result = confirm("Deseja mesmo deletar ?");
    if (result == true) {
      this.delete.emit(id)
    }
  }



}
