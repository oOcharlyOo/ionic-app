import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Materias', url: '/pages/materias', icon: 'book' },
    { title: 'Horarios', url: '/folder/Horarios', icon: 'calendar' },
    { title: 'Disponibilidad', url: '/folder/Disponibilidad', icon: 'checkmark' },
   
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
