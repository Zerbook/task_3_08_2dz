export const formatTime = (inputDate) => {
  const date = new Date(inputDate);

  const moscowOffset = 3 * 60 * 60 * 1000;
  const moscowTime = new Date(date.getTime() + moscowOffset);

  const day = String(moscowTime.getUTCDate()).padStart(2, "0");
  const month = String(moscowTime.getUTCMonth() + 1).padStart(2, "0");
  const year = moscowTime.getUTCFullYear();

  const hours = String(moscowTime.getUTCHours()).padStart(2, "0");
  const minutes = String(moscowTime.getUTCMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}:${minutes}`;
};
