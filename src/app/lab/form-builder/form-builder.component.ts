import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

class User {
  name: string = '';

  constructor(name: string) {
    this.name = name
  }
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  group?: FormGroup;
  user: User = new User('User');
  // async validator
  // iterative form control
  // build dynamic forms

  color = 'color';

  constructor(private fb: FormBuilder) {


  }

  get name() {
    return this.group?.get('name')?.value;
  }

  get valid() {
    return this.group?.valid;
  }

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl(this.user.name,
        [Validators.required,
          this.forbiddenNameValidator()
        ])
    })

    this.group?.get('name')?.valueChanges.subscribe(v => {
      console.log(v);
    })
  }

  cc() {
    console.log(this.user.name);

  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === 'loic' ? null : {azeaze: {value: control.value}};
    };
  }
}
