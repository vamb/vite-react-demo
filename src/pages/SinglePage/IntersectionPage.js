import React, { useEffect } from 'react'
import styled from "styled-components";

const IntersectionPage = () => {

  useEffect(()=>{
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // if (entry.isIntersecting) {
        //   entry.target.classList.add('animate')
        //   observer.unobserve(entry.target)
        // }
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }else {
          entry.target.classList.remove('animate')
        }
      })
    })

    document.querySelectorAll('mark').forEach(mark => {
      observer.observe(mark)
    })
  },[])

  return (
    <Wrapper>
      <h1>JavaScript 的歷史及現況</h1>
      <p>1990 年，科學家 Tim Berners-Lee 在互聯網的基礎上發明了萬維網 (World Wide Web)，<mark>World Wide Web 這個詞在互聯網早期經常提到，還一直影響至今，大家記得網址開端一般都是以 www 起首的嗎？就是 World Wide Web 的簡寫。</mark>發明了 www，從此我們可以在網上互傳檔案。但這個時候的只能通過命令行模式 (Command Mode) 存取網絡，而且只能顯示文字，顯然是不方便的。</p>
      <p>1992 年史上第一個圖形化的網頁瀏覽器 Mosaic 誕生，1994 年改名為 Netscape Navigator (網景) 並推出 1.0 版本，市場佔有率超過 90%。<mark>由於當時的互聯網速度很慢，而且上網費昂貴，Netscape 公司為了優化瀏覽體驗，覺得有必要研發一套腳本語言，是在瀏覽器端運行的。</mark>例如我們在一個網站登入會員，忘了填寫用戶名稱就點擊了「登入」，這是候網頁再次載入，才提醒需要填寫用戶名稱，這顯然晚了一點。瀏覽器應該可以在用戶點擊「登入」時就進行初步檢查，在檢查到錯誤時及時彈出提示訊息讓用戶修正。</p>
      <p>Netscape 公司對於這種基於瀏覽器的腳本語言的想法是：功能不需要太強，語法較簡單，容易學習和應用。公司聘請了 Brendan Eich 研發這個腳本語言，<mark>據說他只用了 10 天，就設計好這個語言的第一版</mark>，最初命名為 Mocha，及後改名為 LiveScript。</p>
      <p>而據說當時 Sun 公司的 Java 語言相當受歡迎，出於市場推廣的原因，固意將這門語言與 Java 在名義上扯上關係（而實際上幾乎沒有）。Netscape 與 Sun 公司達成「合作協議」允許將 LiveScript 命名為 JavaScript。大家還記得當時有 JavaApplet 這種瀏覽器插件嗎？JavaApplet 是 Sun 公司發展出來，真正使用 Java 語言編寫，在瀏覽器端運行的應用程式，當時期望 JavaScript 的角色是像膠水一樣將各部份連接起來。<mark>後來 JavaApplet 失敗了，JavaScript 卻發揚光大了。</mark></p>
      <p>1996 年 JavaScript 隨著 Netscape 2.0 正式推出。</p>
      <p>1996 年 8 月 Microsoft 仿效 Netscape，於自己的 IE 瀏覽器發展出一門與 JavaScript 相近的腳本語言，取命 JScript。一山不能藏二虎，<mark>Netscape 公司將 JavaScript 提交給 ECMA International（歐洲電腦製造商協會）進行標準化，它就是 ECMAScript。</mark>不過基於歷史原因及市場原因，大家都習慣用 JavaScript 這個名字而非 ECMAScript。我們現在說的 JavaScript ES5 / ES6 等等，ES 就是 ECMAScript 版本的簡寫，後面的是版本號。</p>
      <p>ECMAScript 一直持續發展，但由於瀏覽器的支援滯後，在好長一段時間內一直流行 ECMAScript 3。直至 2012 年出現轉捩點，<mark>各大網站開始停止對舊版 IE 瀏覽器的支援</mark>，以及 Chrome 與 Firefox 等瀏覽器的佔有率開始提升，使得 ECMAScript 5 流行起來。</p>
      <p>在 2018 年的今天，即使 ECMAScript 6 在瀏覽器端還未正式普及，<mark>但有轉譯工具可以幫助我們今天起就編寫 ES6 的 JavaScript</mark>，而 Node.js 陣型（如 React Native）使用 ES6 已非常普遍了。</p>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  font-family: Helvetica;
  color: #333;
  width: 60%;
  margin: auto;
  
  h1 {
    font-size: 4rem;
    margin: 10rem 0 3rem 0;
  }
  
  p {
    font-size: 2rem;
    line-height: 3.8rem;
    margin: 2.6rem 0;
    letter-spacing: .05rem;
  }
  
  mark {
    background-color: transparent;
    color: inherit;
    background-image: linear-gradient(#73FFA0, #73FFA0);
    background-repeat: no-repeat;
    background-size: 0% 38%;
    background-position: 0 100%;
  }
  
  .animate {
    animation: 2s highlight ease-in-out forwards;
  }
  
  @keyframes highlight {
    to {
      background-size: 100% 38%;
    }
  }
`

export default IntersectionPage
