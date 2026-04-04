import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FloatingActionsComponent } from './components/floating-actions/floating-actions.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, FloatingActionsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('murrel-honey-farms');
}
