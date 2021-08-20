import { Component, Input, OnInit } from '@angular/core';
import { slideSelectorAnimation, slideImageAnimation } from 'src/app/animation';
import { slideShow, slideShowWithId } from '../../models/slide-show.model';

@Component({
  selector: 'app-slides-show',
  templateUrl: './slides-show.component.html',
  styleUrls: ['./slides-show.component.scss'],
  animations: [slideSelectorAnimation, slideImageAnimation]
})
export class SlidesShowComponent implements OnInit {
  @Input() slides: slideShow[];
  @Input() interval: number = 5000;

  slidesWithId: slideShowWithId[] = [];
  index: number = 0;
  activeId: number;

  constructor() { }

  ngOnInit(): void {
    this.insertId();
    this.activeId = this.slidesWithId[this.index].id;
    this.slidesInterval();
  }

  private insertId() {
    let id = 0;
    this.slides.forEach(slide => {
      this.slidesWithId.push({...slide, id});
      id++
    })
  }

  private slidesInterval() {
    setInterval(() => {
      this.index++;
      if (this.index > this.slidesWithId.length - 1) this.index = 0;
      this.activeId = this.slidesWithId[this.index].id;
    }, this.interval);
  }

  chooseSlide(id: number): void {
    this.activeId = id;
    this.index = id;
  }

}
