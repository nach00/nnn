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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
      ></path>
    </svg>
  )
}

export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
      ></path>
    </svg>
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
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  )
}
