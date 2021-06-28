import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Person, Contacts } from 'src/app/model/person';
import { ServicePersonService } from '../service-person.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {
  person = new Person()
  editando = false;
  errorResponse = '';
  constructor(private personService: ServicePersonService, private router: Router) {

  }

  ngOnInit(): void {
  }

  new(form: FormControl) {
    form.reset()
    this.person = new Person()
  }

  save(person: Person) {
    console.log(person);
    if (this.editando) {
      this.update(person);
    } else {
      this.create(person);
    }
    this.router.navigate(['/listPerson']);
  }

  create(person: Person): void {
    const data = this.person;

    this.personService.createPerson(data)
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error);
          this.errorResponse = error;
        });
  }

  update(person: Person): void {
    const data = this.person;

    this.personService.createPerson(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  cancel() {
    this.router.navigate(['/listPerson']);
  }

}
