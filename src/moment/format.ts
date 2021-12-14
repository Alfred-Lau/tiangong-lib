import moment from "moment";

export function formatCurrentTimeToAmOrPm(currentTime?: string): string {
  moment.updateLocale("zh-CN", {
    meridiem(hour: number, minute, isLower: boolean) {
      if (hour < 9) {
        return "早上好！";
      } else if (hour < 11 && minute < 30) {
        return "上午好！";
      } else if (hour < 13 && minute < 30) {
        return "中午好！";
      } else if (hour < 18) {
        return "下午好！";
      } else {
        return "晚上好！";
      }
    },
  });

  return moment(currentTime).format("a");
}
