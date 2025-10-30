import { Component, input } from '@angular/core';
import { Title } from "../../atoms/title/title";
import { AboutMeInterface } from '@app/shared/models/portfolio-models';

@Component({
  selector: 'app-about-me-section',
  imports: [Title],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMeSection {
  readonly myProfile = input.required<AboutMeInterface>();
}
