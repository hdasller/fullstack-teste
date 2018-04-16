import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  @Input() vehicle;
  @Output() update = new EventEmitter();

  ngOnInit() {
    console.log("on init")
  }

  goUpdate(vehicle){
    this.update.emit(vehicle)
  }

}
