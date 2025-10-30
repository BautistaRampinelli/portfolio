import { computed, Injectable, signal } from '@angular/core';
import { ServiceInterface } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ServicesItemsService {
  private _services = signal<ServiceInterface[]>([]);
  readonly services = computed(() => this._services());

  constructor() {
    this._services.set([
      {
        id: 1,
        title: '',
        description: ''
      },
      {
        id: 2,
        title: '',
        description: ''
      },
    ])
  }
}
