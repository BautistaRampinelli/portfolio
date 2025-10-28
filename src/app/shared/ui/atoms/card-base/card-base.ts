import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-base',
  imports: [],
  templateUrl: './card-base.html',
  styleUrl: './card-base.scss',
})
export class CardBase {
  readonly className = input<string | null>(null)
}
