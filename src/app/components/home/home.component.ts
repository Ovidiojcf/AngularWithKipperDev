import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// Add a state variable to render in home.component.html
  myBoolean: boolean = false;

  // Add a method to toggle the state variable
  handleBoolean() {
    this.myBoolean = !this.myBoolean;
  }

}
