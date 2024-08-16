const fontWeight = [{ regular: 400, medium: 500, semiBold: 600, bold: 700 }];
const typography = {
  htmlFontSize: 16,
  fontFamily: 'Poppins, Arial, sans-serif',
  
  h1: {
    fontWeight: fontWeight.bold, // Bold
    fontSize: '45px', // Large heading
    lineHeight: 'normal',
  },
  h2: {
    fontWeight: fontWeight.bold, // Bold
    fontSize: '40px', // Medium heading
    lineHeight: 'normal',
  },
  h3: {
    fontWeight: fontWeight.semiBold, // SemiBold
    fontSize: '30px', // Small heading
    lineHeight: 'normal',
  },
  h4: {
    fontWeight: fontWeight.semiBold, // SemiBold
    fontSize: '25px', // Smaller heading
    lineHeight: 'normal',
  },


  blgsm: {   // body large semibold
    fontWeight: fontWeight.medium, // Semibold
    fontSize: '20px', // Standard body text
    lineHeight: 'normal',
  },
  blgmd: {  // body large medium
    fontWeight: fontWeight.medium, // Medium
    fontSize: '20px', // Standard body text
    lineHeight: 'normal',
  },
  blgr : {  // body large regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: '20px', // Small body text
    lineHeight: 'normal',
  },
  bmdsm:{  // body mudium semibold
    fontWeight: fontWeight.medium, // Medium
    fontSize: '16px', // Captions or small notes
    lineHeight: 'normal',
  },
  bmdmd: { // body medium medium
    fontWeight: fontWeight.regular, // Regular
    fontSize: '16px', // Very small text
    lineHeight: 'normal',
  },
  bmdr: {  // body medium regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: '16px', // Extra small text
    lineHeight: 'normal',
  },
  bssm: {   // body small semibold
    fontWeight: fontWeight.regular, // Regular
    fontSize: '14px', // Extra small text
    lineHeight: 'normal',
  },
 bsr: {  // body small regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: '14px', // Extra small text
    lineHeight: 'normal',
  },
  bxsr: { // body extra small regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: '12px', // Extra small text
    lineHeight: 'normal',
  },
  bxsmd: { // body extra small meduim 
    fontWeight: fontWeight.regular, // Regular
    fontSize: '12px', // Extra small text
    lineHeight: 'normal',
  },
  btr: { // body tiny regular
    fontWeight: fontWeight.regular, // Regular
    fontSize: '10px', // Extra small text
    lineHeight: 'normal',
  },
  
};

export default typography;
