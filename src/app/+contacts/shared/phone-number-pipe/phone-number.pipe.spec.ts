import {
  it,
  fit,
  xit,
  describe,
  ddescribe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { PhoneNumberPipe } from './phone-number.pipe';

ddescribe('PhoneFilter Pipe', () => {
  beforeEachProviders(() => [PhoneNumberPipe]);

  it('should transform the input', inject([PhoneNumberPipe], (pipe: PhoneNumberPipe) => {
      //expect(pipe.transform(true)).not.toBe(null);
  }));

  xit('should transform string into the proper phone format', () => {

  });

  xit('should add country code if avaliable to the text', () => {

  });

  xit('should transform a number into the proper phone format', () => {

  });

  xit('should throw an error if the input is not a string or a number', () => {

  });

  xit('should throw an error if input does not contain a certain number of characters', () => {

  });

  
});
