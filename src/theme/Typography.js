const fontWeight = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

const fontSize = {
  h1: `${45 / 16}rem`,
  h2: `${40 / 16}rem`,
  h3: `${30 / 16}rem`,
  h4: `${25 / 16}rem`,
  blg: `${20 / 16}rem`,
  bmd: `${16 / 16}rem`,
  bs: `${14 / 16}rem`,
  bxs: `${12 / 16}rem`,
  bt: `${10 / 16}rem`,
};

const typography = {
  htmlFontSize: 16,
  fontFamily: "Poppins, Arial, sans-serif",

  h1: {
    fontWeight: fontWeight.bold, // Bold
    fontSize: fontSize.h1, // Large heading
    lineHeight: "normal",
  },
  h2: {
    fontWeight: fontWeight.bold, // Bold
    fontSize: fontSize.h2, // Medium heading
    lineHeight: "normal",
  },
  h3: {
    fontWeight: fontWeight.semiBold, // SemiBold
    fontSize: fontSize.h3, // Small heading
    lineHeight: "normal",
  },
  h4: {
    fontWeight: fontWeight.semiBold, // SemiBold
    fontSize: fontSize.h4, // Smaller heading
    lineHeight: "normal",
  },

  blgsm: {
    // body large semibold
    fontWeight: fontWeight.semiBold, // Semibold
    fontSize: fontSize.blg, // Standard body text
    lineHeight: "normal",
  },
  blgmd: {
    // body large medium
    fontWeight: fontWeight.medium, // Medium
    fontSize: fontSize.blg, // Standard body text
    lineHeight: "normal",
  },
  blgr: {
    // body large regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: fontSize.blg, // Small body text
    lineHeight: "normal",
  },
  bmdsm: {
    // body mudium semibold
    fontWeight: fontWeight.semiBold, // Medium
    fontSize: fontSize.bmd, // Captions or small notes
    lineHeight: "normal",
  },
  bmdmd: {
    // body medium medium
    fontWeight: fontWeight.medium, // Regular
    fontSize: fontSize.bmd, // Very small text
    lineHeight: "normal",
  },
  bmdr: {
    // body medium regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: fontSize.bmd, // Extra small text
    lineHeight: "normal",
  },
  bssm: {
    // body small semibold
    fontWeight: fontWeight.semiBold, // Regular
    fontSize: fontSize.bs, // Extra small text
    lineHeight: "normal",
  },
  bsr: {
    // body small regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: fontSize.bs, // Extra small text
    lineHeight: "normal",
  },
  bxsr: {
    // body extra small regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: fontSize.bxs, // Extra small text
    lineHeight: "normal",
  },
  bxsmd: {
    // body extra small meduim
    fontWeight: fontWeight.medium, // Regular
    fontSize: fontSize.bxs, // Extra small text
    lineHeight: "normal",
  },
  btr: {
    // body tiny regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: fontSize.bt, // Extra small text
    lineHeight: "normal",
  },
};

export default typography;
