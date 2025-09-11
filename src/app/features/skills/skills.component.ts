import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'assets/skills/angular.svg' },
    { name: 'TypeScript', icon: 'assets/skills/typescript.svg' },
    { name: 'JavaScript', icon: 'assets/skills/javascript.svg' },
    { name: 'HTML5', icon: 'assets/skills/html5.svg' },
    { name: 'CSS3', icon: 'assets/skills/css.svg' },
    { name: 'Node.js', icon: 'assets/skills/nodedotjs.svg' },
    { name: 'Express.js', icon: 'assets/skills/express.svg' },
    { name: 'MongoDB', icon: 'assets/skills/mongodb.svg' },
    { name: 'RxJs', icon: 'assets/skills/reactivex.svg' },
    { name: 'Git', icon: 'assets/skills/git.svg' },
    { name: 'GitHub', icon: 'assets/skills/github.svg' },
    { name: 'Tailwind Css', icon: 'assets/skills/tailwindcss.svg' },
  ]
}
