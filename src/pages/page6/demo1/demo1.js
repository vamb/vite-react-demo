import React, { useState, useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo1 = () =>{
    const [dataContent, setDataContent] = useState(null)
    useEffect(()=>{
        // getData()
    }, [])

    const getData = () =>{
        let xhr = new XMLHttpRequest()
        let xhr2 = new XMLHttpRequest()
        console.log('xhr.readyState', xhr.readyState)
        /**
         * false => 同步执行代码
         * true => 异步执行代码
         */
        xhr.open('get', 'https://jsonplaceholder.typicode.com/users?_limit=5', true)
        xhr2.open('get', 'https://jsonplaceholder.typicode.com/photos?_limit=5', true)
        // xhr.open('get', './demo1.js', true)

        console.log('xhr.readyState', xhr.readyState)
        xhr.setRequestHeader('myHeader1', 'one');
        xhr.setRequestHeader('myHeader2', 'two');

        xhr2.send(null)
        xhr.send(null)
        console.log('xhr', xhr)
        xhr.onreadystatechange = () =>{
            /**
             * readyStatus
             * 0: 未初始化，尚未调用 open() 方法
             * 1: 已打开（open），已调用 open() 方法，尚未调用 send() 方法
             * 2: 已发送（send），已调用 send() 方法，尚未收到响应
             * 3: 接受中(receiving), 已经收到部分响应
             * 4: 完成（complete）, 已经收到所有响应，可以使用返回数据
             */
            console.log('xhr.readyState', xhr.readyState)
            if(4 === xhr.readyState){
                console.log('myHeader1', xhr.getResponseHeader("myHeader1"))
                let allHeaders = xhr.getAllResponseHeaders();
                console.log("allHeaders", allHeaders)

                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    console.log(xhr.responseText? JSON.parse(xhr.responseText): xhr.responseText);
                    setDataContent(xhr.responseText? JSON.parse(xhr.responseText): xhr.responseText)
                } else {
                    console.log("Request was unsuccessful: " + xhr.status);
                }
            }
        }
    }

    console.log('typeof dataContent', typeof dataContent, dataContent)

    return (
        <UnitContent title={'P6 D1'}>
            <Wrapper>
                {JSON.stringify(dataContent)}
            </Wrapper>
        </UnitContent>
    )
}

const Wrapper = styled('div')`

`

export default Demo1
