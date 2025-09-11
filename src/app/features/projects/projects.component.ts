import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  ToastService

} from '../../shared/service/toast.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private toastService: ToastService) { }

  projectList = [
    {
      title: 'TaskFlow Pro',
      description: 'A fully-featured Jira Clone built from scratch, designed for agile teams to plan, track, and manage software development projects. The system includes project and issue management, Kanban-style boards and customizable workflows.',
      imageUrl: 'assets/projects/project1.png',
      projectUrl: 'https://sachin-portfolio-website.vercel.app/',
      skills: [
        { name: 'Angular', class: 'px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full' },
        { name: 'Tailwind', class: 'px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full' },
        { name: 'Ng-Zorro', class: 'px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full' },
        { name: 'Akita', class: 'px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full' },
        { name: 'Ngx-quill', class: 'px-3 py-1 text-xs bg-pink-100 text-pink-700 rounded-full' },
      ]
    },
    {
      title: 'Blog App',
      description: 'A full-featured blog platform that allows users to create, edit, and manage blog posts using a clean and responsive UI. Built with a modern full-stack architecture, the application features a rich-text editor, secure user authentication using JWT, and seamless communication between the frontend and backend through RESTful APIs.',
      imageUrl: 'assets/projects/project2.png',
      projectUrl: '',
      skills: [
        { name: 'Angular', class: 'px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full' },
        { name: 'Node.js', class: 'px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full' },
        { name: 'Express', class: 'px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full' },
        { name: 'Rxjs', class: 'px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full' },
        { name: 'Tailwind', class: 'px-3 py-1 text-xs bg-pink-100 text-pink-700 rounded-full' }
      ]

    },
    {
      title: 'Saxio IMS',
      description: 'Built an enterprise-grade Incident management software for real-time tracking, reporting, and analytics. Utilized Chart.js for interactive data visualizations and Leaflet.js for mapping incident locations. Developed , responsive, component-based UI with Angular, and handled asynchronous data operations using RxJS and REST APIs.',
      imageUrl: 'assets/projects/project3.png',
      projectUrl: '',
      skills: [
        { name: 'Angular', class: 'px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full' },
        { name: 'Material UI', class: 'px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full' },
        { name: 'Bootstrap', class: 'px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full' },
        { name: 'RxJs', class: 'px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full' },
        { name: 'Chart.js', class: 'px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full' },
        { name: 'Leaflet.js', class: 'px-3 py-1 text-xs bg-pink-100 text-pink-700 rounded-full' },
      ]
    }
  ]


  onClickLink(type: string) {
    if (type === 'livedemo') {
      this.toastService.info('The Live demo is coming soon.');
    } else {
      this.toastService.info('The project is private on GitHub.');
    }
  }
}
