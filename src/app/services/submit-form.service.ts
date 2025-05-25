import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {

  constructor() { }

  submitToBackend(info: string){
    console.log('Submitting to backend:', info);
  }
}
