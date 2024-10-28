const displayDuration = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  let result = '';

  // Handle hours
  if (hours > 0) {
    result += `${hours} hour${hours !== 1 ? 's' : ''}`;
  }

  // Handle minutes
  if (minutes > 0) {
    if (result) result += ', '; // Add comma if hours are present
    result += `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }

  // Handle seconds
  if (seconds > 0) {
    if (result) result += ', '; // Add "and" if hours or minutes are present
    result += `${seconds} second${seconds !== 1 ? 's' : ''}`;
  }

  // Return the result or '0 seconds' if no duration is provided
  return result || '0 seconds';
};

export default displayDuration;