import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-twelfth',
  templateUrl: './twelfth.component.html',
  styleUrls: ['./twelfth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwelfthComponent implements OnInit {

  all: Array<string> = [];

  constructor(public cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.all = Array.from({length: 200}, _ => 'black');

    setInterval(() => {
      let indexToChange = this.randomIntFromInterval(0, this.all.length - 1);

      this.all[indexToChange] = Math.random() > 0.5 ? 'white' : 'black';
      this.cdr.detectChanges()
    })
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
