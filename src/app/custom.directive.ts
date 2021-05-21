import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color="blue";
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color('yellow');
  }
   @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color('blue');
  }

}
