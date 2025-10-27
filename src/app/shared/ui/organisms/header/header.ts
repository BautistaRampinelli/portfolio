import { Component, input } from '@angular/core';
import { ThemeSelector } from '../../atoms/theme-selector/theme-selector';
import { Navbar } from '../../molecules/navbar/navbar';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [ThemeSelector, Navbar, MatToolbar, RouterLink, MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly title = input<string>('Bautista Rampinelli');
}
