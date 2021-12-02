import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss']
})
export class SixthComponent implements OnInit {

  isDown = false;
  startX = 0;
  scrollLeft = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('mousedown', ['$event'])
  onClickD($event: any) {
    this.isDown = true;
    var card = document.querySelector<HTMLElement>('.container-weather');
    this.startX = $event.pageX - card!.offsetLeft;
    this.scrollLeft = card!.scrollLeft;
  }

  @HostListener('mouseup', ['$event'])
  onClickU($event: any) {
    this.isDown = false;
  }

  @HostListener('mousemove', ['$event'])
  onClickM($event: any) {
    if (!this.isDown) {
      return;
    }
    var card = document.querySelector<HTMLElement>('.container-weather');
    const x = $event.pageX - card!.offsetLeft;
    const walk = (x - this.startX); //scroll-fast
    card!.scrollLeft = this.scrollLeft - walk;
  }

}
