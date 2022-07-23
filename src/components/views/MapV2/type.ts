export type Area = {
  // rcode ABCDEF -> [AB] 시, 도 / [CD] 시, 군, 구 / [EF] 여분
  rcode: number;

  // areLv -> [1] 시, 도 / [2] 시, 군, 구
  areaLv: number;
  isMetropolitan?: boolean;

  label: localeText;
};

export type localeText = {
  en: string;
  kr: string;
};

export type SinglePathType = string;
export type MultiPathType = string[];

export enum PATH_TYPE {
  SINGLE = "single",
  MULTI = "multi",
  LAYER = "layer",
}

export type Path = {
  type: PATH_TYPE;
  d: SinglePathType | MultiPathType;
};
