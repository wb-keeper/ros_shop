import { useUnit } from "effector-react";
import { $lang } from "@/context/lang";

export const useLang = () => {
  const lang = useUnit($lang);
};
