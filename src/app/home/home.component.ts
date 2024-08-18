import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private shared: SharedService, private http: HttpClient){}

  data:any
  ngOnInit(): void {  
      
    const search:any = document.getElementById('search')
    const result:any = document.getElementById('result')
    const resultContainer:any = document.getElementById('resultContainer')

    this.shared.getData().subscribe((event) => {

      console.log(event)
      this.data = event

    })

    search.addEventListener('keyup', (event: { key: string; }) => {

      if(event.key == "Enter" && search.value   ) {

        result.src = `/images/${search.value}.png`
        console.log(result.src)
        resultContainer.style.display = "flex"
      }

    })
    

  }
  

  close() {

    const resultContainer:any = document.getElementById('resultContainer')

    resultContainer.style.display = "none"

  }

}
