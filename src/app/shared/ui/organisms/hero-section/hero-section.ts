import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonPrimary, Title } from '../../index';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, Title, ButtonPrimary],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
