const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '550px',
  tablet: '800px',
  tabletL: '1100px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(mix-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  mintablet: `(min-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

// import styled from 'styled-components';
// import { device } from './device';

// const Page = styled.div`
//   margin: auto;
//   font-family: "sans-serif";
//   text-align: center;

//   @media ${device.laptop} { 
//     max-width: 800px;
//   }

//   @media ${device.desktop} {
//     max-width: 1400px;
//   }
// `;

// import { device } from './device';

// const CardWrapper = styled.div`
//   display: flex;
//   // Mobile friendly by default
//   flex-direction: column;

//   border: 1px solid gray;
//   box-shadow: 5px 5px #ccc;
//   padding: 10px;
//   margin: 10px;

//   // Switch to rows on large devices
//   @media ${device.laptop} {
//     flex-direction: row;
//   }
// `;