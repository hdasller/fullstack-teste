import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GplService } from "../../services/gpl.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private searchField: FormControl;
  private coolForm: FormGroup;

  @Output() hasSearchKey = new EventEmitter();


  constructor(

    private _service: GplService,
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    this.initializeForm()
  }

  private initializeForm () {
    this.searchField = new FormControl();
    this.coolForm = this.fb.group({search: this.searchField});
    let that = this;
    this.searchField.valueChanges
      .debounceTime(400)
      .switchMap(key => this._service.find(key, 20, 1))
      .subscribe(({ loading, data }) => {
        console.log(data['buscaVeiculo']['edges'])
        let vehicles = data['buscaVeiculo']['edges']
        console.log("form" , that.coolForm.value)
        that.hasSearchKey.emit({key: that.coolForm.value, vehicles: vehicles})
      });
  }


}
