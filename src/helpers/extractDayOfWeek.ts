const extractDayOfWeek = (date: string): string | null => {
  const day = new Date(date);

  if (isNaN(day.getTime())) {
    console.error("Invalid date");
    return null;
  }

  const daysOfWeek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  return daysOfWeek[day.getDay() - 1];
};

export { extractDayOfWeek }