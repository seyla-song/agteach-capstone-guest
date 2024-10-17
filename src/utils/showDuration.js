export const showDuration = (duration) => {
  if (duration.hours) {
    return duration.hours + 'h ' + (duration.minutes > 0 ? duration.minutes + 'min' : '');
  };

  if (duration.minutes) {
    return duration.minutes + 'min';
  };

  return 1 + 'min';
};