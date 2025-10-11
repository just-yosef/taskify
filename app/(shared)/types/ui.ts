import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface NavLink {
  label_ar: string;

  label_en: string;

  url: string;

  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;

  type: string;

  is_dropdown?: boolean;

  count_key?: string;

  value_key?: string;

  style?: string;
}

export type TopBarLinksArray = NavLink[];
