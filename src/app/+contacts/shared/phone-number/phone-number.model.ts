import { CountryDialingCodes } from './country-dialing-codes';
import { PhoneNumberErrorMessages } from './phone-number-error-messages';

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
    let countryDialingCode: string = '';

    if (CountryDialingCodes[countryCode]) {
      countryDialingCode = `+${ CountryDialingCodes[countryCode] }`;
    } else {
      console.warn(PhoneNumberErrorMessages.INVALID_COUNTRY_CODE_WARN);
    }

    return countryDialingCode;
  }

  private getFormattedPhoneNumberStr(format: string = 'default', countryCode?: string): string {
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
        console.warn(PhoneNumberErrorMessages.INVALID_FORMAT_WARN);
        formattedPhoneNumber = this.getDefaultFormattedPhoneNumber();
    }
   
    return formattedPhoneNumber;
  }

  public getFormattedPhoneNumber(format: string = 'default', countryCode?: string): string {
    let formattedPhoneNumber: string = this.getFormattedPhoneNumberStr(format);
    let internationalCountryCodeStr: string = '';

    if (countryCode && format) {
      internationalCountryCodeStr = this.getInternationCountryCodeStr(countryCode);
      formattedPhoneNumber = internationalCountryCodeStr ?
        `${internationalCountryCodeStr} ${formattedPhoneNumber}` : `${formattedPhoneNumber}`;
    }

    return formattedPhoneNumber;
  }
}