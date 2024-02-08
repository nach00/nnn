import React from 'react'
import type { SVGProps } from 'react'
import { Stack } from 'tamagui'

export function UXUIDesign(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M224 72h-16v-8a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v96a24 24 0 0 0 24 24h112v8a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V96a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-96 16a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m80-96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"
      ></path>
    </svg>
  )
}

export function DesignSystem(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1280 128h768v1920H0V37l1280 1280zM128 1920h1573L128 347zm1627-128l128 128h37V256h-512v128h256v128h-256v128h256v128h-256v128h384v128h-384v128h256v128h-256v128h256v128h-165l128 128h165v128zM384 1061l603 603H384zm128 310v165h165z"
      ></path>
    </svg>
  )
}

export function WebDevelopment(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 896q52 0 99-20t81-55t55-81t21-100q0-71-3-142t4-138t32-131t79-117q54-54 125-83T768 0v128q-53 0-99 20t-81 55t-55 82t-21 99q0 56 2 110t1 107t-10 102t-27 95t-52 86t-85 76q52 35 85 76t52 86t27 94t9 102t0 107t-2 111q0 53 20 99t55 81t81 55t100 21v128q-76 0-147-29t-125-83q-54-54-78-117t-32-130t-5-139t3-142q0-52-20-99t-55-81t-82-55t-99-21zM1280 0q76 0 147 29t125 83q54 54 78 117t32 130t5 139t-3 142q0 53 20 99t55 81t81 55t100 21v128q-53 0-99 20t-81 55t-55 82t-21 99q0 71 3 142t-4 138t-32 131t-79 117q-54 54-125 83t-147 29v-128q52 0 99-20t81-55t55-81t21-100q0-56-2-110t-1-107t10-102t27-95t52-86t85-76q-52-35-85-76t-52-86t-27-94t-9-102t0-107t2-111q0-52-20-99t-55-81t-82-55t-99-21z"
      ></path>
    </svg>
  )
}

export function Strategy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M68 152a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 56a20 20 0 1 1 20-20a20 20 0 0 1-20 20M34.34 106.34L48.69 92L34.34 77.66a8 8 0 0 1 11.32-11.32L60 80.69l14.34-14.35a8 8 0 0 1 11.32 11.32L71.31 92l14.35 14.34a8 8 0 0 1-11.32 11.32L60 103.31l-14.34 14.35a8 8 0 0 1-11.32-11.32m187.32 96a8 8 0 0 1-11.32 11.32L196 199.31l-14.34 14.35a8 8 0 0 1-11.32-11.32L184.69 188l-14.35-14.34a8 8 0 0 1 11.32-11.32L196 176.69l14.34-14.35a8 8 0 0 1 11.32 11.32L207.31 188Zm-45.19-89.51c-6.18 22.33-25.32 41.63-46.53 46.93a8.13 8.13 0 0 1-2 .24a8 8 0 0 1-1.93-15.76c15.63-3.91 30.35-18.91 35-35.68c3.19-11.5 3.22-29-14.71-46.9l-2.3-2.35V80a8 8 0 0 1-16 0V40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16h-20.69l2.35 2.34c18.24 18.25 24.92 40.44 18.81 62.49"
      ></path>
    </svg>
  )
}

export function Email(props: SVGProps<SVGSVGElement>) {
  return (
    <Stack animation="bouncy" hoverStyle={{ scale: 0.925 }} pressStyle={{ scale: 0.875 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        viewBox="0 0 20 20"
        {...props}
      >
        <path
          fill="currentColor"
          d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5m-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07"
        ></path>
      </svg>
    </Stack>
  )
}

export function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <Stack animation="bouncy" hoverStyle={{ scale: 0.925 }} pressStyle={{ scale: 0.875 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        viewBox="0 0 128 128"
        {...props}
      >
        <path
          fill="#0076b2"
          d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
        ></path>
        <path
          fill="#fff"
          d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
        ></path>
      </svg>
    </Stack>
  )
}
export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <Stack animation="bouncy" hoverStyle={{ scale: 0.925 }} pressStyle={{ scale: 0.875 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        viewBox="0 0 256 256"
        {...props}
      >
        <g fill="none">
          <rect width={256} height={256} fill="url(#skillIconsInstagram0)" rx={60}></rect>
          <rect width={256} height={256} fill="url(#skillIconsInstagram1)" rx={60}></rect>
          <path
            fill="#fff"
            d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
          ></path>
          <defs>
            <radialGradient
              id="skillIconsInstagram0"
              cx={0}
              cy={0}
              r={1}
              gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FD5"></stop>
              <stop offset={0.1} stopColor="#FD5"></stop>
              <stop offset={0.5} stopColor="#FF543E"></stop>
              <stop offset={1} stopColor="#C837AB"></stop>
            </radialGradient>
            <radialGradient
              id="skillIconsInstagram1"
              cx={0}
              cy={0}
              r={1}
              gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3771C8"></stop>
              <stop offset={0.128} stopColor="#3771C8"></stop>
              <stop offset={1} stopColor="#60F" stopOpacity={0}></stop>
            </radialGradient>
          </defs>
        </g>
      </svg>
    </Stack>
  )
}

export function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 256a256 256 0 1 0 512 0a256 256 0 1 0-512 0m241 121c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87l-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9z"
      ></path>
    </svg>
  )
}

export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 512 512"
      {...props}
    >
      <defs>
        <linearGradient
          id="meteoconsStarFill0"
          x1={187.9}
          x2={324.1}
          y1={138.1}
          y2={373.9}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fcd966"></stop>
          <stop offset={0.5} stopColor="#fcd966"></stop>
          <stop offset={1} stopColor="#fccd34"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#meteoconsStarFill0)"
        stroke="#fcd34d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m105.7 263.5l107.5 29.9a7.9 7.9 0 0 1 5.4 5.4l29.9 107.5a7.8 7.8 0 0 0 15 0l29.9-107.5a7.9 7.9 0 0 1 5.4-5.4l107.5-29.9a7.8 7.8 0 0 0 0-15l-107.5-29.9a7.9 7.9 0 0 1-5.4-5.4l-29.9-107.5a7.8 7.8 0 0 0-15 0l-29.9 107.5a7.9 7.9 0 0 1-5.4 5.4l-107.5 29.9a7.8 7.8 0 0 0 0 15Z"
      >
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur="6s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="rotate"
          values="-15 256 256; 15 256 256; -15 256 256"
        ></animateTransform>
        <animate attributeName="opacity" dur="6s" values="1; .75; 1; .75; 1; .75; 1"></animate>
      </path>
    </svg>
  )
}

export function Pin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.17 83.41 134.55a8 8 0 0 0 9.18 0C136 236.17 216 179.3 216 104a88.1 88.1 0 0 0-88-88m0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32"
      ></path>
    </svg>
  )
}

export function Phone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0"
      ></path>
    </svg>
  )
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path>
    </svg>
  )
}

export function Meeting(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z"
      ></path>
    </svg>
  )
}

export function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="none">
        <rect width={256} height={256} fill="#242938" rx={60}></rect>
        <path
          fill="#fff"
          d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"
        ></path>
      </g>
    </svg>
  )
}
