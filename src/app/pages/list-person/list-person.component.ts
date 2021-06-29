import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pageable } from 'src/app/model/Pageable';
import { PageableResponse } from 'src/app/model/PageableResponse';
import { ServicePersonService } from '../service-person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  pageable: Pageable = { page: 0, direction: "asc", size: 5, sort: "name" }

  @Output()
  pageChange!: EventEmitter<number>;

  @Output()
  pageBoundsCorrection!: EventEmitter<number>;

  filter: string = "";
  pag: number = 1;
  paginaAtual: number = 1;
  contador: number = 5;
  search: string = '';
  totalPagina: any;
  person: any;
  personContact: any;
  showDetails = false;
  selectedItem?: number;

  constructor(private personService: ServicePersonService, private router: Router) { }

  ngOnInit(): void {
    this.findAll(this.search)
  }


  findAll(filter: string) {
    this.personService.findAll(this.pageable).subscribe(
      (pageableResponse: PageableResponse) => {
        this.person = pageableResponse.content;
        this.pageable.page = pageableResponse.totalPages;
        this.totalPagina = pageableResponse;
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
        this.router.navigate(['/']);
        this.handlePageChange(0);
      })
    }
  }

  details(code: number) {
    this.selectedItem = code;
    this.personContact = this.person.find((e: { code: number; }) => e.code == code)
    this.showDetails = true;
  }

  close() {
    this.showDetails = false;
  }

  handlePageChange(e: any) {
    this.pageable.page = e;
    this.pag = e;
    this.findAll('');
  }


}
