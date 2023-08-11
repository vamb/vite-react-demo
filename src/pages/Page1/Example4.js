import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import UnitContent from "../components/UnitContent";

function Index() {
    useEffect(()=>{
        console.log('老兄来到了首页')
        return()=>{
            console.log('老兄离开了首页')
        }
    },[])
    return <h2>JSPang.com</h2>;
}

function List() {
    useEffect(()=>{
        console.log('老兄来到了列表页面')
        return()=>{
            console.log('老兄离开了列表页面')
        }
    },[])
    return <h2>List-Page</h2>;
}

export default function Example4(){
    const [count, setCount] = useState(0)

    useEffect(()=>{

    },[count])

    return(
        <UnitContent title={'Example 4'}>
            <div>You Clicked {count} times</div><br/>
            <button onClick={()=>setCount(count+1)}>Click</button>

            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list'>列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" exact component={List} />
            </Router>
        </UnitContent>
    )
}
