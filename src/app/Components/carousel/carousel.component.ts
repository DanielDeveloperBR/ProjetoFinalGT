import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, NgIf, NgbAlert],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}