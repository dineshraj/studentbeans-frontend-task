export function timeDifference(current, previous) {
  const sPerMinute = 60;
  const sPerHour = sPerMinute * 60;
  const sPerDay = sPerHour * 24;
  const sPerMonth = sPerDay * 30;
  const sPerYear = sPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < sPerMinute) {
    return Math.round(elapsed/1000) + ' seconds ago';   
  } else if (elapsed < sPerHour) {
    return Math.round(elapsed/sPerMinute) + ' minutes ago';   
  } else if (elapsed < sPerDay ) {
    return Math.round(elapsed/sPerHour ) + ' hours ago';   
  } else if (elapsed < sPerMonth) {
    return Math.round(elapsed/sPerDay) + ' days ago';   
  } else if (elapsed < sPerYear) {
    return Math.round(elapsed/sPerMonth) + ' months ago';   
  } else {
    return Math.round(elapsed/sPerYear ) + ' years ago';   
  }
}
