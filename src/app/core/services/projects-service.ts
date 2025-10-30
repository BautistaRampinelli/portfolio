import { computed, Injectable, signal } from '@angular/core';
import { ProjectInterface } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private _projects = signal<ProjectInterface[]>([]);
  readonly projects = computed(() => this._projects());

  constructor() {
    this._projects.set([
      {
        id: 0,
        title: '',
        description: '',
        technologies: []
      },
      {
        id: 0,
        title: '',
        description: '',
        technologies: []
      },
      {
        id: 0,
        title: '',
        description: '',
        technologies: []
      },
    ])
  }
}
