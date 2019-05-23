import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdowndirective]'
})
export class DropdowndirectiveDirective{
  @HostBinding('class.open')isOpen = false;
  @HostListener('click')
  toggleOpen(){
    this.isOpen = !this.isOpen;
  }
  // constructor(private elem: ElementRef, private rendrer:Renderer2) { }
  //
  // ngOnInit() {
  //   this.rendrer.addClass(this.elem,'open')
  // }
}
