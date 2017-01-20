import React from 'react'

const logoSvgText = (textColor) => {
  return (
    <path d='M49.7,19.1 C49.6,19.6 49.3,20.1 49,20.5 C48.7,20.9 48.3,21.3 47.9,21.6 C47.5,21.9 47,22.2 46.4,22.4 C45.8,22.6 45.2,22.7 44.5,22.7 C43.7,22.7 43,22.6 42.2,22.3 C41.5,22 40.9,21.6 40.3,21.1 C39.8,20.6 39.3,19.9 39,19.2 C38.7,18.4 38.5,17.6 38.5,16.6 C38.5,15.7 38.7,14.9 39,14.1 C39.3,13.4 39.7,12.7 40.2,12.2 C40.7,11.7 41.3,11.3 42,11 C42.7,10.7 43.4,10.6 44.1,10.6 C45.9,10.6 47.3,11.1 48.3,12.2 C49.3,13.3 49.8,14.7 49.8,16.5 L49.8,17.4 L41.6,17.4 C41.6,17.8 41.7,18.1 41.9,18.4 C42.1,18.7 42.3,19 42.5,19.2 C42.8,19.4 43.1,19.6 43.4,19.7 C43.7,19.8 44.1,19.9 44.5,19.9 C45.2,19.9 45.8,19.7 46.2,19.4 C46.6,19.1 46.9,18.7 47.1,18.1 L49.7,19.1 L49.7,19.1 Z M46.8,15.3 C46.8,15 46.7,14.7 46.6,14.5 C46.5,14.2 46.3,14 46.1,13.8 C45.9,13.6 45.6,13.4 45.3,13.3 C45,13.2 44.6,13.1 44.2,13.1 C43.8,13.1 43.4,13.2 43.1,13.3 C42.8,13.4 42.5,13.6 42.3,13.8 C42.1,14 41.9,14.3 41.8,14.5 C41.7,14.8 41.6,15 41.6,15.3 L46.8,15.3 Z M53.4,22.2 C53.5,22.8 53.8,23.4 54.3,23.8 C54.8,24.2 55.4,24.4 56.1,24.4 C57.1,24.4 57.8,24.1 58.4,23.6 C58.9,23.1 59.2,22.3 59.2,21.2 L59.2,20.4 C59,20.8 58.6,21.1 58.1,21.4 C57.6,21.7 56.9,21.9 56.1,21.9 C55.3,21.9 54.6,21.8 54,21.5 C53.4,21.2 52.8,20.8 52.3,20.3 C51.8,19.8 51.5,19.2 51.2,18.5 C50.9,17.8 50.8,17.1 50.8,16.3 C50.8,15.5 50.9,14.8 51.2,14.2 C51.5,13.5 51.8,12.9 52.3,12.4 C52.8,11.9 53.3,11.5 54,11.2 C54.6,10.9 55.4,10.8 56.2,10.8 C57.1,10.8 57.8,11 58.4,11.3 C58.9,11.6 59.3,12 59.5,12.4 L59.5,11.1 L62.5,11.1 L62.5,21.3 C62.5,22.1 62.4,22.8 62.2,23.6 C62,24.3 61.6,25 61.1,25.5 C60.6,26 60,26.5 59.2,26.8 C58.4,27.1 57.5,27.3 56.5,27.3 C55.7,27.3 55,27.2 54.4,27 C53.8,26.8 53.2,26.5 52.7,26.1 C52.2,25.7 51.8,25.3 51.5,24.8 C51.2,24.3 51,23.8 50.9,23.2 L53.4,22.2 L53.4,22.2 Z M56.4,19.2 C57.2,19.2 57.8,18.9 58.3,18.4 C58.8,17.9 59.1,17.2 59.1,16.3 C59.1,15.4 58.8,14.7 58.3,14.2 C57.8,13.7 57.1,13.4 56.4,13.4 C56,13.4 55.7,13.5 55.3,13.6 C55,13.7 54.7,13.9 54.4,14.2 L53.8,15.1 C53.7,15.5 53.6,15.9 53.6,16.3 C53.6,17.2 53.9,17.9 54.4,18.4 C54.9,18.9 55.6,19.2 56.4,19.2 L56.4,19.2 Z M66.1,22.2 C66.2,22.8 66.5,23.4 67,23.8 C67.5,24.2 68.1,24.4 68.8,24.4 C69.8,24.4 70.5,24.1 71.1,23.6 C71.6,23.1 71.9,22.3 71.9,21.2 L71.9,20.4 C71.7,20.8 71.3,21.1 70.8,21.4 C70.3,21.7 69.6,21.9 68.8,21.9 C68,21.9 67.3,21.8 66.7,21.5 C66.1,21.2 65.5,20.8 65,20.3 C64.5,19.8 64.2,19.2 63.9,18.5 C63.6,17.8 63.5,17.1 63.5,16.3 C63.5,15.5 63.6,14.8 63.9,14.2 C64.2,13.5 64.5,12.9 65,12.4 C65.5,11.9 66,11.5 66.7,11.2 C67.3,10.9 68.1,10.8 68.9,10.8 C69.8,10.8 70.5,11 71.1,11.3 C71.6,11.6 72,12 72.2,12.4 L72.2,11.1 L75.2,11.1 L75.2,21.3 C75.2,22.1 75.1,22.8 74.9,23.6 C74.7,24.3 74.3,25 73.8,25.5 C73.3,26 72.7,26.5 71.9,26.8 C71.1,27.1 70.2,27.3 69.2,27.3 C68.4,27.3 67.7,27.2 67.1,27 C66.5,26.8 65.9,26.5 65.4,26.1 C64.9,25.7 64.5,25.3 64.2,24.8 C63.9,24.3 63.7,23.8 63.6,23.2 L66.1,22.2 L66.1,22.2 Z M69.2,19.2 C70,19.2 70.6,18.9 71.1,18.4 C71.6,17.9 71.9,17.2 71.9,16.3 C71.9,15.4 71.6,14.7 71.1,14.2 C70.6,13.7 69.9,13.4 69.2,13.4 C68.8,13.4 68.5,13.5 68.1,13.6 C67.8,13.7 67.5,13.9 67.2,14.2 L66.6,15.1 C66.5,15.5 66.4,15.9 66.4,16.3 C66.4,17.2 66.7,17.9 67.2,18.4 C67.7,18.9 68.4,19.2 69.2,19.2 Z M79.6,22.3 L76.6,22.3 L76.6,5.5 L79.6,5.5 L79.6,11.8 C80,11.4 80.4,11 81,10.8 C81.6,10.6 82.1,10.5 82.7,10.5 C83.4,10.5 84.1,10.6 84.6,10.9 C85.1,11.1 85.6,11.5 85.9,11.9 C86.2,12.3 86.5,12.8 86.7,13.3 C86.9,13.9 87,14.4 87,15.1 L87,22.3 L83.9,22.3 L83.9,15.6 C83.9,15 83.7,14.4 83.4,14 C83.1,13.6 82.5,13.3 81.8,13.3 C81.1,13.3 80.6,13.5 80.3,13.9 C79.9,14.3 79.7,14.9 79.7,15.5 L79.6,22.3 L79.6,22.3 Z M98.9,19.1 C98.8,19.6 98.5,20.1 98.2,20.5 C97.9,20.9 97.5,21.3 97.1,21.6 C96.7,21.9 96.2,22.2 95.6,22.4 C95,22.6 94.4,22.7 93.7,22.7 C92.9,22.7 92.2,22.6 91.4,22.3 C90.7,22 90.1,21.6 89.5,21.1 C89,20.6 88.5,19.9 88.2,19.2 C87.9,18.4 87.7,17.6 87.7,16.6 C87.7,15.7 87.9,14.9 88.2,14.1 C88.5,13.4 88.9,12.7 89.4,12.2 C89.9,11.7 90.5,11.3 91.2,11 C91.9,10.7 92.6,10.6 93.3,10.6 C95.1,10.6 96.5,11.1 97.5,12.2 C98.5,13.3 99,14.7 99,16.5 L99,17.4 L90.8,17.4 C90.8,17.8 90.9,18.1 91.1,18.4 C91.3,18.7 91.5,19 91.7,19.2 C92,19.4 92.3,19.6 92.6,19.7 C92.9,19.8 93.3,19.9 93.7,19.9 C94.4,19.9 95,19.7 95.4,19.4 C95.8,19.1 96.1,18.7 96.3,18.1 L98.9,19.1 L98.9,19.1 Z M96,15.3 C96,15 95.9,14.7 95.8,14.5 C95.7,14.2 95.5,14 95.3,13.8 C95.1,13.6 94.8,13.4 94.5,13.3 C94.2,13.2 93.8,13.1 93.4,13.1 C93,13.1 92.6,13.2 92.3,13.3 C92,13.4 91.7,13.6 91.5,13.8 C91.3,14 91.1,14.3 91,14.5 C90.9,14.8 90.8,15 90.8,15.3 L96,15.3 Z M99.9,19.2 C99.9,18.7 100,18.2 100.2,17.8 C100.4,17.4 100.6,17.1 100.9,16.8 C101.2,16.5 101.6,16.3 102,16.1 C102.4,15.9 102.9,15.8 103.3,15.7 L106.1,15.3 C106.4,15.3 106.6,15.2 106.8,15 C106.9,14.9 107,14.7 107,14.5 C107,14.1 106.8,13.7 106.5,13.5 C106.2,13.2 105.7,13.1 105,13.1 C104.3,13.1 103.8,13.3 103.4,13.7 C103,14.1 102.8,14.5 102.8,15 L100.1,14.4 C100.1,14 100.3,13.5 100.5,13.1 C100.7,12.7 101,12.2 101.5,11.9 C101.9,11.5 102.4,11.3 103,11 C103.6,10.8 104.3,10.7 105,10.7 C105.9,10.7 106.7,10.8 107.3,11.1 C107.9,11.3 108.4,11.7 108.8,12.1 C109.2,12.5 109.5,13 109.7,13.5 C109.9,14 110,14.6 110,15.1 L110,21.7 C110,22 110.1,22.3 110.1,22.5 L107.3,22.5 C107.3,22.3 107.2,22.1 107.2,21.9 L107.2,21.2 C106.9,21.6 106.5,22 105.9,22.4 C105.4,22.7 104.7,22.9 103.8,22.9 C103.2,22.9 102.7,22.8 102.2,22.6 C101.7,22.4 101.3,22.2 101,21.8 C100.7,21.5 100.4,21.1 100.2,20.7 C100,20.1 99.9,19.7 99.9,19.2 L99.9,19.2 Z M104.5,20.4 C104.8,20.4 105.1,20.4 105.4,20.3 C105.7,20.2 106,20.1 106.2,19.9 C106.4,19.7 106.6,19.4 106.8,19.1 C106.9,18.8 107,18.3 107,17.8 L107,17.3 L104.4,17.7 C104,17.8 103.7,17.9 103.4,18.1 C103.1,18.3 103,18.7 103,19.1 C103,19.4 103.1,19.7 103.4,20 C103.6,20.2 104,20.4 104.5,20.4 L104.5,20.4 Z M122.8,20.3 L122.8,21.4 C122.8,21.8 122.8,22.1 122.9,22.3 L120,22.3 C120,22.2 119.9,22 119.9,21.7 L119.9,20.9 C119.6,21.3 119.2,21.7 118.7,22 C118.2,22.3 117.5,22.5 116.7,22.5 C115.9,22.5 115.1,22.3 114.4,22 C113.7,21.7 113.1,21.3 112.6,20.7 C112.1,20.2 111.7,19.5 111.5,18.8 C111.3,18.1 111.1,17.3 111.1,16.4 C111.1,15.6 111.2,14.8 111.5,14.1 C111.8,13.4 112.1,12.7 112.6,12.2 C113.1,11.7 113.7,11.2 114.3,10.9 C114.9,10.6 115.7,10.4 116.5,10.4 C117,10.4 117.4,10.4 117.8,10.5 C118.2,10.6 118.5,10.7 118.7,10.8 C118.9,10.9 119.2,11.1 119.3,11.3 C119.5,11.5 119.6,11.6 119.7,11.8 L119.7,5.3 L122.7,5.3 L122.7,20.3 L122.8,20.3 L122.8,20.3 Z M114.2,16.6 C114.2,17.6 114.5,18.4 115,19 C115.5,19.6 116.2,19.9 117,19.9 C117.8,19.9 118.5,19.6 119,19 C119.5,18.4 119.8,17.6 119.8,16.6 C119.8,15.6 119.5,14.8 119,14.2 C118.5,13.6 117.8,13.4 117,13.4 C116.2,13.4 115.5,13.7 115,14.2 C114.5,14.8 114.2,15.6 114.2,16.6 Z M125.3,21.1 C125.3,20.8 125.4,20.5 125.6,20.3 C125.8,20.1 126.1,20 126.4,20 C126.7,20 127,20.1 127.2,20.3 C127.4,20.5 127.5,20.8 127.5,21.1 C127.5,21.4 127.4,21.7 127.2,21.9 C127,22.1 126.7,22.2 126.4,22.2 C126.1,22.2 125.8,22.1 125.6,21.9 C125.4,21.7 125.3,21.5 125.3,21.1 Z M130.1,22.2 L130.1,15.7 L131.7,15.7 L131.7,22.2 L130.1,22.2 Z M130.1,15.2 L130.1,13.9 L131.7,13.9 L131.7,15.2 L130.1,15.2 Z M137.4,13.8 C138,13.8 138.6,13.9 139.1,14.1 C139.6,14.3 140,14.6 140.4,15 C140.8,15.4 141.1,15.8 141.3,16.4 C141.5,16.9 141.6,17.5 141.6,18.1 C141.6,18.7 141.5,19.3 141.3,19.8 C141.1,20.3 140.8,20.8 140.4,21.2 C140,21.6 139.6,21.9 139.1,22.1 C138.6,22.3 138,22.4 137.4,22.4 C136.8,22.4 136.2,22.3 135.7,22.1 C135.2,21.9 134.8,21.6 134.4,21.2 C134,20.8 133.7,20.4 133.5,19.8 C133.3,19.3 133.2,18.7 133.2,18.1 C133.2,17.5 133.3,16.9 133.5,16.4 C133.7,15.9 134,15.4 134.4,15 C134.8,14.6 135.2,14.3 135.7,14.1 C136.2,13.9 136.8,13.8 137.4,13.8 L137.4,13.8 Z M137.4,21.1 C137.7,21.1 138.1,21 138.4,20.9 C138.7,20.8 139,20.6 139.2,20.3 C139.4,20.1 139.6,19.7 139.8,19.4 C139.9,19 140,18.6 140,18.1 C140,17.6 139.9,17.2 139.8,16.9 C139.7,16.5 139.5,16.2 139.2,16 C139,15.8 138.7,15.6 138.4,15.4 C138.1,15.3 137.8,15.2 137.4,15.2 C137,15.2 136.7,15.3 136.4,15.4 C136.1,15.5 135.8,15.7 135.6,16 C135.4,16.2 135.2,16.6 135,16.9 C134.9,17.3 134.8,17.7 134.8,18.1 C134.8,18.6 134.9,19 135,19.4 C135.1,19.8 135.3,20.1 135.6,20.3 C135.8,20.5 136.1,20.7 136.4,20.9 C136.7,21 137,21.1 137.4,21.1 Z' id='text_1_' fill={textColor}></path>
  )
}

const logoSvg = (props) => {
  const { withText=true, textColor='#ffffff' } = props
  const logoText = withText ? logoSvgText(textColor) : null
  return (
    <svg width='142px' height='33px' viewBox='0 0 142 33'>
      <g id='eggo-text-compounded' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='head'>
          <path d='M16.2,33 C14.4,33 12.7,32.6 11.1,32 C9.5,31.3 8.1,30.4 7,29.1 C5.8,27.9 4.9,26.5 4.3,24.9 C4.1,24.3 3.9,23.7 3.7,23 L3.6,23 L3.5,22 C2.3,21.5 1.4,20.3 1.1,19.2 C0.7,17.8 0.3,15.7 0.2,13.8 C0.2,12.3 1,10.9 2.4,10.3 C3.3,9.9 4.6,9.5 6.1,9.3 C7.1,7.2 8.2,5.3 9.4,3.9 C11.5,1.4 13.8,0.1 16.2,0.1 C18.6,0.1 20.9,1.4 23,3.9 C24.2,5.3 25.3,7.1 26.2,9.3 C27.7,9.6 29,9.9 30,10.3 C31.4,10.9 32.2,12.3 32.2,13.8 C32.1,16 31.6,18.4 31.3,19.3 C31,20.5 30.1,21.7 28.9,22.1 L28.8,23.1 L28.7,23.1 C28.6,23.7 28.4,24.4 28.1,25 C27.5,26.6 26.6,28 25.4,29.2 C24.2,30.4 22.8,31.4 21.3,32.1 C19.8,32.6 18.1,33 16.2,33 L16.2,33 Z' id='Shape' fill='#FFFFFF'></path>
          <path d='M16.2,2.4 C21.9,2.4 26.5,14.6 26.5,20.3 C26.5,26 21.9,30.6 16.2,30.6 C10.5,30.6 5.9,26 5.9,20.3 C5.9,14.6 10.5,2.4 16.2,2.4 Z' id='Shape' fill='#FCFBFA'></path>
          <path d='M29.2,12.3 L25,13.8 C25,13.8 25.6,15.8 25.7,15.8 L29.9,15.3 L29.2,12.3 Z M3.2,12.3 L7.4,13.8 C7.4,13.8 6.8,15.8 6.7,15.8 L2.5,15.3 L3.2,12.3 Z' id='Shape' fill='#252526'></path>
          <path d='M11.9,11.9 C13,11.9 13.2,12.8 13.2,13 C13.3,13.6 13.4,14.4 13.5,15.2 C13.5,15.4 13.5,15.6 13.4,15.8 C13.3,15.3 13.3,14.8 13.2,14.3 C13.2,14.1 12.9,13.2 11.9,13.2 C11.3,13.2 9.2,13.3 7.2,13.6 C7.3,13.1 7.5,12.7 7.7,12.2 C9.5,12 11.2,11.9 11.9,11.9 L11.9,11.9 Z M26.5,19.8 C22.8,19.6 19.6,18.4 18.9,18 C18.3,17.7 17.6,17.2 17.4,15.8 C17.3,17.4 17.6,18.8 19,19.5 C19.1,19.6 21.9,20.9 26.4,21.2 L26.4,20.3 C26.5,20.2 26.5,20 26.5,19.8 Z M6,19.8 C9.7,19.6 12.9,18.4 13.6,18 C14.2,17.7 14.9,17.2 15.1,15.8 C15.2,17.4 14.9,18.8 13.5,19.5 C13.4,19.6 10.6,20.9 6.1,21.2 L6.1,20.3 C5.9,20.2 5.9,20 6,19.8 Z M20.5,11.9 C19.4,11.9 19.2,12.8 19.2,13 C19.1,13.6 19,14.4 18.9,15.2 C18.9,15.4 18.9,15.6 19,15.8 C19.1,15.3 19.1,14.8 19.2,14.3 C19.2,14.1 19.5,13.2 20.5,13.2 C21.1,13.2 23.2,13.3 25.2,13.6 C25.1,13.1 24.9,12.7 24.7,12.2 C22.9,12 21.1,11.9 20.5,11.9 L20.5,11.9 Z' id='Shape' fill='#E0E0E0'></path>
          <path d='M7.2,10.8 C8.2,8.4 9.4,6.2 10.7,4.7 C12.4,2.6 14.3,1.5 16.2,1.5 C18.1,1.5 19.9,2.6 21.7,4.7 C23,6.3 24.2,8.4 25.2,10.8 L25.2,10.9 L25.1,10.9 C24.7,10.9 24.5,10.8 24.1,10.8 C23,8.1 21,4.7 18.5,3.2 C17.7,2.8 17,2.5 16.2,2.5 C15.4,2.5 14.7,2.7 13.9,3.2 C11.4,4.6 9.5,8.1 8.3,10.8 C7.9,10.8 7.7,10.9 7.3,10.9 L7.2,10.8 L7.2,10.8 Z M26.6,18.6 L25.7,18.6 L25.7,18.5 C25.5,16.5 24.9,14.3 24.1,12.1 L24,11.9 L24.2,11.9 C24.5,11.9 24.8,12 25.1,12 L25.2,12 L25.2,12.1 C25.9,14.3 26.5,16.6 26.7,18.5 L26.7,18.6 L26.6,18.6 L26.6,18.6 Z' id='Shape' fill='#56555C'></path>
          <path d='M25.7,13.6 C25.5,13.1 25.4,12.6 25.2,12.1 L25.2,12 L25.1,12 C24.8,11.9 24.5,11.9 24.2,11.9 L24,11.9 L24.1,12.1 C24.3,12.6 24.4,13.1 24.6,13.6 C25.1,13.5 25.4,13.6 25.7,13.6 L25.7,13.6 Z' id='Shape' fill='#252526'></path>
          <path d='M5.8,18.4 C6,16.5 6.6,14.2 7.3,12 L7.3,11.9 L7.4,11.9 C7.7,11.9 8,11.8 8.3,11.8 L8.5,11.8 L8.4,12 C7.6,14.2 7.1,16.5 6.8,18.4 L6.8,18.5 L5.9,18.5 L5.8,18.4 L5.8,18.4 Z' id='Shape' fill='#56555C'></path>
          <path d='M7.4,12 C7.1,12.6 7,13.1 6.8,13.6 C7.3,13.5 7.5,13.5 7.9,13.5 C8.1,13 8.2,12.5 8.4,12 L8.5,11.8 L8.3,11.8 C8,11.9 7.7,11.9 7.4,12 Z' id='Shape' fill='#252526'></path>
          <path d='M16.2,31.5 C14.7,31.5 13.2,31.2 11.8,30.6 C10.4,30 9.2,29.2 8.2,28.1 C7.2,27 6.4,25.8 5.8,24.4 C5.2,23 5,21.4 5,19.8 L5,19.7 L6.1,19.7 L6.1,19.8 C6,21.3 6.3,22.6 6.8,24 C7.3,25.3 8,26.4 8.9,27.4 C9.8,28.4 11,29.2 12.2,29.7 C13.5,30.3 14.8,30.5 16.2,30.5 C17.6,30.5 19,30.2 20.2,29.7 C21.4,29.2 22.6,28.4 23.5,27.4 C24.4,26.4 25.2,25.3 25.6,24 C26.1,22.7 26.3,21.3 26.3,19.8 L26.3,19.7 L27.4,19.7 L27.4,19.8 C27.5,21.4 27.2,22.9 26.6,24.4 C26.1,25.8 25.3,27 24.2,28.1 C23.2,29.2 21.9,30 20.6,30.6 C19.2,31.2 17.7,31.5 16.2,31.5 L16.2,31.5 Z' id='Shape' fill='#56555C'></path>
          <path d='M6.1,21.2 L6.1,19.8 L5,19.8 L5,21.2 L6.1,21.2 Z M27.4,19.8 L26.4,19.8 L26.4,21.2 L27.4,21.2 L27.4,19.8 Z' id='Shape' fill='#252526'></path>
          <path d='M28,20.4 C25.7,20.4 23.6,19.9 21.6,19.4 C20.6,19.1 19.7,18.7 19,18.4 L19,18.3 C17.3,17.5 17.2,15.8 17.3,14.2 C17.3,13.8 17.2,13.3 16.8,13 C16.6,12.9 16.4,12.8 16.2,12.8 C16,12.8 15.7,12.9 15.6,13 C15.2,13.3 15.1,13.8 15.1,14.2 C15.3,15.7 15.2,17.4 13.4,18.2 C12.7,18.5 11.8,19.1 10.8,19.4 C8.8,19.9 6.7,20.4 4.4,20.4 C3.5,20.4 2.7,19.6 2.5,18.7 C2.2,17.4 1.7,15.4 1.7,13.6 C1.7,12.9 2.1,12.2 2.8,11.9 C5.2,10.8 10.1,10.4 12.2,10.4 C13,10.4 13.6,10.7 14.1,11.2 C14.8,10.9 15.5,10.7 16.2,10.7 C16.9,10.7 17.6,10.9 18.3,11.2 C18.7,10.8 19.3,10.4 20.2,10.4 C21.4,10.4 26.8,10.6 29.6,11.8 C30.3,12.1 30.7,12.8 30.7,13.5 C30.6,15.3 30.2,17.4 29.9,18.7 C29.7,19.6 28.9,20.4 28,20.4 L28,20.4 Z M20.5,12 C19.5,12 19.3,12.9 19.2,13 C19.1,13.5 19,14.3 18.9,15.2 C18.9,16 19.2,16.6 19.8,16.9 C22,17.9 24.6,18.4 27.6,18.4 C27.8,18.4 28,18.2 28.1,18 C28.4,16.9 28.8,15.2 28.8,13.6 C28.8,13.5 28.7,13.3 28.6,13.3 C26.6,12.3 22.2,12 20.5,12 L20.5,12 Z M3.7,13.2 C3.6,13.3 3.5,13.4 3.5,13.5 C3.5,15.1 3.9,16.8 4.2,17.9 C4.3,18.1 4.5,18.3 4.7,18.3 C7.8,18.3 10.3,17.8 12.5,16.8 C13.1,16.5 13.4,15.9 13.4,15.1 C13.4,14.4 13.3,13.7 13.1,12.9 C13.1,12.7 12.9,11.9 11.8,11.9 C10.9,12 6,12.2 3.7,13.2 L3.7,13.2 Z' id='Shape' fill='#252526'></path>
        </g>
        {logoText}
      </g>
    </svg>
  )
}

const Logo = (props) => {
  return (
    logoSvg(props)
  )
}

export default Logo
