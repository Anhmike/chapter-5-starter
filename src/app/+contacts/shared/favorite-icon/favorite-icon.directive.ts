import { Directive, ElementRef, Input } from '@angular/core';

import { Styles } from '../styles/styles';

@Directive({
  selector: '[caFavoriteIcon]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()'
  }
})
export class FavoriteIconDirective {
  private element: HTMLElement;
  
  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  @Input('caFavoriteIcon') isFavorite: boolean;
  
  private ngOnInit() {
    if (this.isFavorite) {
      this.element.setAttribute('class', Styles.GOLD_STAR);
    } else {
      this.element.setAttribute('class', Styles.WHITE_STAR);
    }
  }
  
  private onMouseEnter() {
    if (!this.isFavorite) {
      this.element.setAttribute('class', Styles.OUTLINE_STAR);
    }
  }
  
  private onMouseLeave() {
    if (!this.isFavorite) {
      this.element.setAttribute('class', Styles.WHITE_STAR);
    }
  }
  
  private onClick() {
    this.isFavorite = !this.isFavorite;
    
    if (this.isFavorite) {
      this.element.setAttribute('class', Styles.GOLD_STAR);
    } else {
      this.element.setAttribute('class', Styles.OUTLINE_STAR);
    }
  }
}
