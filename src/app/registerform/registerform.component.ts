import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators}  from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor() { }

  registerForm:any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastName": new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "address": new FormControl(null,Validators.required),
      "mobileNumber": new FormControl(null,[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      "dob": new FormControl(null,[Validators.required]),
      "emailId": new FormControl(null,[Validators.required,Validators.email]),
    });
  }

  submitData(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      alert("Check console for output.");
      this.registerForm.reset();
    }
  }

  get firstname(){
    return this.registerForm.get('firstName');
  }
  
  get lastname(){
    return this.registerForm.get('lastName');
  }

  get address(){
    return this.registerForm.get('address');
  }
  get mobilenumber(){
    return this.registerForm.get('mobileNumber');
  }
  get dob(){
    return this.registerForm.get('dob');
  }
  get email(){
    return this.registerForm.get('emailId');
  }

}
