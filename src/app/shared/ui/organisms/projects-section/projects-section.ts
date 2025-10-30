import { Component, input } from '@angular/core';
import { ProjectItem, Title } from '../..';
import { ProjectInterface } from '@app/shared/models/portfolio-models';

@Component({
  selector: 'app-projects-section',
  imports: [Title, ProjectItem],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  readonly projects = input.required<ProjectInterface[]>();
}
