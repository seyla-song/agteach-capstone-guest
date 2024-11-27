export const showDuration = (duration, min="", hour="") => {
  if (duration.hours) {
    return duration.hours + hour + (duration.minutes > 0 ? duration.minutes + min : '');
  };

  if (duration.minutes) {
    return duration.minutes + min;
  };

  return 1 + min;
};