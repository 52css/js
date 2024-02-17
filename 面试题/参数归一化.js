function _formatNormalize(formatter) {
  if (typeof formatter === "function") {
    return formatter;
  }

  if (typeof formatter !== "string") {
    throw new Error("formatter is not a function or string");
  }

  if (formatter === "date") {
    formatter = "yyyy-MM-dd";
  } else if (formatter === "datetime") {
    formatter = "yyyy-MM-dd HH:mm:ss";
  }

  return (dateInfo) => {
    const { year, month, day, hour, minute, second, millisecond } = dateInfo;
    return formatter
      .replace("yyyy", year)
      .replace("MM", month)
      .replace("dd", day)
      .replace("HH", hour)
      .replace("mm", minute)
      .replace("ss", second)
      .replace("ms", millisecond);
  };
}

function formate(date, formatter, isPad = false) {
  formatter = _formatNormalize(formatter);
  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
  };

  dateInfo.yyyy = isPad
    ? dateInfo.year.toString().padStart(4, "0")
    : dateInfo.year;
  dateInfo.MM = isPad
    ? dateInfo.month.toString().padStart(2, "0")
    : dateInfo.month;
  dateInfo.dd = isPad
    ? dateInfo.day.toString().padStart(2, "0")
    : dateInfo.day;
  dateInfo.HH = isPad
    ? dateInfo.hour.toString().padStart(2, "0")
    : dateInfo.hour;
  dateInfo.mm = isPad
    ? dateInfo.minute.toString().padStart(2, "0")
    : dateInfo.minute;
  dateInfo.ss = isPad
    ? dateInfo.second.toString().padStart(2, "0")
    : dateInfo.second;
  dateInfo.ms = isPad
    ? dateInfo.millisecond.toString().padStart(3, "0")
    : dateInfo.millisecond;

  return formatter(dateInfo);
}

console.log(formate(new Date(), "date"));

formate(new Date(), "datetime");

formate(new Date(), "date", true);

formate(new Date(), "datetime", true);

formate(new Date(), "yyyy年MM月dd日 HH:mm:ss.mm");

formate(new Date("2022/1/1"), (dateInfo) => {
  const { year } = dateInfo;
  const thisYear = new Date().getFullYear();

  if (year < thisYear) {
    return `${thisYear - year}年前`;
  } else if (year > thisYear) {
    return `${year - thisYear}年后`;
  } else {
    return "今年";
  }
});
