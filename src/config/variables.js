import "../assets/fonts/fonts.css";

export const rem = (pxValue) => {
  const ratio = 16;
  return pxValue / ratio + "rem";
};

// fonts variable
export const groldBlack = "grold_roundedblack";
export const groldBlackI = "grold_roundedblack_italic";
export const groldBold = "grold_roundedbold";
export const groldBoldI = "grold_roundedbold_italic";
export const groldXBlack = "grold_roundedextrablack";
export const groldXBlackI = "grold_roundedXBlkIt";
export const groldXBold = "grold_roundedextrabold";
export const groldXBoldI = "grold_roundedextrabold_italic";
export const groldXLight = "grold_roundedextralight";
export const groldXLightI = "grold_roundedXLtIt";
export const groldRegularI = "grold_rounded_regularitalic";
export const groldLight = "grold_roundedlight";
export const groldLightI = "grold_roundedlight_italic";
export const groldMedium = "grold_roundedmedium";
export const groldMediumI = "grold_roundedmedium_italic";
export const groldRegular = "grold_rounded_regularregular";
export const groldSLight = "grold_roundedsemilight";
export const groldSLightI = "grold_roundedsemilight_italic";
export const groldThin = "grold_roundedthin";
export const groldThinI = "grold_roundedthin_italic";

// color variables
export const primary = "#71C7E5";
export const secondary = "#F1CB30";
export const dblack = "#211915";
export const white = "#fff";
export const grey = "#888888";

// site transition
export const SiteTransition = "all 0.3s ease";

export const font = (
  fsize = null,
  lheight = null,
  color = null,
  ffamily = groldSLight
) => {
  return `
    font-size : ${fsize};
    line-height : ${lheight};
    color : ${color};
    font-family : ${ffamily};
  `;
};

export const customScroll = () => `
  &::-webkit-scrollbar {
    width: ${rem(4)};
    height: ${rem(4)};
  }
  &::-webkit-scrollbar-thumb {
    background-color: #9ba2b0;
    border-radius: ${rem(2)};
  }
`;
