import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contacts } from 'src/app/model/person';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  @Input() contacts: Array<Contacts> = [];
  contact: any;
  showForm = false;
  contatoIndex!: number;

  constructor() { }

  ngOnInit() {
  }

  new() {
    this.showForm = true;
    this.contact = new Contacts()
    this.contatoIndex = this.contacts.length;
  }

  edit(contact: Contacts, index: number) {
    this.contact = this.add(contact);
    this.showForm = true;
    this.contatoIndex = index;
  }

  save() {
    this.contacts[this.contatoIndex] = this.add(this.contact);
    console.log(this.contact)
    this.showForm = false;

  }

  removerContato(index: number) {
    this.contact.splice(index, 1);
  }

  add(contact: Contacts): Contacts {
    return new Contacts(contact.code,
      contact.name, contact.email, contact.telephone);
  }

}
