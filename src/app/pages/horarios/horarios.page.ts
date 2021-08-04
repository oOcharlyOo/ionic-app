import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Input } from '@angular/core';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {
disp : string;
  character;
  characters=[]

 
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
    
      
    
  ) { }

  ngOnInit() {
    this.disp= this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get<any>('http://localhost:3000/materias/'+ this.disp)
    .subscribe(res => { console.log(res);
      this.character = res;

    this.http.get<any>("http://localhost:3000/materias")
      
    .subscribe(res2 => {
      console.log(res2);
      this.characters = res2;
    })
    

    });
   
     
    
    }
    
    
  
  }
