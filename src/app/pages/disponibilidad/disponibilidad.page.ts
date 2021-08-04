import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ActivatedRoute} from "@angular/router"
import { Input } from '@angular/core';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.page.html',
  styleUrls: ['./disponibilidad.page.scss'],
})
export class DisponibilidadPage implements OnInit {
  disp : string;
  character;
  characters=[]
 
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
    
      
    
  ) { }

  ngOnInit() {
    console.log(this.disp= this.activatedRoute.snapshot.paramMap.get('id'))
    this.http.get<any>('http://localhost:3000/materias/'+ this.disp)
    .subscribe(res => { console.log(res);
      this.character = res;
   
    

    })
  }
    
  
  }
