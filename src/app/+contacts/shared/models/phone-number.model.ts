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

  public getDefaultFormattedPhoneNumber(): string {
    return `(${ this.areaCode }) ${this.prefix}-${this.suffix}`;
  }

  public getHyphensFormattedPhoneNumber(): string {
    return `${ this.areaCode }-${this.prefix}-${this.suffix}`;
  }

  public getDotsFormattedPhoneNumber(): string {
    return `${ this.areaCode }.${this.prefix}.${this.suffix}`;
  }
}