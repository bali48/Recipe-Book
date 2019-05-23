import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Renderer3} from '@angular/core/src/render3/interfaces/renderer';

@Directive({
  selector: '[appStyledirective]'
})
export class StyledirectiveDirective implements OnInit{

  constructor(private elem: ElementRef, private rendrer: Renderer2) { }

  ngOnInit(){
    console.log('this',this.elem);
    this.rendrer.setStyle(this.elem,'background-color','orange');
  }

}
