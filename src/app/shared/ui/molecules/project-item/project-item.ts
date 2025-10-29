import { Component, input } from '@angular/core';
import { CardBase } from "../../atoms/card-base/card-base";
import { Title } from "../../atoms/title/title";
import { ButtonPrimary } from "../../atoms/button-primary/button-primary";

@Component({
  selector: 'app-project-item',
  imports: [CardBase, Title, ButtonPrimary],
  templateUrl: './project-item.html',
  styleUrl: './project-item.scss',
})
export class ProjectItem {
  readonly title = input.required<string>();
  readonly imageUrl = input<string>('');
  readonly desription = input<string>('');
  readonly linkLabel = input<string>('Ver Proyecto');
  readonly linkUrl = input<string>('#');
}
