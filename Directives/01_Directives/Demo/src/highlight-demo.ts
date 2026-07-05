import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDemo]'
})
export class HighlightDemo {

  constructor(private ele : ElementRef) {
    this.ele.nativeElement.style.backgroundColor = 'green';
    // constructor call ekhdach hoto tyamule green color ekhdach ala mouse levae karun zzla ki  bluevoilet color apply hotoy
    this.ele.nativeElement.style.color = 'white';
  }

  @HostListener('mouseenter')
  OnmouseEnter(){
    this.ele.nativeElement.style.color = 'blue';
  }
  @HostListener('mouseleave')
  OnMouseLeave(){
    this.ele.nativeElement.style.color = 'Bluevoilet';
  }

  @HostListener('click')
onClick() {
  console.log('Clicked');
}

@HostListener('dblclick')
onDoubleClick() {
  console.log('Double Click');
}

}

