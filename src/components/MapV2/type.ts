export type AreaType = {
  // rcode ABCDEF -> [AB] 시, 도 / [CD] 시, 군, 구 / [EF] 여분
  rcode: number;

  // areLv -> [1] 시, 도 / [2] 시, 군, 구
  areaLv: number;

  name: {
    en: string;
    kr: string;
  };
};
