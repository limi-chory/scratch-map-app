import { localeText } from "../components/views/MapV2/type";

export function getCityTooltipLabel(label: localeText): localeText {
  const enLabel = label.en;
  const krLabel = label.kr.length > 4 ? label.kr.slice(0, 2) : label.kr.slice(0, -1);

  return { en: enLabel, kr: krLabel };
}
