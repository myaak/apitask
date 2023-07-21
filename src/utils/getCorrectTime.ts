export function getTimeSincePostPublication(timestamp: number) {
  const now = new Date();
  const timeDifference = Number(now) - timestamp * 1000; // milliseconds

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference < minute) {
    return "just now";
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} minute${getCorrectEnding(minutesAgo)} ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} hour${getCorrectEnding(hoursAgo)} ago`;
  } else if (timeDifference < month) {
    const daysAgo = Math.floor(timeDifference / day);
    return `${daysAgo} day${getCorrectEnding(daysAgo)} ago`;
  } else if (timeDifference < year) {
    const monthsAgo = Math.floor(timeDifference / month);
    return `${monthsAgo} month${getCorrectEnding(monthsAgo)} ago`;
  } else {
    const yearsAgo = Math.floor(timeDifference / year);
    return `${yearsAgo} year${getCorrectEnding(yearsAgo)} ago`;
  }
}

function getCorrectEnding(value: number) {
  if (value === 1) {
    return "";
  } else {
    return "s";
  }
}
