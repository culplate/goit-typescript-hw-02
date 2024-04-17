/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDays {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}

function isWeekend(day: weekDays): boolean {
  if (day === weekDays.SAT || day === weekDays.SUN) {
    return true;
  }
  return false;
}
