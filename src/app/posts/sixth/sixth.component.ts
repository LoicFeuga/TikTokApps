import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss']
})
export class SixthComponent implements OnInit {

  isDown = false;
  x = 0;
  scroll = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('mousedown', ['$event'])
  onDown($event: any) {
    this.isDown = true;

    var container = document.querySelector<HTMLElement>('.container-weather');
    this.x = $event.pageX - container!.offsetLeft;
    this.scroll = container!.offsetLeft
  }

  @HostListener('mouseup', ['$event'])
  onUp($event: any) {
    this.isDown = false;
  }

  @HostListener('mousemove', ['$event'])
  onMove($event: any) {
    if (!this.isDown) {
      return;
    }

    var container = document.querySelector<HTMLElement>('.container-weather');
    const x = $event.pageX - container!.offsetLeft;
    const move = (x - this.x);
    container!.scrollLeft = this.scroll - move;

  }

}
