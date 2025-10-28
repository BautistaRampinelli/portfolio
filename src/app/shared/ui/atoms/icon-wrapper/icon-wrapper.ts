import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export type IconSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';

@Component({
  selector: 'app-icon-wrapper',
  imports: [MatIconModule],
  templateUrl: './icon-wrapper.html',
  styleUrl: './icon-wrapper.scss',
})
export class IconWrapper {
  readonly iconName = input.required<string>();
  readonly size = input<IconSize>('medium');
}
