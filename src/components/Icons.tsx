import React from 'react';

interface Props {
  name: string;
  colors: string[];
}

const Icons: React.FC<Props> = ({ name, colors }) => {
  switch (name) {
    case 'code':
      return (
        <svg width="100%" viewBox="0 0 58 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M37.6347 4.3113C37.9247 3.36871 37.3957 2.36947 36.4531 2.07944C35.5105 1.78941 34.5113 2.31842 34.2213 3.26101L19.9358 49.6887C19.6458 50.6313 20.1748 51.6305 21.1174 51.9206C22.06 52.2106 23.0592 51.6816 23.3492 50.739L37.6347 4.3113Z"
            fill="url(#paint0_linear_168_206)"
          />
          <path
            d="M17.5481 13.2375C18.2455 13.9349 18.2455 15.0655 17.5481 15.7629L6.31101 27L17.5481 38.2371C18.2455 38.9344 18.2455 40.065 17.5481 40.7624C16.8508 41.4597 15.7201 41.4597 15.0228 40.7624L2.52301 28.2626C1.82566 27.5653 1.82566 26.4346 2.52301 25.7373L15.0228 13.2375C15.7201 12.5402 16.8508 12.5402 17.5481 13.2375Z"
            fill="url(#paint1_linear_168_206)"
          />
          <path
            d="M40.0223 13.2375C39.325 13.9349 39.325 15.0655 40.0223 15.7629L51.2594 27L40.0223 38.2371C39.325 38.9344 39.325 40.065 40.0223 40.7624C40.7197 41.4597 41.8503 41.4597 42.5476 40.7624L55.0474 28.2626C55.7448 27.5653 55.7448 26.4346 55.0474 25.7373L42.5476 13.2375C41.8503 12.5402 40.7197 12.5402 40.0223 13.2375Z"
            fill="url(#paint2_linear_168_206)"
          />
          <path
            d="M37.6347 4.3113C37.9247 3.36871 37.3957 2.36947 36.4531 2.07944C35.5105 1.78941 34.5113 2.31842 34.2213 3.26101L19.9358 49.6887C19.6458 50.6313 20.1748 51.6305 21.1174 51.9206C22.06 52.2106 23.0592 51.6816 23.3492 50.739L37.6347 4.3113Z"
            stroke="url(#paint3_linear_168_206)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5481 13.2375C18.2455 13.9349 18.2455 15.0655 17.5481 15.7629L6.31101 27L17.5481 38.2371C18.2455 38.9344 18.2455 40.065 17.5481 40.7624C16.8508 41.4597 15.7201 41.4597 15.0228 40.7624L2.52301 28.2626C1.82566 27.5653 1.82566 26.4346 2.52301 25.7373L15.0228 13.2375C15.7201 12.5402 16.8508 12.5402 17.5481 13.2375Z"
            stroke="url(#paint4_linear_168_206)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.0223 13.2375C39.325 13.9349 39.325 15.0655 40.0223 15.7629L51.2594 27L40.0223 38.2371C39.325 38.9344 39.325 40.065 40.0223 40.7624C40.7197 41.4597 41.8503 41.4597 42.5476 40.7624L55.0474 28.2626C55.7448 27.5653 55.7448 26.4346 55.0474 25.7373L42.5476 13.2375C41.8503 12.5402 40.7197 12.5402 40.0223 13.2375Z"
            stroke="url(#paint5_linear_168_206)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="paint0_linear_168_206" x1="28.7852" y1="2" x2="28.7852" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint1_linear_168_206" x1="28.7852" y1="2" x2="28.7852" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint2_linear_168_206" x1="28.7852" y1="2" x2="28.7852" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint3_linear_168_206" x1="28.7852" y1="2" x2="28.7852" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint4_linear_168_206" x1="28.7852" y1="2" x2="28.7852" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint5_linear_168_206" x1="28.7852" y1="2" x2="28.7852" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'layout':
      return (
        <svg width="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.625 4.125V29.125H4.125L4.125 4.125H16.625ZM4.125 1C2.39911 1 1 2.39911 1 4.125V29.125C1 30.8509 2.39911 32.25 4.125 32.25H16.625C18.3509 32.25 19.75 30.8509 19.75 29.125V4.125C19.75 2.39911 18.3509 1 16.625 1H4.125Z"
            fill="url(#paint0_linear_168_227)"
          />
          <path
            d="M44.75 7.25V22.875H29.125V7.25H44.75ZM29.125 4.125C27.3991 4.125 26 5.52411 26 7.25V22.875C26 24.6009 27.3991 26 29.125 26H44.75C46.4759 26 47.875 24.6009 47.875 22.875V7.25C47.875 5.52411 46.4759 4.125 44.75 4.125H29.125Z"
            fill="url(#paint1_linear_168_227)"
          />
          <path
            d="M16.625 41.625V47.875H10.375V41.625H16.625ZM10.375 38.5C8.64911 38.5 7.25 39.8991 7.25 41.625V47.875C7.25 49.6009 8.64911 51 10.375 51H16.625C18.3509 51 19.75 49.6009 19.75 47.875V41.625C19.75 39.8991 18.3509 38.5 16.625 38.5H10.375Z"
            fill="url(#paint2_linear_168_227)"
          />
          <path
            d="M47.875 35.375V41.625H29.125V35.375H47.875ZM29.125 32.25C27.3991 32.25 26 33.6491 26 35.375V41.625C26 43.3509 27.3991 44.75 29.125 44.75H47.875C49.6009 44.75 51 43.3509 51 41.625V35.375C51 33.6491 49.6009 32.25 47.875 32.25H29.125Z"
            fill="url(#paint3_linear_168_227)"
          />
          <path
            d="M16.625 4.125V29.125H4.125L4.125 4.125H16.625ZM4.125 1C2.39911 1 1 2.39911 1 4.125V29.125C1 30.8509 2.39911 32.25 4.125 32.25H16.625C18.3509 32.25 19.75 30.8509 19.75 29.125V4.125C19.75 2.39911 18.3509 1 16.625 1H4.125Z"
            stroke="url(#paint4_linear_168_227)"
            strokeWidth="2"
          />
          <path
            d="M44.75 7.25V22.875H29.125V7.25H44.75ZM29.125 4.125C27.3991 4.125 26 5.52411 26 7.25V22.875C26 24.6009 27.3991 26 29.125 26H44.75C46.4759 26 47.875 24.6009 47.875 22.875V7.25C47.875 5.52411 46.4759 4.125 44.75 4.125H29.125Z"
            stroke="url(#paint5_linear_168_227)"
            strokeWidth="2"
          />
          <path
            d="M16.625 41.625V47.875H10.375V41.625H16.625ZM10.375 38.5C8.64911 38.5 7.25 39.8991 7.25 41.625V47.875C7.25 49.6009 8.64911 51 10.375 51H16.625C18.3509 51 19.75 49.6009 19.75 47.875V41.625C19.75 39.8991 18.3509 38.5 16.625 38.5H10.375Z"
            stroke="url(#paint6_linear_168_227)"
            strokeWidth="2"
          />
          <path
            d="M47.875 35.375V41.625H29.125V35.375H47.875ZM29.125 32.25C27.3991 32.25 26 33.6491 26 35.375V41.625C26 43.3509 27.3991 44.75 29.125 44.75H47.875C49.6009 44.75 51 43.3509 51 41.625V35.375C51 33.6491 49.6009 32.25 47.875 32.25H29.125Z"
            stroke="url(#paint7_linear_168_227)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="paint0_linear_168_227" x1="26" y1="1" x2="26" y2="51" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint1_linear_168_227" x1="26" y1="1" x2="26" y2="51" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint2_linear_168_227" x1="26" y1="1" x2="26" y2="51" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint3_linear_168_227" x1="26" y1="1" x2="26" y2="51" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint4_linear_168_227" x1="26" y1="1" x2="26" y2="51" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint5_linear_168_227" x1="26" y1="1" x2="26" y2="51" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint6_linear_168_227" x1="26" y1="1" x2="26" y2="51" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint7_linear_168_227" x1="26" y1="1" x2="26" y2="51" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'device':
      return (
        <svg width="100%" viewBox="0 0 65 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.3761 39.2319H3.98039C3.43894 39.2319 3 38.7929 3 38.2515V3.98039C3 3.43893 3.43894 3 3.98039 3H55.7805C56.3219 3 56.7609 3.43894 56.7609 3.98039V9.28019M41.3317 18.7147V52.0196C41.3317 52.5611 41.7707 53 42.3121 53H60.8431C61.3846 53 61.8235 52.5611 61.8235 52.0196V18.7147C61.8235 18.1732 61.3846 17.7343 60.8431 17.7343H42.3121C41.7707 17.7343 41.3317 18.1732 41.3317 18.7147Z"
            stroke="url(#paint0_linear_168_220)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="paint0_linear_168_220" x1="32.4118" y1="3" x2="32.4118" y2="53" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'tech':
      return (
        <svg width="100%" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44.1229 31.759L49.4836 34.4394C50.1721 34.7836 50.1721 35.7661 49.4837 36.1103L25.8356 47.9344C25.3096 48.1973 24.6906 48.1973 24.1646 47.9344L0.516566 36.1103C-0.171903 35.7661 -0.171904 34.7836 0.516565 34.4394L5.87731 31.759L22.4937 40.0672C24.0715 40.8561 25.9287 40.8561 27.5065 40.0672L44.1229 31.759Z"
            fill="url(#paint0_linear_182_239)"
          />
          <path
            d="M24.1644 0.197229C24.6904 -0.0657427 25.3094 -0.0657431 25.8354 0.197229L49.4834 12.0213C50.1719 12.3655 50.1719 13.348 49.4834 13.6922L25.8354 25.5162C25.3094 25.7792 24.6904 25.7792 24.1644 25.5162L0.516352 13.6922C-0.172116 13.348 -0.172118 12.3655 0.516351 12.0213L24.1644 0.197229Z"
            fill="url(#paint1_linear_182_239)"
          />
          <path
            d="M44.1229 20.5499L49.4836 23.2303C50.1721 23.5745 50.1721 24.557 49.4837 24.9013L25.8356 36.7253C25.3096 36.9883 24.6906 36.9883 24.1646 36.7253L0.516566 24.9013C-0.171903 24.557 -0.171904 23.5746 0.516565 23.2303L5.87731 20.5499L22.4937 28.8581C24.0715 29.647 25.9287 29.647 27.5065 28.8581L44.1229 20.5499Z"
            fill="url(#paint2_linear_182_239)"
          />
          <defs>
            <linearGradient id="paint0_linear_182_239" x1="25" y1="0" x2="25" y2="48.1316" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint1_linear_182_239" x1="25" y1="0" x2="25" y2="48.1316" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
            <linearGradient id="paint2_linear_182_239" x1="25" y1="0" x2="25" y2="48.1316" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
          </defs>
        </svg>
      );
  }
};

export default Icons;
