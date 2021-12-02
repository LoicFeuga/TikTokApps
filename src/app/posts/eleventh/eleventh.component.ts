import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import SwiperCore, {Pagination, SwiperOptions} from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-eleventh',
  templateUrl: './eleventh.component.html',
  styleUrls: ['./eleventh.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EleventhComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {clickable: true},
  };

  active: number = 0;

  constructor(private ref: ChangeDetectorRef) {
  }

  onSwiper(swiper: any) {
    console.log(swiper.activeIndex);
  }

  onSlideChange(event: any) {
    console.log('slide change', event.activeIndex);
    this.active = event.activeIndex;
    this.ref.detectChanges();
    console.log(this.active);

  }

  ngOnInit(): void {

  }

}
