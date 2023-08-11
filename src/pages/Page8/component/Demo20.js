import React, { memo, useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Button } from 'antd'

const Demo20 = memo(() =>{

  useEffect(()=>{
    let displayBtn = document.querySelector('.display-link')
    let pageMask = document.querySelector('.mask')
    let pageSelfModal = document.querySelector('.self-modal')
    let closeBtn = document.querySelector('.modal-close')
    let modalTitle = document.querySelector('.modal-title')

    displayBtn.addEventListener('click', ()=>{
      pageMask.style.display = 'block'
      pageSelfModal.style.display = 'flex'
    })

    closeBtn.addEventListener('click', ()=>{
      pageMask.style.display = 'none'
      pageSelfModal.style.display = 'none'
    })

    modalTitle.addEventListener('mousedown', (e)=>{
      let x = e.pageX - pageSelfModal.offsetLeft
      let y = e.pageY - pageSelfModal.offsetTop
      const selfModalMove = (e) =>{
        pageSelfModal.style.left = e.pageX - x + 'px'
        pageSelfModal.style.top = e.pageY - y + 'px'
      }
      document.addEventListener('mousemove', selfModalMove)

      document.addEventListener('mouseup', ()=>{
        document.removeEventListener('mousemove', selfModalMove)
      })
    })
  },[])

  return(
    <UnitContent title={'Demo20'}>
      <Wrapper>
        <Button type={'primary'} className='display-link'>点击弹窗</Button>
        <div className="mask" />
        <div className="self-modal">
          <div className="modal-title">
            <span>modal title</span>
            <div className="modal-close">X</div>
          </div>
          <div className="modal-divider" />
          <div className="modal-content">modal content</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  .self-modal {
    display: none;
    box-sizing: border-box;
    width: 512px;
    height: 280px;
    position: fixed;
    left: 50%;
    top: 50%;
    border: 1px solid #ebebebeb;
    box-shadow: 0 0 20px #ddd;
    transform: translate(-50%, -50%);
    transform-origin: 0px 0px;
    /*display: flex;*/
    background: #fff;
    flex-direction: column;
  }
  .mask {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
  }
  .modal-title {
    width: 100%;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    padding: 5px 0;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    position: relative;
    cursor: move;
    user-select: none;
  }
  .modal-close {
    border-radius: 90%;
    position: absolute;
    cursor: pointer;
    right: -15px;
    top: -15px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #ebebebeb;
    box-shadow: 0 0 20px #ddd;
  }
  .modal-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-top: 10px;
    height: 300px;
    width: 100%;
  }
`

export default Demo20
