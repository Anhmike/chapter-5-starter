import { Component, Input } from '@angular/core';

import { Contact } from '../shared/models/contact.model';
import { FavoriteIconDirective } from '../shared/favorite-icon/favorite-icon.directive';
import { ShowContactsDirective } from '../shared/show-contacts/show-contacts.directive';
import { PhoneNumberPipe } from '../shared/phone-number/phone-number.pipe';

@Component({
  moduleId: module.id,
  selector: 'ca-contact-list',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.css'],
  directives: [FavoriteIconDirective, ShowContactsDirective],
  pipes: [PhoneNumberPipe]
})
export class ContactListComponent {
  private noContactsMessage: string = 'You do not have any contacts yet';

  constructor() {}

  @Input('contacts') contacts: Contact[];

  private deleteContacts() {
    this.contacts = [];
  }

  private addContacts() {
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
        number: '4155550122', 
        country: 'us',
        favorite: false
      },
      { 
        name: 'Jeff Pipe',
        email: 'jeff.pipe@example.com',
        number: '7145550111',
        country: 'uk',
        favorite: true
      },
      {
        name: 'Craig Service',
        email: 'craig.services@example.com',
        number: '6505550132',
        country: 'uk',
        favorite: false 
      }
    ];
  }
}