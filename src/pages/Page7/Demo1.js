// import React, { useEffect, useState } from 'react'
// import styled from "styled-components";
// import detectEthereumProvider from '@metamask/detect-provider';
//
// const Demo1 = () =>{
//   const [ ethereum, setEthereum ] = useState(null)
//   const [ provider, setProvider ] = useState(null)
//   const [ currentAccount, setCurrentAccount ] = useState(null)
//   console.log('ethereum', ethereum)
//
//   const initProvider = async () =>{
//     const provider = await detectEthereumProvider();
//     console.log('provider', provider)
//     setProvider(provider)
//   }
//
//   const startApp = () =>{
//     if (provider !== window.ethereum) {
//       console.error('Do you have multiple wallets installed?');
//     }
//   }
//
//   const prepareStep = async () =>{
//     await initProvider()
//     startApp()
//   }
//
//   function connect() {
//     ethereum
//       .request({ method: 'eth_requestAccounts' })
//       .then(handleAccountsChanged)
//       .catch((err) => {
//         if (err.code === 4001) {
//           // EIP-1193 userRejectedRequest error
//           // If this happens, the user rejected the connection request.
//           console.log('Please connect to MetaMask.');
//         } else {
//           console.error(err);
//         }
//       });
//   }
//
//   function handleAccountsChanged(accounts) {
//     if (accounts.length === 0) {
//       // MetaMask is locked or the user has not connected any accounts
//       console.log('Please connect to MetaMask.');
//     } else if (accounts[0] !== currentAccount) {
//       setCurrentAccount(accounts[0])
//       // Do any other work!
//     }
//   }
//
//
//   const checkEthConnected = async (ethereum) =>{
//     if(ethereum){
//       return await ethereum.isConnected()
//     }
//     return false
//   }
//
//   const checkEth = async ()=>{
//     if(window.ethereum){
//       console.log('ethereum enable', window.ethereum)
//       setEthereum(window.ethereum)
//       let isConnected = await checkEthConnected(window.ethereum)
//       console.log('checkEthConnected isConnected', isConnected)
//     }else{
//       console.info('ethereum not working')
//     }
//   }
//
//   ethereum.on('accountsChanged', handleAccountsChanged);
//
//   // const ethReqAccounts = () =>{
//   //   ethereum.request({ method: 'eth_requestAccounts' }).then(rest=>{
//   //     console.log('EthReqAccounts rest', rest)
//   //   }).catch(err=>{
//   //     console.error('EthReqAccounts err', err)
//   //   })
//   // }
//
//   // const ethAccounts = () =>{
//   //   ethereum.request({ method: 'eth_accounts' }).then(rest=>{
//   //     console.log('ethAccounts rest', rest)
//   //   }).catch(err=>{
//   //     console.error('ethAccounts err', err)
//   //   })
//   // }
//
//   // const ethReqAcctsAndChange = () =>{
//   //   ethereum.request({ method: 'eth_requestAccounts' })
//   //     .then(handleAccountsChanged).catch(err=>{
//   //     console.error(err);
//   //   })
//   // }
//
//   useEffect(()=>{
//     prepareStep()
//     checkEth()
//   },[])
//
//   return(
//     <Wrapper>
//       <div className={'line'}>
//         <div
//           className={'line-unit'}
//           // onClick={()=>ethReqAccounts()}
//         >eth_requestAccounts</div>
//         <div
//           className={'line-unit'}
//           // onClick={()=>ethAccounts()}
//         >eth_accounts</div>
//         <div
//           className={'line-unit'}
//           // onClick={()=>ethAccounts()}
//         >handleAccountsChanged</div>
//         <div
//           className={'line-unit'}
//           onClick={()=>connect()}
//         >connect</div>
//       </div>
//     </Wrapper>
//   )
// }
//
// const Wrapper = styled('div')`
//   .line {
//     display: flex;
//     margin-top: 20px;
//   }
//   .line-unit {
//     margin-right: 10px;
//   }
// `
//
// export default Demo1
