import { Component } from '@angular/core';
import { MotokoService } from "./services/motoko.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmotoko';

  constructor(private motokoService: MotokoService){
    let hello = motokoService.greet("Mister Max");
    console.log(hello);
  }
}
