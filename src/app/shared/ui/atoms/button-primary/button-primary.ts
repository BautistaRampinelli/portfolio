import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button-primary',
  imports: [MatButtonModule],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
  readonly label = input.required<string>();
  readonly type = input<ButtonType>('button');
}
