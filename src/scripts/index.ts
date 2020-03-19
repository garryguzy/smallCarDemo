import '../styles/index.scss';
import { createCar, initCarStatus, initCarPosition } from './car';
import { createCarTween } from './tween';
import { initScene }from './scrollController';
import {bindEvent} from './event';



console.log('webpack starterkit');


// 小车动画部分 tweenCar
// 小车的动态渲染 ， 实际上只要一张图片（任意的侧向小车视图就可以把小车变成到任意的方向）


let carObj = createCar()   // 创建小车，注意小车应该具备三部分 ， img 部分 (src ， 初始状态 ) ， imgWrap (自身翻转动画wrap部分) ， imgContainer(图片)
let tween = createCarTween(carObj);
initScene(tween);
bindEvent();
initCarStatus(carObj.find('img') , 20) // 初始化 Car 的旋转状态
initCarPosition(carObj, {x: 200, y: 100}) /// 根据场景位置定位 Car的初始位置
// carTweenAnimation()  // 车子的45度角的动画
// carFlipAnimation() // 车子的翻转的动画 ， Y轴翻转 180 
// carTransformIn()
// carTransformOut()// 车子在结束时变形 ，从一辆车子变形成另一辆

// bindScrollDirectionChange()  // 绑定滑动的方向的改变，用于改变car 的方向
// createScrollScene();  // 创建滚动场景1

// bindTweenToScrollScene(); // 绑定动画到滚动场景 1

// carAnimationStart(); //
// carAnimationEnd() =>  hiddenCar(); showAnotherCar();



interface CarAnimation{
  src: string

}