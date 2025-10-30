import { Component, input } from '@angular/core';
import { ProjectItem, Title } from '../..';

export type ProjectInterface = {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: string;
  link?: string;
  technologies: string[];
};

@Component({
  selector: 'app-projects-section',
  imports: [Title, ProjectItem],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  readonly projects = input.required<ProjectInterface[]>();
}
