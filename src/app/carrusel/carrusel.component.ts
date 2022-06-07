import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {
  images=[
    {img:"../../assets/sol1.png"},
    {img:"../../assets/agua1.png"},
    {img:"../../assets/aire1.png"},
    {img:"../../assets/geo1.png"},
    {img:"../../assets/sol2.png"},
    {img:"../../assets/agua2.png"},
    {img:"../../assets/aire2.png"},
    {img:"../../assets/geo2.png"}
  ]
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
