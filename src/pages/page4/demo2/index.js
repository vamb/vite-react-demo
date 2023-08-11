import React from 'react'
import UnitContent from "../../components/UnitContent";

const demo4_2=()=>{
  function createCode() {
    let code = "";
    let codeLength = 6;//验证码的长度，可变
    let canvas=document.getElementById('myCanvas');//获取画布
    console.log('createCode canvas', canvas)
    //所有候选组成验证码的字符
    let selectChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    for (let i = 0; i < codeLength; i++) {
      let charIndex = Math.floor(Math.random() * 36);
      code += selectChar[charIndex];
    }
    if (canvas) {
      let ctx=canvas.getContext('2d');
      ctx.fillStyle='#FFFFFF';
      ctx.fillRect(0,0,95,27);
      ctx.font="20px arial";
      // 创建渐变
      let gradient=ctx.createLinearGradient(0,0,canvas.width,0);
      gradient.addColorStop("0","magenta");
      gradient.addColorStop("0.5","blue");
      gradient.addColorStop("1.0","red");
      // 用渐变填色
      ctx.strokeStyle=gradient;
      ctx.strokeText(code,5,20);//画布上添加验证码
    }
  }
  return (
    <UnitContent title={'Page4 Demo2'}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>demo4-2</div>
        <div><button onClick={()=>createCode()}>generate code</button></div>
        <canvas id="myCanvas" width="95px" height="27px" style={{float: 'right', border:'1px solid #d3d3d3', width:'95px', height: '27px'}} />
      </div>
    </UnitContent>
  )
}

export default demo4_2
