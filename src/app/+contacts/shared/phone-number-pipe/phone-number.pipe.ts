import { Pipe, PipeTransform } from '@angular/core';

import { PhoneNumber } from '../models/phone-number.model';
import { PhoneNumberErrorMessages } from '../error-messages/error-messages';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, format: string): string {
    let formattedPhoneNumber = '';

    if (this.isPhoneNumberValid(value)) {
      formattedPhoneNumber = this.getFormattedPhoneNumber(value.toString(), format);
    } else {
      console.error(PhoneNumberErrorMessages.INVALID_PHONE_NUMBER);
    }

    return formattedPhoneNumber;
  }

  private isPhoneNumberValid(phoneNumber: any): boolean {
    const VALID_PHONE_LENGTH = 10;
    return !isNaN(phoneNumber) && phoneNumber.toString().length === VALID_PHONE_LENGTH;
  }

  private getFormattedPhoneNumber(value: string, format: string = ''): string {
    const phoneNumber = new PhoneNumber(value);

    switch (format.toLowerCase()) {
      case 'dots':
        return phoneNumber.getDotsFormattedPhoneNumber();
      case 'hyphens':
        return phoneNumber.getHyphensFormattedPhoneNumber();
      default:
        return phoneNumber.getDefaultFormattedPhoneNumber();
    }
  }
}
