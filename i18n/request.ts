import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";
export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value || "en";
  return {
    locale,
    messages: locale === "ar" ? ar : en,
  };
});
