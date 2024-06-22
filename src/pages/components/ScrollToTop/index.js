import React, { useEffect, useState } from "react";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ScrollToTop = () => {
  const [ isVisible, setIsVisible ] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Wrapper>
      <div className="scroll-top-holder">
        {isVisible && (
          <div
            onClick={scrollToTop} aria-label="scroll to top"
            className={'scroll-main'}
            // className="flex justify-center items-center h-10 w-10 cursor-pointer rounded-full bg-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp hover:title-text-blue"
          ><VerticalAlignTopOutlined style={{fontSize: '24px'}} /></div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  .scroll-top-holder {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 99
  }
  .scroll-main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 100%;
    background-color: white;
    transition: all .3s;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    box-sizing: border-box;
  }
`

export default ScrollToTop