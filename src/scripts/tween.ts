import { car } from './car';

export const createCarTween = (carObj: JQuery<HTMLElement>) => {
  let tween =  TweenMax.to(carObj, 1, {
    css: {x: $(car.targetSceneElement).width() - car.size.width, y: "+=0"},
    ease: Linear.easeNone
  });
  return tween;
}

export const createCarRotateTween = (carObj: JQuery<HTMLElement>, rotationY: number , direction: number) => {

  if(car.direction === direction) return ;

  let tween =  TweenMax
  .to(carObj, 0.2, {  
    rotationY: "-=180" ,
    // transformPerspective:800,
    // transformOrigin: "left top",
    ease: Linear.easeNone
  })

  car.direction = car.direction === 0? 1: 0;
  // TweenMax.to(carObj,0.3,{
  //   rotateY: rotationY
  // })
  return tween;
}

const getCarTweenEndPosition = (targetSceneElement: JQuery<HTMLElement>) => {

}