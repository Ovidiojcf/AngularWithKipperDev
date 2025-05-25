import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SubmitFormService } from '../../services/submit-form.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() myProps!: string; // Add an input property to receive data from the parent component
  @Output() myEmit = new EventEmitter<string>(); // Add an output property to emit data to the parent component


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
    this.myEmit.emit('Data submitted successfully!'); // Emit an event to the parent component
  }

}
