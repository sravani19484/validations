import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      firstName: ['', [Validators.required , Validators.pattern( "^[a-zA-Z\s]*$")]],
      lastName: ['', [Validators.required, Validators.pattern( "^[a-zA-Z\s]*$")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      num: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[7-9]\d{9}$/)]],
      date: ['', Validators.required]

    });

  } 

  get f() { return this.registerForm.controls; }

  datedata = new Date().toISOString().slice(0, 10);

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
