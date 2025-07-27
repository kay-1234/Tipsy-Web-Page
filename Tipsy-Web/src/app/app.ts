import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeContainerComponent } from './contents/features/home';
import { FooterComponent } from './contents/core/footer/footer.component';
import { HeaderComponent } from './contents/core/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HomeContainerComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  onNavigationClick = (href: string): void => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
}
