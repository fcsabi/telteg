import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telteg';
  Aside!:number;
  Bside!:number;
  price!:number;
  calcArea():void{
    
    let area=this.Aside*this.Bside*2;
    
    
    
    console.log('Müködik')
  }
}
