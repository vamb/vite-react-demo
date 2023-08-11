import React, { useCallback, useMemo, useState, useEffect } from 'react'
import styled from 'styled-components'
import UnitContent from "../../components/UnitContent";

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    user-select:none;
    .clickable-text {
        color: #1890ff;
        cursor: pointer;
        padding-right: 20px;
    }
    .display-text {
        font-size: 1rem;
    }
`

const BigTest = () =>{
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)

    const memoUnit = useMemo(()=>{
        console.log('memo num1 + num2')
        return num1 + num2
    },[num1, num2])

    const callbackUnit = useCallback(()=>{
        console.log('callback num1 + num2')
        return num1 + num2
    },[num1, num2])

    let temp1 = num1
    let temp2 = num2
    let temp3 = num3
    return(
      <UnitContent title={'Big Test'}>
        <Wrapper>
            <div className='btn-area'>
                <div><span className='clickable-text' onClick={()=>{
                    setNum1(0);
                    setNum2(0);
                    setNum3(0);
                }}>reset</span></div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className='clickable-text' onClick={()=>setNum1(++temp1)}>Num1 Add</td>
                            <td className='clickable-text' onClick={()=>setNum1(--temp1)}>Num1 Sub</td>
                            <td className='display-text'>{`Num1 value: ${num1}`}</td>
                        </tr>
                        <tr>
                            <td className='clickable-text' onClick={()=>setNum2(++temp2)}>Num2 Add</td>
                            <td className='clickable-text' onClick={()=>setNum2(--temp2)}>Num2 Sub</td>
                            <td className='display-text'>{`Num2 value: ${num2}`}</td>
                        </tr>
                        <tr>
                            <td className='clickable-text' onClick={()=>setNum3(++temp3)}>Num3 Add</td>
                            <td className='clickable-text' onClick={()=>setNum3(--temp3)}>Num3 Sub</td>
                            <td className='display-text'>{`Num3 value: ${num3}`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='tbl-area'>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className='display-text' style={{paddingRight: '30px'}}>num1 + num2 (memo)</td>
                            <td className='display-text'>{memoUnit}</td>
                        </tr>
                        <tr>
                            <td className='display-text' style={{paddingRight: '30px'}}>num1 + num2 (callback)</td>
                            <td className='display-text'>{callbackUnit()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Wrapper>
      </UnitContent>
    )
}

export default BigTest
