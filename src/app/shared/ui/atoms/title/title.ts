import { Component, input } from '@angular/core';

export type LevelNumber = 1 | 2 | 3 | 4 | 5 | 6;

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  readonly level = input<LevelNumber>(1);
  readonly text = input.required<string>();
}
