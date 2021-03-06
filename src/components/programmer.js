import React, {useState} from "react";
import {useSpring, animated as a} from 'react-spring';

function Programmer() {
  const [hover, setHover] = useState(false);
  const enter = useSpring({
    from: {width:'1%', opacity:0},
    opacity:1,
    width: !hover ? '30%' : '35%',
    config: {duration:3000},
  })
  const leftHair = useSpring({
    fill: !hover ? '#ffd15d' : '#994d00',
    config: {duration:3000},
    // r: !hover ? '7.794' : '3.5'
  })
  const rightHair = useSpring({
    fill: !hover ? '#f9b54c' : '#804000',
    config: {duration: 3000}
  })
  const leftEye = useSpring({
    fill: !hover ? '#25a7da' : '#59595b',
    config: {duration: 3000}
  })
  const rightEye = useSpring({
    fill: !hover ? '#2196c4' : '#272525',
    config: {duration: 3000}
  })
  const leftOuterPhone = useSpring({
    fill: !hover ? '#e6f3ff': '#262626',
    transform: !hover ? 'translate(50px,50px)' : 'translate(0, 0)',
    config: {duration: 3000}
  })
  const rightOuterPhone = useSpring({
    fill: !hover ? '#cfdbe6': '#1a1a1a',
    transform: !hover ? 'translate(50px,50px)' : 'translate(0, 0)',
    config: {duration: 3000}
  })
  const screenShift = useSpring({
    transform: !hover ? 'translate(50px,50px)' : 'translate(0, 0)',
    config: {duration: 3000},
    from: {transform:'translate(50px, 50px)'}
  })
  return (
    <a.svg xmlns="http://www.w3.org/2000/svg" width='35%' viewBox="0 0 512 512" style={enter} className='program-icon' onClick={() => setHover(!hover)}>
      <circle cx="256" cy="256" r="256" fill="#324a5e" className='mainBackground'></circle>
      <path
        className="leftBottomShadow"
        fill="#2b3b4e"
        d="M507.452 304.18L315.077 111.802 195.044 215.28l-38.36 30.306 43.458 43.458-4.218 3.444 63.702 63.702 118.4 124.912c66.276-36.003 114.859-100.434 129.426-176.922z"
      ></path>
      <path
        className='leftNeck'
        fill="#fed8b2"
        d="M278.952 319.538v-27.822h-50.176v27.822c0 2.22-1.8 4.02-4.02 4.02H190.18v96.011h127.37v-96.011h-34.576a4.02 4.02 0 01-4.022-4.02z"
      ></path>
      <path
        className='rightNeck'
        fill="#eabe96"
        d="M317.549 323.558h-34.576a4.02 4.02 0 01-4.02-4.02v-27.822h-25.248v127.853h63.847v-96.011h-.003z"
      ></path>
      <circle cx="172.597" cy="233.417" r="20.052" fill="#fed8b2" className='leftEar'></circle>
      <circle cx="335.127" cy="233.417" r="20.052" fill="#eabe96" className='rightEar'></circle>
      <path
        className='leftFace'
        fill="#f4e3c3"
        d="M256.122 316.926h-4.518c-41.796 0-75.678-33.882-75.678-75.678v-69.096c0-41.796 33.882-75.678 75.678-75.678h4.518c41.796 0 75.678 33.882 75.678 75.678v69.096c0 41.797-33.882 75.678-75.678 75.678z"
      ></path>
      <path
        className='rightFace'
        fill="#fed8b2"
        d="M256.122 96.475h-2.42v220.451h2.42c41.796 0 75.678-33.882 75.678-75.678v-69.096c0-41.795-33.882-75.677-75.678-75.677z"
      ></path>
      <a.path
        className='leftHair'
        style={leftHair}
        fill="#ffd15d"
        d="M323.593 122.051c-14.862-21.171-39.445-35.023-67.277-35.023h-4.906c-45.378 0-82.165 36.786-82.165 82.165v64.231h12.062v-41.762c-.002 0-.005-20.994-.007-20.994 36.605-3.718 72.597 10.095 104.145-5.677 11.352 13.036 24.462 24.678 38.934 34.121v34.311h14.102v-64.231c-.001-17.547-5.517-33.795-14.888-47.141z"
      ></a.path>
      <a.path
        style={rightHair}
        className='rightHair'
        fill="#f9b54c"
        d="M323.593 122.049c-14.862-21.171-39.445-35.023-67.277-35.023h-2.613v85.561c10.955-.515 21.58-2.517 31.742-7.597 11.352 13.036 24.462 24.678 38.934 34.121v34.311h14.102v-64.231c-.001-17.546-5.517-33.794-14.888-47.142z"
      ></a.path>
      <a.circle cx="217.126" cy="224.521" r="7.794" fill="#59595b" className='leftEye' style={leftEye}></a.circle>
      <a.circle cx="290.599" cy="224.521" r="7.794" fill="#272525" className='rightEye' style={rightEye}></a.circle>
      <path
        className='leftMouth'
        fill="#fd8469"
        d="M253.862 288.39c-14.043 0-25.464-11.423-25.464-25.464 0-2.381 1.929-4.31 4.31-4.31s4.31 1.929 4.31 4.31c0 9.288 7.558 16.844 16.844 16.844 9.287 0 16.844-7.558 16.844-16.844 0-2.381 1.929-4.31 4.31-4.31s4.31 1.929 4.31 4.31c.002 14.042-11.421 25.464-25.464 25.464z"
      ></path>
      <path
        className='rightMouth'
        fill="#fc6f58"
        d="M275.018 258.617a4.31 4.31 0 00-4.31 4.31c0 9.288-7.558 16.844-16.844 16.844-.053 0-.107-.007-.16-.009v8.62c.053 0 .105.009.16.009 14.043 0 25.464-11.423 25.464-25.464a4.31 4.31 0 00-4.31-4.31z"
      ></path>
      <path
        className='leftShirt'
        fill="#4cdbc4"
        d="M323.017 323.558H296.32c0 23.449-19.01 42.456-42.456 42.456s-42.456-19.01-42.456-42.456h-26.696c-32.153 0-58.218 26.065-58.218 58.218v95.075C164.486 499.181 208.743 512 256 512c45.496 0 88.211-11.883 125.235-32.692v-97.532c0-32.152-26.066-58.218-58.218-58.218z"
      ></path>
      <path
        className='rightShirt'
        fill="#42c6ac"
        d="M323.017 323.558H296.32c0 23.449-19.01 42.456-42.456 42.456l-.16-.003V511.96c.767.007 1.529.04 2.298.04 45.496 0 88.211-11.883 125.235-32.692v-97.532c-.002-32.152-26.068-58.218-58.22-58.218z"
      ></path>
      <a.path
        className='leftOuterPhone'
        style={leftOuterPhone}
        fill="#e6f3ff"
        d="M402.525 433.274h-58.02c-7.304 0-13.226-5.922-13.226-13.226V305.712c0-7.304 5.922-13.226 13.226-13.226h58.021c7.304 0 13.226 5.922 13.226 13.226v114.336c-.001 7.306-5.923 13.226-13.227 13.226z"
      ></a.path>
      <a.path
        style={rightOuterPhone}
        className='rightOuterPhone'
        fill="#cfdbe6"
        d="M402.525 292.49h-28.581v140.786h28.581c7.304 0 13.226-5.922 13.226-13.226V305.714c0-7.304-5.922-13.224-13.226-13.224z"
      ></a.path>
      <path fill="#b5f1f4" style={screenShift} className='leftInnerPhone' d="M335.127 311.682h76.791v102.383h-76.791z"></path>
      <path fill="#84dbff" style={screenShift} className='rightInnerPhone' d="M373.95 311.682h37.96v102.383h-37.96z"></path>
      <path
        className='leftGlasses'
        fill="#808183"
        d="M291.978 194.772c-15.276 0-27.915 11.348-30.02 26.052H245.77c-2.103-14.703-14.746-26.052-30.022-26.052-16.743 0-30.363 13.619-30.363 30.361s13.621 30.363 30.363 30.363c15.276 0 27.917-11.35 30.022-26.053h16.187c2.103 14.703 14.745 26.053 30.02 26.053 16.743 0 30.363-13.621 30.363-30.363s-13.62-30.361-30.362-30.361zm-76.229 52.107c-11.99 0-21.744-9.754-21.744-21.744 0-11.988 9.754-21.742 21.744-21.742s21.744 9.754 21.744 21.742c-.001 11.99-9.755 21.744-21.744 21.744zm76.229 0c-11.988 0-21.742-9.754-21.742-21.744 0-11.988 9.754-21.742 21.742-21.742 11.99 0 21.744 9.754 21.744 21.742 0 11.99-9.754 21.744-21.744 21.744z"
      ></path>
      <path
        className='rightGlasses'
        fill="#59595b"
        d="M291.978 194.772c-15.276 0-27.915 11.348-30.02 26.052h-8.254v8.62h8.254c2.103 14.703 14.745 26.053 30.02 26.053 16.743 0 30.363-13.621 30.363-30.363s-13.621-30.362-30.363-30.362zm0 52.107c-11.988 0-21.742-9.754-21.742-21.744 0-11.988 9.754-21.742 21.742-21.742 11.99 0 21.744 9.754 21.744 21.742 0 11.99-9.754 21.744-21.744 21.744z"
      ></path>
      <path
        className='rightArrow'
        fill="#00a49a"
        d="M278.952 466.51a6.875 6.875 0 01-4.875-2.02 6.891 6.891 0 010-9.75l26-26.003-26-26.002a6.891 6.891 0 010-9.75 6.891 6.891 0 019.75 0l30.877 30.877a6.891 6.891 0 010 9.75l-30.877 30.879a6.87 6.87 0 01-4.875 2.019z"
      ></path>
      <path
        className='leftArrow'
        fill="#1ea8a4"
        d="M211.406 466.51a6.871 6.871 0 01-4.875-2.02l-30.879-30.879a6.897 6.897 0 01-2.02-4.875c0-1.827.727-3.582 2.02-4.875l30.879-30.877a6.891 6.891 0 019.75 0 6.891 6.891 0 010 9.75l-26.002 26.002 26.002 26.003a6.891 6.891 0 010 9.75 6.862 6.862 0 01-4.875 2.021zm22.192-2.576a6.895 6.895 0 01-6.455-9.317l21.226-56.601a6.892 6.892 0 018.876-4.036 6.895 6.895 0 014.036 8.876l-21.226 56.601a6.892 6.892 0 01-6.457 4.477z"
      ></path>
      <path
        className='leftSlashPiece'
        fill="#00a49a"
        d="M257.248 393.98c-1.176-.441-2.389-.512-3.546-.319v29.41l7.58-20.215a6.891 6.891 0 00-4.034-8.876z"
      ></path>
    </a.svg>
  );
}

export default Programmer;
