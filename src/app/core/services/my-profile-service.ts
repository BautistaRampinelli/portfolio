import { computed, Injectable, signal } from '@angular/core';
import { AboutMeInterface } from '@app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  private _myProfile = signal<AboutMeInterface>({
    name: '',
    bio: '',
    profileImageUrl: '',
    technologies: [],
  });

  readonly myProfile = computed(() => this._myProfile());
}
