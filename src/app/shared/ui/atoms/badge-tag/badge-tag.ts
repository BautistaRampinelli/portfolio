import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge-tag',
  imports: [],
  templateUrl: './badge-tag.html',
  styleUrl: './badge-tag.scss',
})
export class BadgeTag {
  readonly text = input<string>('');
}
