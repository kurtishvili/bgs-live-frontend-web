import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgs-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  slides: string[] = [
    "https://wallpaperaccess.com/full/124578.jpg",
    "https://i.pinimg.com/originals/51/7e/83/517e83eb97c94ffc7bec62db71c3c586.jpg",
    "https://wallpaperaccess.com/full/124573.jpg"
  ]

  currentIndex: number = 0;

  getCurrentSlide() {
    return this.slides[this.currentIndex];
  }

  getPrev() {
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  getNext() {
    this.currentIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
  }

  changePrimarySlide(index: number) {
    this.currentIndex = index;
  }
}
