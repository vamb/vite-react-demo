import { useContext } from "react"
import { SelfContentContext, UPDATE_COUNT } from './SelfCountContent'

export default function BtnGroups(){
	const { countData, countDispatch } = useContext(SelfContentContext)
    console.log('countData countDispatch', countData, countDispatch)
    return(
        <>
            <button
                onClick={()=>{
                    console.log('add click')
                    countDispatch({type: UPDATE_COUNT, data: {count: ++countData.count}})
                }}
            >Add</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
                onClick={()=>{
                    console.log('sub click')
                    countDispatch({type: UPDATE_COUNT, data: {count: --countData.count}})
                }}
            >Sub</button>
        </>
    )
}