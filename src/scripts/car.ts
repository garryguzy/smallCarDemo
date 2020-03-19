interface Position {
  x: number;
  y: number;
}
interface Size {
  width: number;
  height?: number;
}

interface Car {
  direction: 0|1 ;  //初始方向 1 向下
  obj: CarObj;
  position: Position,
  size: Size,
  targetSceneElement: JQuery.Selector
}

type CarObj = JQuery<HTMLElement>;

export let carObj : CarObj;

export let car: Partial<Car> = {
  direction: 1,  // car current direction
  obj: carObj,
  position: {
    x: 200, y: 100
  }, 
  size:{
    width:200
  }, 
  targetSceneElement: '.section1'
}

export const createCar = () => {
  carObj = $(carTemplate)
  carObj.appendTo('#app');
  setCarSize(200);
  return carObj;
}

const carTemplate =
  `<div class="yj-container">
    <div class="yj-imgWrap">
      <img src="https://cdn1.zhizhucms.com/materials/30/origin/2c65962861ad9cc8d574f35f7353f922_origin.jpg" class="yj-obj">
    </div>
  </div>
  `


const setCarSize = (width: number, height: number|string = "auto") => {
  carObj.find('img').width(width);
  carObj.find('img').height(height);
}

export const initCarStatus = (carObj: CarObj , rotation: number) => {
  TweenMax.set(carObj, {
    rotateZ: 20,
    rotateX: 10,
    transformStyle:"preserve-3d",
    perspective: 800
  })
}

export const initCarPosition = (carObj:CarObj , position: Position) => {
  TweenMax.set(carObj, position)
}

export let carStatus:number = 1; // 默认朝向 向下