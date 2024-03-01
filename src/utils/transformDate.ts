import moment from "moment-timezone";

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

export const getDaysOfWeekInRange = (startDate: string, endDate: string) => {
  if (!startDate || !endDate) {
    return []; // Return an empty array if either startDate or endDate is missing
  }

  const start = moment(startDate);
  const end = moment(endDate);

  const daysOfWeekInRange = [];

  // Start from the provided start date and loop until the end date (inclusive)
  while (start.isSameOrBefore(end)) {
    // Get the day of the week for the current date and push it to the array
    daysOfWeekInRange.push(start.format("dddd"));
    // Move to the next day
    start.add(1, "day");
  }

  return daysOfWeekInRange;
};


