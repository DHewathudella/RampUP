import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homecars',
  templateUrl: './homecars.component.html',
  styleUrls: ['./homecars.component.scss']
})
export class HomecarsComponent implements OnInit {

  constructor() { }

  cars=[
    {id:'1',firstName:'afbx',lastName:'gfgbcd',email:'abc@gmail.com',carMake:'ffg',car_model:'benz',manufacturedDate:'2000-10-09',ageOfVehicle:'20'},
    {id:'2',firstName:'aEbx',lastName:'fbcd',email:'abc@gmail.com',carMake:'ffg',car_model:'BMW',manufacturedDate:'2000-10-09',ageOfVehicle:'20'},
    {id:'3',firstName:'DDabx',lastName:'bvcd',email:'abc@gmail.com',carMake:'ffg',car_model:'Ferrari',manufacturedDate:'2000-10-09',ageOfVehicle:'20'},
    {id:'4',firstName:'vvabx',lastName:'ffdbcd',email:'abc@gmail.com',carMake:'ffg',car_model:'Audi',manufacturedDate:'2000-10-09',ageOfVehicle:'20'},
     {id:'1',firstName:'afbx',lastName:'gfgbcd',email:'abc@gmail.com',carMake:'ffg',car_model:'benz',manufacturedDate:'2000-10-09',ageOfVehicle:'20'},
    {id:'2',firstName:'aEbx',lastName:'fbcd',email:'abc@gmail.com',carMake:'ffg',car_model:'BMW',manufacturedDate:'2000-10-09',ageOfVehicle:'20'},
    {id:'3',firstName:'DDabx',lastName:'bvcd',email:'abc@gmail.com',carMake:'ffg',car_model:'Ferrari',manufacturedDate:'2000-10-09',ageOfVehicle:'20'},
    {id:'4',firstName:'vvabx',lastName:'ffdbcd',email:'abc@gmail.com',carMake:'ffg',car_model:'Audi',manufacturedDate:'2000-10-09',ageOfVehicle:'20'},
  ]

  ngOnInit(): void {
  }

  deleteCar(i:number){
    this.cars.splice(i,1);
  }

}
