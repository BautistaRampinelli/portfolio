import { Component } from '@angular/core';
import { ThemeSelector } from '../../atoms/theme-selector/theme-selector';
import { CustomButton } from '../../atoms/custom-button/custom-button';

@Component({
  selector: 'app-header',
  imports: [ThemeSelector, CustomButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
