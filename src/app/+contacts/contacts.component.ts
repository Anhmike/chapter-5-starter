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
    this.contacts = this.contacts = [
      { 
        name: 'Adrian Directive',
        email: 'adrian.directive@example.com', 
        number: '7035550123',
        country: 'us',
        favorite: true 
      },
      {
        name: 'Rusty Component',
        email: 'rusty.component@example.com', 
        number: '4415550122', 
        country: 'bm',
        favorite: false
      },
      { 
        name: 'Jeff Pipe',
        email: 'jeff.pipe@example.com',
        number: '7145550111',
        country: 'us',
        favorite: true
      },
      {
        name: 'Craig Service',
        email: 'craig.services@example.com',
        number: '5145550132',
        country: 'ca',
        favorite: false 
      }
    ];
  }
}