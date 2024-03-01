export const convertDate = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.toLocaleString("default", { month: "short" });
  const endMonth = end.toLocaleString("default", { month: "short" });

  if (startMonth === endMonth) {
    return `${startMonth} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
  } else {
    return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${start.getFullYear()}`;
  }
};

export const getDates = () => {
  let today = new Date();
  let todayFormatted = today.toISOString().slice(0, 10);

  let fiveDaysLater = new Date();
  fiveDaysLater.setDate(fiveDaysLater.getDate() + 5);
  let fiveDaysLaterFormatted = fiveDaysLater.toISOString().slice(0, 10);

  return [todayFormatted, fiveDaysLaterFormatted];
};
