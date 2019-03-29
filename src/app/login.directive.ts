import { Directive, ElementRef, Renderer, HostListener, HostBinding, Renderer2 } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';

@Directive({
  selector: '[appLogin]'
})

export class LoginDirective {

  constructor(private ele: ElementRef, private renderer: Renderer2, private eventManager: EventManager) { }
  
  
  @HostListener('document:click',['$event']) onclick() {

    var signIn= document.getElementById('signIn');
    var signUp = document.getElementById('signUp');
    var container = document.getElementById('container');    

    this.eventManager.addEventListener(signUp, 'click', (event)=>{
      event.stopPropagation();
      console.log('ENTERED!!!');
        this.renderer.addClass(container,'right-panel-active');
        console.log(container);
    });
    
    this.eventManager.addEventListener(signIn, 'click', ()=>{
      this.renderer.removeClass(container,'right-panel-active');
  });

 
  
  
  }


}
