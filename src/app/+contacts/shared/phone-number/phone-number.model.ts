import { telephoneCountryCodes } from './phone-number-country-codes';
import { phoneNumberErrorMessages } from './phone-number-error-messages';

export class PhoneNumber {
  private areaCode: string;
  private prefix: string;
  private suffix: string;

  constructor(number) {
    this.areaCode = this.getAreaCode(number);
    this.prefix = this.getPrefixCode(number);
    this.suffix = this.getSuffixCode(number);
  }

  private getAreaCode(phoneNumber: string): string {
    return phoneNumber.substring(0, 3);
  }

  private getPrefixCode(phoneNumber: string): string {
    return phoneNumber.substring(3, 6);
  }

  private getSuffixCode(phoneNumber: string): string {
    return phoneNumber.substring(6);
  }

  private getDefaultFormattedPhoneNumber(): string {
    return `(${ this.areaCode }) ${ this.prefix }-${ this.suffix }`;
  }

  private getHyphensFormattedPhoneNumber(): string {
    return `${ this.areaCode }-${ this.prefix }-${ this.suffix }`;
  }

  private getDotsFormattedPhoneNumber(): string {
    return `${ this.areaCode }.${ this.prefix }.${ this.suffix }`;
  }

  private getInternationCountryCodeStr(countryCode: string): string {
    countryCode = countryCode.toLowerCase();
    let telephoneCountryCode: string = '';

    if (telephoneCountryCodes[countryCode]) {
      telephoneCountryCode = `+${ telephoneCountryCodes[countryCode] }`;
    } else {
      console.warn(phoneNumberErrorMessages.INVALID_COUNTRY_CODE_WARN);
    }

    return telephoneCountryCode;
  }

  private getFormattedPhoneNumberStr(format: string = '', countryCode: string = ''): string {
    let formattedPhoneNumber: string = '';

    switch (format.toLowerCase()) {
      case 'default':
        formattedPhoneNumber =  this.getDefaultFormattedPhoneNumber();
        break;
      case 'dots':
        formattedPhoneNumber = this.getDotsFormattedPhoneNumber();
        break;
      case 'hyphens':
        formattedPhoneNumber = this.getHyphensFormattedPhoneNumber();
        break;
      default:
        console.warn(phoneNumberErrorMessages.INVALID_FORMAT_WARN);
        formattedPhoneNumber = this.getDefaultFormattedPhoneNumber();
    }
   
    return formattedPhoneNumber;
  }

  public getFormattedPhoneNumber(format: string = '', countryCode: string = ''): string {
    let formattedPhoneNumber: string = this.getFormattedPhoneNumberStr(format);
    let internationalCountryCodeStr: string = '';

    if (countryCode && format) {
      internationalCountryCodeStr = this.getInternationCountryCodeStr(countryCode);
      formattedPhoneNumber =  `${internationalCountryCodeStr} ${formattedPhoneNumber}`;
    }

    return formattedPhoneNumber;
  }
}