import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public opened = false;
  public dataSaved = false;
  public exampleDate: Date;
  public size="small";
  constructor(public datepipe: DatePipe){
    this.exampleDate =new Date()
  }

  ngOnInit(): void {
  }

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
    this.dataSaved = true;
    this.close();
  }

  onChangeFile(e:any){
    const target: DataTransfer=<DataTransfer>(e.target);
    if(target.files.length !==1 )throw new Error("Cannot use multiple files.");

    const reader:FileReader=new FileReader();
    reader.readAsBinaryString(target.files[0]);
  }
}


