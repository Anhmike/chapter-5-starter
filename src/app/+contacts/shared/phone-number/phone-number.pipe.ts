import { Pipe, PipeTransform } from '@angular/core';

import { PhoneNumber } from './phone-number.model';
import { PhoneNumberErrorMessages } from './phone-number-error-messages';

/**
 * PhoneNumberPipe
 * ===============
 * The PhoneNumberPipe takes in a string or a number and transforms the input
 * based on the format (optional) and country code (optional) If the format
 * is not entered the number will be formatted using the (XXX) XXX-XXXX format
 * by default.
 * 
 * The PhoneNumberPipe currently only supports phone numbers
 * in the North American Numbering Plan. Please see 
 * https://en.wikipedia.org/wiki/North_American_Numbering_Plan for details.
 * 
 * No parameter (default)
 * ----------------------
 * Not using any parameter will result in the pipe transforming the value 
 * into a default phone format which is (XXX) XXX-XXXX.
 * 
 * Usage:
 * {{ <phone number> | phoneNumber }}
 * 
 * Example:
 * {{ 7035551234 | phoneNumber }}
 * (703) 555-1234
 * 
 * Phone Number Format Parameter (optional)
 * ----------------------------------------
 * The first parameter is the phone format. Acceptable parameters are 
 * "default", "dots", "hyphens". The parameter is case insensitive.
 * 
 * Usage:
 * {{ <phone number> | phoneNumber : <format-type> }}
 * 
 * Examples:
 * {{ 7035551234 | phoneNumber : "default" }}
 * (703) 555-1234
 * 
 * {{ 7035551234 | phoneNumber : "DOTS" }}
 * 703.555.1234
 * 
 * {{ 7035551234 | phoneNumber : "hyphens" }}
 * 703-555-1234
 * 
 * Country Code Parameter (optional)
 * ---------------------------------
 * The second parameter is the country code. Any valid 2 or 3 character
 * country code is acceptable uses the North American Numbering Plan.
 * To see a list of countries that use the North American Numbering Plan
 * see https://en.wikipedia.org/wiki/North_American_Numbering_Plan. To find
 * their respective country codes please see: 
 * http://www.worldatlas.com/aatlas/ctycodes.htm.
 * 
 * Usage:
 * {{ <phone number> | phoneNumber : <format-type> : <country-code> }}
 * 
 * Example:
 * {{ 7035551234 | phoneNumber : "DOTS" : "US" }}
 * +1 703.555.1234
*/
@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, format?: string, countryCode?: string): string {
    let phoneNumber: PhoneNumber = null;
    let formattedPhoneNumber: string = '';

    if (this.isPhoneNumberValid(value)) {
      phoneNumber = new PhoneNumber(value);
      formattedPhoneNumber = phoneNumber.getFormattedPhoneNumber(format, countryCode);
    }

    return formattedPhoneNumber;
  }

  private isPhoneNumberValid(phoneNumber: any): boolean {
    const VALID_PHONE_LENGTH: number = 10;
    let isPhoneNumberValid: boolean = false;

    if (isNaN(phoneNumber)) {
      console.error(PhoneNumberErrorMessages.INVALID_PHONE_NUMBER_TYPE_ERR);
    } else if (phoneNumber.toString().length !== VALID_PHONE_LENGTH) {
      console.error(PhoneNumberErrorMessages.INVALID_PHONE_NUMBER_LENGTH_ERR);
    } else {
      isPhoneNumberValid = true;
    }

    return isPhoneNumberValid;
  }
}
