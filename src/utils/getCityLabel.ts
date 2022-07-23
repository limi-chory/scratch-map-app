import { AREA_LV1, AREA_LV2 } from "../components/views/MapV2/const";
import { localeText } from "../components/views/MapV2/type";

export function getCityTooltipLabel(label: localeText): localeText {
  const enLabel = label.en;
  const krLabel = label.kr.length > 4 ? label.kr.slice(0, 2) : label.kr.slice(0, -1);

  return { en: enLabel, kr: krLabel };
}

export function getCityLabelByRcode(): localeText {
  const result: any = {};

  Object.values(AREA_LV1).forEach(({ rcode, label }) => {
    result[rcode] = {
      en: firstCapital(label.en),
      kr: label.kr,
    };
  });

  Object.values(AREA_LV2).forEach((area) => {
    area.forEach(({ rcode, label }) => {
      const rcodeLv1 = Math.floor(rcode / 10000) * 10000;
      result[rcode] = {
        en: `${result[rcodeLv1].en} ${firstCapital(label.en)}`,
        kr: `${result[rcodeLv1].kr} ${label.kr}`,
      };
    });
  });

  console.log(result);

  return { en: "", kr: "" };
}

function firstCapital(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
