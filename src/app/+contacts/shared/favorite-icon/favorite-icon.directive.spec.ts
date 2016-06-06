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

import { FavoriteIconDirective } from './favorite-icon.directive';

describe('FavoriteContact Directive', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders((): any[] => []);

  // fit('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
  //   return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<any>) => {
  //     console.log(fixture);
  //     fixture.detectChanges();
  //   });
  // })));
  
  describe('Initial load tests', () => {
    it('A gold star should appear if contact is a favorite', () => {

    });
    
    it('A white star should not appear if the contact is a favorite', () => {

    });
  });
  
  describe('Event tests', () => {

    describe('Mouse over events', () => {
      it('Nothing should happen to the gold star if the contact is a favorite', () => {
        
      });
      
      it('A black outlined star with no fill should appear if the contact is not a favorite', () => {
        
      });
    });
    
    describe('Mouse exit events', () => {
      
    });
    
    describe('Click events', () => {
      it('', () => {});
    });
    
    describe('When contact is not a favorite', () => {
      it('Black outlined star with no fill should appear when rolled over', () => {
        
      });
      
      it('Gold star should appear when clicked', () => {
        
      });
    });
  });
});

@Component({
  selector: 'test-component',
  template: `<div favorite-icon></div>`
})
class TestComponent {}