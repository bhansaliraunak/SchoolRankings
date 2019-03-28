import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {

  constructor(private ele: ElementRef, private renderer: Renderer, private eventManager: EventManager) { }
  
  
  @HostListener('click') onclick() {
    
   
    var signIn= document.getElementById('signIn');
    var signUp = document.getElementById('signUp');
    var container = document.getElementById('container');    

    this.eventManager.addEventListener(signUp, 'click', ()=>{
        this.renderer.setElementClass(container,'right-panel-active', true);
    });
    
    this.eventManager.addEventListener(signIn, 'click', ()=>{
      this.renderer.setElementClass(container,'right-panel-active', false);
  });
  
  
  }

}
