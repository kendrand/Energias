import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {
  images=[
    {img:"../../assets/1.png", nombre:"el gato", desc:"aaaaaaa"},
    {img:"../../assets/02.jpg", nombre:"no es un gato",desc:"bbbbbbb"},
    {img:"../../assets/03.jpg", nombre:"definitivamente no un gato",desc:"ccccccc"}
  ]
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
