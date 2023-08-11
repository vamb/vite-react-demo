import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import * as THREE from 'three';

const Demo10_1 = () => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild( renderer.domElement );

  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  camera.position.set( 0, 0, 100 );
  camera.lookAt( 0, 0, 0 );

  const scene = new THREE.Scene();
  const material = new THREE.LineBasicMaterial( { color: 'yellow' } );

  const points = [];
  points.push( new THREE.Vector3( - 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );

  const geometry = new THREE.BufferGeometry().setFromPoints( points );

  const line = new THREE.Line( geometry, material );

  scene.add( line );
  renderer.render( scene, camera );

  useEffect(()=>{
    document.querySelector('#Demo10_1').appendChild(renderer.domElement)
  },[])

  return (
    <UnitContent title={'10_1'}>
      <Wrapper>
        <div id={'Demo10_1'} />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo10_1
