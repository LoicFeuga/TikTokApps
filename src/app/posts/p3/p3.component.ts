import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.scss']
})
export class P3Component implements OnInit {

  clicked = false;
  clic: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
