const displayDuration = ({ hours, minutes }) => {
  let result = '';

  if (hours > 0) {
      result += `${hours} hour${hours !== 1 ? 's' : ''}`; // Handle pluralization for hours
  }

  if (minutes > 0) {
      if (result) result += ' and '; // Add "and" if hours are present
      result += `${minutes} minute${minutes !== 1 ? 's' : ''}`; // Handle pluralization for minutes
  }

  return result || '0 minutes'; // Return '0 minutes' if no duration is provided
};

export default displayDuration;