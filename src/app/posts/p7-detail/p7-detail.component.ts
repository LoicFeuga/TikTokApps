import {Component, OnInit} from '@angular/core';
import {Article} from "../p7/p7.component";

@Component({
  selector: 'app-p7-detail',
  templateUrl: './p7-detail.component.html',
  styleUrls: ['./p7-detail.component.scss']
})
export class P7DetailComponent implements OnInit {

  article?: Article;

  constructor() {
  }

  ngOnInit(): void {
    this.article = JSON.parse(localStorage.getItem('article') || '');

  }

}
