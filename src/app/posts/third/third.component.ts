import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  items: Array<string> = [];
  formName = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {

    if(this.formName.value){
     this.items.push(this.formName.value);
     this.formName.reset();
    }

  }

  deleteItem(itemToDelete: string): void {
    this.items = this.items.filter(item => item !== itemToDelete );
  }

  clearAll(): void {
    this.items = [];
  }

}
