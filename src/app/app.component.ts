import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/nabvar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import * as AOS from 'aos';
import { ToastComponent } from './shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'sachin-port';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,   // animation duration (ms)
      easing: 'ease-in-sine',
      once: false,       // animate only once
      offset: 120       // offset from viewport
    });
    setTimeout(() => AOS.refresh(), 500);
  }

}
