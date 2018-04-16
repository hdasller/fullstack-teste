import { Component, OnInit, Output, Inject, Input, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { GplService } from "../../services/gpl.service";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-mutation',
  templateUrl: './modal-mutation.component.html',
  styleUrls: ['./modal-mutation.component.sass']
})
export class ModalMutationComponent implements OnInit {

  @ViewChild("formModal") formModal;

  public isUpdate: boolean = false;
  public fuelList;
  public markList;

  constructor(
    public dialogRef: MatDialogRef<ModalMutationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _service: GplService,
  ) {

    console.log(this.data)

  }


  ngOnInit() {
    this.initialize()
  }

  initialize() {
  this.loadFuelType()
  this.loadMarkType()

    if (this.data) {

      let that = this;
      setTimeout(function() {
        that.isUpdate = true;
        that.formModal.resetForm(that.data)
        console.log(that.data)
      }, 30);
    }

  }

  update(form) {
    let id = form._id
    delete form._id
    delete form.__typename

    this._service.update(id, form)
      .subscribe(res => {
        console.log(res)
        this.close()
      });
  }

  create(form) {
    delete form._id
    this._service.create(form)
      .subscribe(res => {
        console.log(res)
        this.close()
      });
  }

  close(): void {
    this.isUpdate = false;
    this.dialogRef.close();
  }


  loadMarkType() {
    this._service.findType("MarcaType")
      .subscribe(({ loading, data }) => {
        this.markList = data["__type"]['enumValues']

      });
  }

  loadFuelType() {
    this._service.findType("CombustivelType")
      .subscribe(({ loading, data }) => {
        this.fuelList = data["__type"]['enumValues']

      });
  }


}
