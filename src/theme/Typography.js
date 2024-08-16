const fontWeight = [{ regular: 400, medium: 500, semiBold: 600, bold: 700 }];
const fontSize = [{ h1: (50/5)+'rem', h2: `${30 / 16}rem` }]
console.log(fontSize);
const typography = {
  htmlFontSize: 16,
  fontFamily: 'Poppins, Arial, sans-serif',
  h1: {
    fontWeight: fontWeight.bold, // Bold
    fontSize: '50px', // Large heading
    lineHeight: '72px',
  },
  h2: {
    fontWeight: fontWeight.bold, // Bold
    fontSize: '30px', // Medium heading
    lineHeight: '72px',
  },
  h3: {
    fontWeight: fontWeight.semiBold, // SemiBold
    fontSize: '26px', // Small heading
    lineHeight: '40px',
  },
  h4: {
    fontWeight: fontWeight.semiBold, // SemiBold
    fontSize: '20px', // Smaller heading
    lineHeight: '30px',
  },
  body1: {
    fontWeight: fontWeight.medium, // Medium
    fontSize: '16px', // Standard body text
    lineHeight: '24px',
  },
  body2: {
    fontWeight: fontWeight.regular, // Regular
    fontSize: '14px', // Small body text
    lineHeight: '22px',
  },
  caption: {
    fontWeight: fontWeight.medium, // Medium
    fontSize: '12px', // Captions or small notes
    lineHeight: '20px',
  },
  overline: {
    fontWeight: fontWeight.regular, // Regular
    fontSize: '10px', // Very small text
    lineHeight: '18px',
  },
  subtitle1: {
    fontWeight: fontWeight.regular, // Regular
    fontSize: '9px', // Extra small text
    lineHeight: '20px',
  },
};

export default typography;
