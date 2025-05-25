import { Component, inject } from '@angular/core';
import { SubmitFormService } from '../../services/submit-form.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// Add a state variable to render in home.component.html
  myBoolean: boolean = false;
  private mySubmit = inject(SubmitFormService);
  myData: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'Pernalonga'
    },
    {
      id: 2,
      name: 'Mickey'
    },
    {
      id: 3,
      name: 'Donald'
    }
  ];
  // Add a method to toggle the state variable
  handleBoolean() {
    this.myBoolean = !this.myBoolean;
  }
  // Add a method to submit data to the backend
  handleSubmit() {
    this.mySubmit.submitToBackend('This is my data');
  }

}
