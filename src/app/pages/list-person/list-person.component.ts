import { Component, OnInit } from '@angular/core';
import { Pageable } from 'src/app/model/Pageable';
import { PageableResponse } from 'src/app/model/PageableResponse';
import { ServicePersonService } from '../service-person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  pageable: Pageable = { page: 0, direction: "asc", size: 50, sort: "name" }
  filter: string = "";
  search: string = '';
  person: any;
  personContact: any;
  showDetails = false;
  selectedItem?: number;

  constructor(private personService: ServicePersonService) { }

  ngOnInit(): void {
    this.findAll(this.search)
  }


  findAll(filter: string) {
    this.personService.findAll(this.pageable).subscribe(
      (pageableResponse: PageableResponse) => {
        this.person = pageableResponse.content;
      })
  }

  all() {
    this.personService.getAllPerson().subscribe(
      (result) => {
        this.person = result;
      })
  }

  select(code: any) {
    this.selectedItem = code;

  }

  remove() {
    if (this.selectedItem) {
      this.personService.removePerson(this.selectedItem).subscribe(() => {
        this.findAll('');
      })
    }
  }

  details(code: number) {
    this.selectedItem = code;
    this.personContact = this.person[code].contacts;
    console.log(this.personContact)
    this.showDetails = true;
  }

  close() {
    this.showDetails = false;
  }

}
