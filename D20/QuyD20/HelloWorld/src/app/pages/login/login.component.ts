import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(public fb:FormBuilder) {
    this.form = this.fb.group({
      name : ["Quý", [Validators.required,Validators.email]],
      age : "25",
      pass : "33"
    })
  }
  
  ngOnInit(): void {
  }
  submit(){
    if(this.form.valid){
      this.form.setValue({
        name : ["Trọng"],
      age : "30",
      pass : "30"
      })
      this.form.patchValue({
        age : "35"
      })
      alert(this.form.value.name);
    }else{
      alert("Thông tin không hợp lệ")
    }
    // alert(this.form.value.name)
  }
}
