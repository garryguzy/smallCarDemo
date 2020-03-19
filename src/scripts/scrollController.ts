const createScrollControl = () => {
  let controller = new ScrollMagic.Controller();
  return controller;
}

const createScrollScene = (tween:TweenMax, targetElement: string) => {
  // Scene Handler
  let scene = new ScrollMagic.Scene({
    // offset: 0,
    triggerElement: targetElement, // point of execution
    duration: $(targetElement).height(), // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  // .setPin(".section1")
  .setTween(tween)// the element we want to pin
  return scene ;
}

const addSceneToController = ( controller , scene ) => {
  controller.addScene([
    scene
  ]);
}

export const initScene = (tween: TweenMax)=> {
  let controller = createScrollControl();
  let scene = createScrollScene(tween,'.section1');
  addSceneToController(controller, scene);
  return scene ;
}