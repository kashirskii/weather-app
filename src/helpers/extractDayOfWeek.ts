const extractDayOfWeek = (date: string): string | null => {
  const day = new Date(date);

  if (isNaN(day.getTime())) {
    console.error("Invalid date");
    return null;
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday ",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return daysOfWeek[day.getDay()];
};

export { extractDayOfWeek };
