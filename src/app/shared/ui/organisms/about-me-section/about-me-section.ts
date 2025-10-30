import { Component, input } from '@angular/core';
import { Title } from "../../atoms/title/title";

export type AboutMeInterface = {
  name: string;
  bio: string;
  profileImageUrl: string;
  technologies: string[];
}

@Component({
  selector: 'app-about-me-section',
  imports: [Title],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMeSection {
  readonly myProfile = input.required<AboutMeInterface>();
}
