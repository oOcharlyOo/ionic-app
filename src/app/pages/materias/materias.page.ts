import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  characters = []

  constructor(
    private http: HttpClient
  ) { }

  async ngOnInit() {
    this.http.get<any>("http://localhost:3000/materias")
    .subscribe(res => {
      console.log(res);
      this.characters = res;
    })
  }

}
