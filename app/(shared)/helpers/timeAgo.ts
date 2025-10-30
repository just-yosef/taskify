import { formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale";
export const timeAgo = (time: Date | string) => {
  return formatDistanceToNow(new Date(time), { addSuffix: true, locale: ar });
};
