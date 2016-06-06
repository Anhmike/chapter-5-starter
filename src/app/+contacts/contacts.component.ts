import { Component } from '@angular/core';

import { Contact } from './shared';
import { ContactListComponent } from './contact-list/contact-list.component';

@Component({
  moduleId: module.id,
  selector: 'fa-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [ContactListComponent]
})
export class ContactsAppComponent {
  title: string = 'Contacts';
  contacts: Contact[] = [];

  constructor() {}

  ngOnInit() {
    this.contacts = [
      { 
        name: 'Adrian Directive',
        email: 'adrian.directive@example.com', 
        number: '7035550123', 
        favorite: true 
      },
      {
        name: 'Rusty Component',
        email: 'rusty.component@example.com', 
        number: '4155550122', 
        favorite: false 
      },
      { 
        name: 'Jeff Pipe',
        email: 'jeff.pipe@example.com',
        number: '7145550111', 
        favorite: true
      },
      {
        name: 'Craig Service',
        email: 'craig.services@example.com',
        number: '6505550132',
        favorite: false 
      }
    ];
  }
}