import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { createCarRotateTween } from './tween';
import { carObj , carStatus } from './car';

export const directionChange$ = new Subject();

export const bindEvent = () => {
  let lastScrollTop = 0;

  document.addEventListener("scroll", function(){ // or
     var st = window.pageYOffset || document.documentElement.scrollTop; 
     if (st > lastScrollTop){
        // downscroll code
        directionChange$.next(1)
     } else {
        // upscroll code
        directionChange$.next(0);
     }
     lastScrollTop = st <= 0 ? 0 : st; 
  }, false);
  
  directionChange$.pipe(
    distinctUntilChanged()
  )
  .subscribe((direction: number) => {
    console.log(direction);
    let rotationY = direction === 0? 180: -180;
    createCarRotateTween(carObj.find('img'), rotationY, direction);
  })
}
