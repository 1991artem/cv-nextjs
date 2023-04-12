function Rectangle() {
  return ( 
    <svg 
        className="rectangle"
        width="58"
        height="182"
        viewBox="0 0 58 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_105_393)">
          <path
            d="M50 87.0018C50 49.9877 29.8901 17.6705 0 0.380001V173.624C29.8901 156.333 50 124.016 50 87.0018Z"
            fill="#6996DB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_105_393"
            x="0"
            y="0.380001"
            width="58"
            height="181.244"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.411765 0 0 0 0 0.588235 0 0 0 0 0.858824 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_105_393"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_105_393"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
   );
}

export default Rectangle;