import { Component, OnInit } from '@angular/core';
import { GplService } from "../services/gpl.service";
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ModalMutationComponent } from './modal-mutation/modal-mutation.component';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private vehicles = []
  private selectedVehicle = this.vehicles[0];
  private vehicle;
  private key;
  private page: number = 1;
  private pageInfo;
  private limit: number = 5;


  constructor(private _service: GplService, public dialog: MatDialog) {


  }


  ngOnInit() {
    this.loadVehicles()

  }

  public loadVehicles(join?) {
    try {
      let key = this.key ? this.key : null
      this._service.find(key, this.limit, this.page)
        .subscribe(({ loading, data }) => {

          if(join) this.loadAndJoin(data)
          if(!join) this.load(data)

        });
    } catch (e) {
      console.log("Erro loadvehicles", e)
    }
  }

  public deleteVhicle(id) {
    this._service.deleteModel(id)
      .subscribe(res => {
        console.log(res)
        this.loadVehicles()
      });
  }

  public outputVehicle(event) {
    this.deleteVhicle(event)
  }

  public selectVehicle(vehicle) {
    this.selectedVehicle = vehicle;
  }

  public createVehicle() {
    let mutateDialog = this.dialog.open(ModalMutationComponent);
    mutateDialog.afterClosed().subscribe(result => {
      this.loadVehicles()
    });
  }

  public goUpdate(vehicle) {
    console.log(vehicle)
    let mutateDialog = this.dialog.open(ModalMutationComponent,
      {
        data: vehicle
      }
    )
    mutateDialog.afterClosed().subscribe(result => {
      this.loadVehicles()
    });
  }

  public filterVehicles(obj) {
    console.log("Filtered", obj)
    this.vehicles = []
    this.vehicles = obj.vehicles;
    this.key = obj.key.search
  }

  public load(data){
    this.page = 1;
    this.pageInfo = data['buscaVeiculo']['pageInfo']
    this.vehicles = []
    this.vehicles = data['buscaVeiculo']['edges']
    this.selectedVehicle = this.vehicles[0]
  }
  public loadAndJoin(data){
    this.pageInfo = data['buscaVeiculo']['pageInfo']
    this.vehicles = [... this.vehicles, ... data['buscaVeiculo']['edges']]
  }

  onScroll () {
       console.log('scrolled!!')
       if(this.pageInfo.hasNextPage){
         this.page ++
         this.loadVehicles(true)
       }
   }
}
