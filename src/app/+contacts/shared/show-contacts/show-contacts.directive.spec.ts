import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { ShowContactsDirective } from './show-contacts.directive';

@Component({
  selector: 'test-component',
  template: `<div caShowContacts></div>`
})
class TestComponent {}

describe('ShowContacts Directive', () => {
  beforeEachProviders((): any[] => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  })));

   describe('Event tests', () => {

    describe('Mouse over events', () => {
      it('Nothing should happen to the gold star if the contact is a favorite', () => {
        
      });
      
      it('A black outlined star with no fill should appear if the contact is not a favorite', () => {
        
      });
    });
  });
});
