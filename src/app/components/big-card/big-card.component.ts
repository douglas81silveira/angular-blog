import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  photoCover: string =
    'https://stonegatesl.com/wp-content/uploads/2021/04/placeholder.jpg';
  @Input()
  cardTitle: string = 'Card Title';
  @Input()
  cardDescription: string = 'Card Description.';

  constructor() {}
}
