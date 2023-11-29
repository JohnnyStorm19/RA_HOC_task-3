import { IRecievedData } from "../types/models";

export function dataToState(data: IRecievedData[], componentName: string) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  switch (componentName) {
    case "yearTable":
      return data.map((item) => {
        if (item.date) {
          return {
            year: new Date(item.date).getFullYear(),
            amount: item.amount,
          };
        }
      });
    case "monthTable":
      return data.map((item) => {
        if (item.date) {
          const month = monthNames[new Date(item.date).getMonth()];
          return {
            month,
            amount: item.amount,
          };
        }
      });
    case "sortTable":
      return [
        ...data.sort(
          (a, b) =>
            new Date(a.date as string).getTime() -
            new Date(b.date as string).getTime()
        ),
      ];
    default:
      return data;
  }
}
