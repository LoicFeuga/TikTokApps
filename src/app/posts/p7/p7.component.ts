import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

export class Article {
  id: number = 0;
  name: string = "";
  url: string = "";
  price: string = "0€";
  liked: boolean = false;
}

@Component({
  selector: 'app-p7',
  templateUrl: './p7.component.html',
  styleUrls: ['./p7.component.scss']
})
export class P7Component implements OnInit {

  articles: Array<Article> = [];
  articlesFiltered: Array<Article> = [];
  input: FormControl = new FormControl('');

  constructor(private router: Router) {
    this.articles = [
      {
        id: 0,
        name: 'Pocket devnim oversized',
        url: 'assets/p7/article1.png',
        price: '69.99€',
        liked: false
      },
      {
        id: 1,
        name: 'Ben tapered fit jeans',
        url: 'assets/p7/article2.png',
        price: '69.99€',
        liked: false
      },
      {
        id: 2,
        name: 'Straight fit grey bob',
        url: 'assets/p7/article3.png',
        price: '59.99€',
        liked: false
      },
      {
        id: 3,
        name: 'Tapered fit lyocelli',
        url: 'assets/p7/article4.png',
        price: '39.99€',
        liked: false
      }
    ];
    this.articlesFiltered = this.articles;
  }

  ngOnInit(): void {
    this.input.valueChanges.subscribe(v => {
      this.articlesFiltered = this.articles.filter(a => {
        return a.name.includes(v) || v === "";
      })
    })
  }

  goDetail(article: Article) {
    localStorage.setItem('article', JSON.stringify(article));
    this.router.navigate(['p7-detail'])
  }

  liked(id: number, e: any) {
    this.articles = this.articles.map(a => {
      if (a.id === id) {
        a.liked = !a.liked;
        return a;
      } else {
        return a;
      }
    })
    e.stopPropagation();
  }
}
