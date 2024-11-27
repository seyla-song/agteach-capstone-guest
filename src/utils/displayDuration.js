const displayDuration = ({
  hours,
  minutes,
  seconds,
  hourLabel = "",
  minuteLabel = "",
  secondLabel = "",
}) => {
  let result = "";

  // console.log({ hours, minutes, seconds });

  // Handle hours
  if (hours > 0) {
    result += `${hours} ${hourLabel}`;
  }

  // Handle minutes
  if (minutes > 0) {
    if (result) result += ", "; // Add comma if hours are present
    result += `${minutes} ${minuteLabel}`;
  }

  // Handle seconds
  if (seconds > 0) {
    if (result) result += ", "; // Add "and" if hours or minutes are present
    result += `${seconds} ${secondLabel}`;
  }

  // Return the result or '0 seconds' if no duration is provided
  return result || `0 ${secondLabel}`;
};

export default displayDuration;
