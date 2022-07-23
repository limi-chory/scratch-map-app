import { Area, localeText } from "./type";

export const AREA_LV1: { [key: string]: Area } = {
  seoul: { rcode: 10000, areaLv: 1, isMetropolitan: true, label: { en: "seoul", kr: "서울특별시" } },
  incheon: { rcode: 20000, areaLv: 1, isMetropolitan: true, label: { en: "incheon", kr: "인천광역시" } },
  daejeon: { rcode: 30000, areaLv: 1, isMetropolitan: true, label: { en: "daejeon", kr: "대전광역시" } },
  daegu: { rcode: 40000, areaLv: 1, isMetropolitan: true, label: { en: "daegu", kr: "대구광역시" } },
  ulsan: { rcode: 50000, areaLv: 1, isMetropolitan: true, label: { en: "ulsan", kr: "울산광역시" } },
  busan: { rcode: 60000, areaLv: 1, isMetropolitan: true, label: { en: "busan", kr: "부산광역시" } },
  gwangju: { rcode: 70000, areaLv: 1, isMetropolitan: true, label: { en: "gwangju", kr: "광주광역시" } },
  sejong: { rcode: 80000, areaLv: 1, isMetropolitan: true, label: { en: "sejong", kr: "세종특별자치시" } },
  gyeonggi: { rcode: 90000, areaLv: 1, label: { en: "gyeonggi", kr: "경기도" } },
  gangwon: { rcode: 100000, areaLv: 1, label: { en: "gangwon", kr: "강원도" } },
  northChungcheong: { rcode: 110000, areaLv: 1, label: { en: "northChungcheong", kr: "충청북도" } },
  southChungcheong: { rcode: 120000, areaLv: 1, label: { en: "southChungcheong", kr: "충청남도" } },
  northGyeongsang: { rcode: 130000, areaLv: 1, label: { en: "northGyeongsang", kr: "경상북도" } },
  southGyeongsang: { rcode: 140000, areaLv: 1, label: { en: "southGyeongsang", kr: "경상남도" } },
  northJeolla: { rcode: 150000, areaLv: 1, label: { en: "northJeolla", kr: "전라북도" } },
  southJeolla: { rcode: 160000, areaLv: 1, label: { en: "southJeolla", kr: "전라남도" } },
  jeju: { rcode: 170000, areaLv: 1, label: { en: "jeju", kr: "제주특별자치도" } },
};

export const AREA_LV2: { [key: string]: Area[] } = {
  seoul: [
    { rcode: 10100, areaLv: 2, label: { en: "gangnam", kr: "강남구" } },
    { rcode: 10200, areaLv: 2, label: { en: "gangdong", kr: "강동구" } },
    { rcode: 10300, areaLv: 2, label: { en: "gangbuk", kr: "강북구" } },
    { rcode: 10400, areaLv: 2, label: { en: "gangseo", kr: "강서구" } },
    { rcode: 10500, areaLv: 2, label: { en: "gwanak", kr: "관악구" } },
    { rcode: 10600, areaLv: 2, label: { en: "gwangjin", kr: "광진구" } },
    { rcode: 10700, areaLv: 2, label: { en: "guro", kr: "구로구" } },
    { rcode: 10800, areaLv: 2, label: { en: "geumcheon", kr: "금천구" } },
    { rcode: 10900, areaLv: 2, label: { en: "nowon", kr: "노원구" } },
    { rcode: 11000, areaLv: 2, label: { en: "dobong", kr: "도봉구" } },
    { rcode: 11100, areaLv: 2, label: { en: "dongdaemun", kr: "동대문구" } },
    { rcode: 11200, areaLv: 2, label: { en: "dongjak", kr: "동작구" } },
    { rcode: 11300, areaLv: 2, label: { en: "mapo", kr: "마포구" } },
    { rcode: 11400, areaLv: 2, label: { en: "seodaemun", kr: "서대문구" } },
    { rcode: 11500, areaLv: 2, label: { en: "seocho", kr: "서초구" } },
    { rcode: 11600, areaLv: 2, label: { en: "seongdong", kr: "성동구" } },
    { rcode: 11700, areaLv: 2, label: { en: "seongbuk", kr: "성북구" } },
    { rcode: 11800, areaLv: 2, label: { en: "songpa", kr: "송파구" } },
    { rcode: 11900, areaLv: 2, label: { en: "yangcheon", kr: "양천구" } },
    { rcode: 12000, areaLv: 2, label: { en: "yeongdeungpo", kr: "영등포구" } },
    { rcode: 12100, areaLv: 2, label: { en: "yongsan", kr: "용산구" } },
    { rcode: 12200, areaLv: 2, label: { en: "eunpyeong", kr: "은평구" } },
    { rcode: 12300, areaLv: 2, label: { en: "jongno", kr: "종로구" } },
    { rcode: 12400, areaLv: 2, label: { en: "jung", kr: "중구" } },
    { rcode: 12500, areaLv: 2, label: { en: "jungnang", kr: "중랑구" } },
  ],
  incheon: [
    { rcode: 20100, areaLv: 2, label: { en: "gyeyang", kr: "계양구" } },
    { rcode: 20200, areaLv: 2, label: { en: "nam", kr: "남구" } },
    { rcode: 20300, areaLv: 2, label: { en: "namdong", kr: "남동구" } },
    { rcode: 20400, areaLv: 2, label: { en: "dong", kr: "동구" } },
    { rcode: 20500, areaLv: 2, label: { en: "bupyeong", kr: "부평구" } },
    { rcode: 20600, areaLv: 2, label: { en: "seo", kr: "서구" } },
    { rcode: 20700, areaLv: 2, label: { en: "yeonsu", kr: "연수구" } },
    { rcode: 20800, areaLv: 2, label: { en: "jung", kr: "중구" } },
    { rcode: 20900, areaLv: 2, label: { en: "ganghwa", kr: "강화군" } },
    { rcode: 21000, areaLv: 2, label: { en: "ongjin", kr: "옹진군" } },
  ],
  daejeon: [
    { rcode: 30100, areaLv: 2, label: { en: "daedeok", kr: "대덕구" } },
    { rcode: 30200, areaLv: 2, label: { en: "dong", kr: "동구" } },
    { rcode: 30300, areaLv: 2, label: { en: "seo", kr: "서구" } },
    { rcode: 30400, areaLv: 2, label: { en: "yuseong", kr: "유성구" } },
    { rcode: 30500, areaLv: 2, label: { en: "jung", kr: "중구" } },
  ],
  daegu: [
    { rcode: 40100, areaLv: 2, label: { en: "nam", kr: "남구" } },
    { rcode: 40200, areaLv: 2, label: { en: "dalseo", kr: "달서구" } },
    { rcode: 40300, areaLv: 2, label: { en: "dong", kr: "동구" } },
    { rcode: 40400, areaLv: 2, label: { en: "buk", kr: "북구" } },
    { rcode: 40500, areaLv: 2, label: { en: "seo", kr: "서구" } },
    { rcode: 40600, areaLv: 2, label: { en: "suseong", kr: "수성구" } },
    { rcode: 40700, areaLv: 2, label: { en: "jung", kr: "중구" } },
    { rcode: 40800, areaLv: 2, label: { en: "dalseong", kr: "달성군" } },
  ],
  ulsan: [
    { rcode: 50100, areaLv: 2, label: { en: "nam", kr: "남구" } },
    { rcode: 50200, areaLv: 2, label: { en: "dong", kr: "동구" } },
    { rcode: 50300, areaLv: 2, label: { en: "buk", kr: "북구" } },
    { rcode: 50400, areaLv: 2, label: { en: "jung", kr: "중구" } },
    { rcode: 50500, areaLv: 2, label: { en: "ulju", kr: "울주군" } },
  ],
  busan: [
    { rcode: 60100, areaLv: 2, label: { en: "gangseo", kr: "강서구" } },
    { rcode: 60200, areaLv: 2, label: { en: "gumjung", kr: "금정구" } },
    { rcode: 60300, areaLv: 2, label: { en: "nam", kr: "남구" } },
    { rcode: 60400, areaLv: 2, label: { en: "dong", kr: "동구" } },
    { rcode: 60500, areaLv: 2, label: { en: "dongnae", kr: "동래구" } },
    { rcode: 60600, areaLv: 2, label: { en: "busanjin", kr: "부산진구" } },
    { rcode: 60700, areaLv: 2, label: { en: "buk", kr: "북구" } },
    { rcode: 60800, areaLv: 2, label: { en: "sasang", kr: "사상구" } },
    { rcode: 60900, areaLv: 2, label: { en: "saha", kr: "사하구" } },
    { rcode: 61000, areaLv: 2, label: { en: "seo", kr: "서구" } },
    { rcode: 61100, areaLv: 2, label: { en: "suyeong", kr: "수영구" } },
    { rcode: 61200, areaLv: 2, label: { en: "yeonje", kr: "연제구" } },
    { rcode: 61300, areaLv: 2, label: { en: "yeongdo", kr: "영도구" } },
    { rcode: 61400, areaLv: 2, label: { en: "jung", kr: "중구" } },
    { rcode: 61500, areaLv: 2, label: { en: "haeundae", kr: "해운대구" } },
    { rcode: 61600, areaLv: 2, label: { en: "gijang", kr: "기장군" } },
  ],
  gwangju: [
    { rcode: 70100, areaLv: 2, label: { en: "gwangsan", kr: "광산구" } },
    { rcode: 70200, areaLv: 2, label: { en: "nam", kr: "남구" } },
    { rcode: 70300, areaLv: 2, label: { en: "dong", kr: "동구" } },
    { rcode: 70400, areaLv: 2, label: { en: "buk", kr: "북구" } },
    { rcode: 70500, areaLv: 2, label: { en: "seo", kr: "서구" } },
  ],
  sejong: [{ rcode: 80000, areaLv: 1, isMetropolitan: true, label: { en: "sejong", kr: "세종특별자치시" } }],
  gyeonggi: [
    { rcode: 90100, areaLv: 2, label: { en: "goyang", kr: "고양시" } },
    { rcode: 90200, areaLv: 2, label: { en: "gwacheon", kr: "과천시" } },
    { rcode: 90300, areaLv: 2, label: { en: "gwangmyeong", kr: "광명시" } },
    { rcode: 90400, areaLv: 2, label: { en: "gwangju", kr: "광주시" } },
    { rcode: 90500, areaLv: 2, label: { en: "guri", kr: "구리시" } },
    { rcode: 90600, areaLv: 2, label: { en: "gunpo", kr: "군포시" } },
    { rcode: 90700, areaLv: 2, label: { en: "gimpo", kr: "김포시" } },
    { rcode: 90800, areaLv: 2, label: { en: "namyangju", kr: "남양주시" } },
    { rcode: 90900, areaLv: 2, label: { en: "dongducheon", kr: "동두천시" } },
    { rcode: 91000, areaLv: 2, label: { en: "bucheon", kr: "부천시" } },
    { rcode: 91100, areaLv: 2, label: { en: "seongnam", kr: "성남시" } },
    { rcode: 91200, areaLv: 2, label: { en: "suwon", kr: "수원시" } },
    { rcode: 91300, areaLv: 2, label: { en: "siheung", kr: "시흥시" } },
    { rcode: 91400, areaLv: 2, label: { en: "ansan", kr: "안산시" } },
    { rcode: 91500, areaLv: 2, label: { en: "anseong", kr: "안성시" } },
    { rcode: 91600, areaLv: 2, label: { en: "anyang", kr: "안양시" } },
    { rcode: 91700, areaLv: 2, label: { en: "yangju", kr: "양주시" } },
    { rcode: 91800, areaLv: 2, label: { en: "yeoju", kr: "여주시" } },
    { rcode: 91900, areaLv: 2, label: { en: "osan", kr: "오산시" } },
    { rcode: 92000, areaLv: 2, label: { en: "yongin", kr: "용인시" } },
    { rcode: 92100, areaLv: 2, label: { en: "uiwang", kr: "의왕시" } },
    { rcode: 92200, areaLv: 2, label: { en: "uijeongbu", kr: "의정부시" } },
    { rcode: 92300, areaLv: 2, label: { en: "icheon", kr: "이천시" } },
    { rcode: 92400, areaLv: 2, label: { en: "paju", kr: "파주시" } },
    { rcode: 92500, areaLv: 2, label: { en: "pyeongtaek", kr: "평택시" } },
    { rcode: 92600, areaLv: 2, label: { en: "pocheon", kr: "포천시" } },
    { rcode: 92700, areaLv: 2, label: { en: "hanam", kr: "하남시" } },
    { rcode: 92800, areaLv: 2, label: { en: "hwaseong", kr: "화성시" } },
    { rcode: 92900, areaLv: 2, label: { en: "gapyeong", kr: "가평군" } },
    { rcode: 93000, areaLv: 2, label: { en: "yangpyeong", kr: "양평군" } },
    { rcode: 93100, areaLv: 2, label: { en: "yeoncheon", kr: "여천군" } },
  ],
  gangwon: [
    { rcode: 100100, areaLv: 2, label: { en: "gangneung", kr: "강릉시" } },
    { rcode: 100200, areaLv: 2, label: { en: "donghae", kr: "동해시" } },
    { rcode: 100300, areaLv: 2, label: { en: "samcheok", kr: "삼척시" } },
    { rcode: 100400, areaLv: 2, label: { en: "sokcho", kr: "속초시" } },
    { rcode: 100500, areaLv: 2, label: { en: "wonju", kr: "원주시" } },
    { rcode: 100600, areaLv: 2, label: { en: "chuncheon", kr: "춘천시" } },
    { rcode: 100700, areaLv: 2, label: { en: "taebaek", kr: "태백시" } },
    { rcode: 100800, areaLv: 2, label: { en: "goseong", kr: "고성군" } },
    { rcode: 100900, areaLv: 2, label: { en: "yanggu", kr: "양구군" } },
    { rcode: 101000, areaLv: 2, label: { en: "yangyang", kr: "양양군" } },
    { rcode: 101100, areaLv: 2, label: { en: "yeongwol", kr: "영월군" } },
    { rcode: 101200, areaLv: 2, label: { en: "inje", kr: "인제군" } },
    { rcode: 101300, areaLv: 2, label: { en: "jeongseon", kr: "정선군" } },
    { rcode: 101400, areaLv: 2, label: { en: "cheorwon", kr: "철원군" } },
    { rcode: 101500, areaLv: 2, label: { en: "pyeongchang", kr: "평창군" } },
    { rcode: 101600, areaLv: 2, label: { en: "hongcheon", kr: "홍천군" } },
    { rcode: 101700, areaLv: 2, label: { en: "hwacheon", kr: "화천군" } },
    { rcode: 101800, areaLv: 2, label: { en: "hoengseong", kr: "횡성군" } },
  ],
  northChungcheong: [
    { rcode: 110100, areaLv: 2, label: { en: "jecheon", kr: "제천시" } },
    { rcode: 110200, areaLv: 2, label: { en: "cheongju", kr: "청주시" } },
    { rcode: 110300, areaLv: 2, label: { en: "chungju", kr: "충주시" } },
    { rcode: 110400, areaLv: 2, label: { en: "goesan", kr: "괴산군" } },
    { rcode: 110500, areaLv: 2, label: { en: "danyang", kr: "단양군" } },
    { rcode: 110600, areaLv: 2, label: { en: "boeun", kr: "보은군" } },
    { rcode: 110700, areaLv: 2, label: { en: "yeongdong", kr: "영동군" } },
    { rcode: 110800, areaLv: 2, label: { en: "okcheon", kr: "옥천군" } },
    { rcode: 110900, areaLv: 2, label: { en: "eumseong", kr: "음성군" } },
    { rcode: 111000, areaLv: 2, label: { en: "jeungpyeong", kr: "증평군" } },
    { rcode: 111100, areaLv: 2, label: { en: "jincheon", kr: "진천군" } },
  ],
  southChungcheong: [
    { rcode: 120100, areaLv: 2, label: { en: "gyeryong", kr: "계룡시" } },
    { rcode: 120200, areaLv: 2, label: { en: "gongju", kr: "공주시" } },
    { rcode: 120300, areaLv: 2, label: { en: "nonsan", kr: "논산시" } },
    { rcode: 120400, areaLv: 2, label: { en: "dangjin", kr: "당진시" } },
    { rcode: 120500, areaLv: 2, label: { en: "boryeong", kr: "보령시" } },
    { rcode: 120600, areaLv: 2, label: { en: "seosan", kr: "서산시" } },
    { rcode: 120700, areaLv: 2, label: { en: "asan", kr: "아산시" } },
    { rcode: 120800, areaLv: 2, label: { en: "cheonan", kr: "천안시" } },
    { rcode: 120900, areaLv: 2, label: { en: "geumsan", kr: "금산군" } },
    { rcode: 121000, areaLv: 2, label: { en: "buyeo", kr: "부여군" } },
    { rcode: 121100, areaLv: 2, label: { en: "seocheon", kr: "서천군" } },
    { rcode: 121200, areaLv: 2, label: { en: "yesan", kr: "예산군" } },
    { rcode: 121300, areaLv: 2, label: { en: "cheongyang", kr: "청양군" } },
    { rcode: 121400, areaLv: 2, label: { en: "taean", kr: "태안군" } },
    { rcode: 121500, areaLv: 2, label: { en: "hongseong", kr: "홍성군" } },
  ],
  northGyeongsang: [
    { rcode: 130100, areaLv: 2, label: { en: "gyeongsan", kr: "경산시" } },
    { rcode: 130200, areaLv: 2, label: { en: "gyeongju", kr: "경주시" } },
    { rcode: 130300, areaLv: 2, label: { en: "gumi", kr: "구미시" } },
    { rcode: 130400, areaLv: 2, label: { en: "gimcheon", kr: "김천시" } },
    { rcode: 130500, areaLv: 2, label: { en: "mungyeong", kr: "문경시" } },
    { rcode: 130600, areaLv: 2, label: { en: "sangju", kr: "상주시" } },
    { rcode: 130700, areaLv: 2, label: { en: "andong", kr: "안동시" } },
    { rcode: 130800, areaLv: 2, label: { en: "yeongju", kr: "영주시" } },
    { rcode: 130900, areaLv: 2, label: { en: "yeongcheon", kr: "영천시" } },
    { rcode: 131000, areaLv: 2, label: { en: "pohang", kr: "포항시" } },
    { rcode: 131100, areaLv: 2, label: { en: "goryeong", kr: "고령군" } },
    { rcode: 131200, areaLv: 2, label: { en: "gunwi", kr: "군위군" } },
    { rcode: 131300, areaLv: 2, label: { en: "bonghwa", kr: "봉화군" } },
    { rcode: 131400, areaLv: 2, label: { en: "seongju", kr: "성주군" } },
    { rcode: 131500, areaLv: 2, label: { en: "yeongdeok", kr: "영덕군" } },
    { rcode: 131600, areaLv: 2, label: { en: "yeongyang", kr: "영양군" } },
    { rcode: 131700, areaLv: 2, label: { en: "yecheon", kr: "예천군" } },
    { rcode: 131800, areaLv: 2, label: { en: "ulleung", kr: "울릉군" } },
    { rcode: 131900, areaLv: 2, label: { en: "uljin", kr: "울진군" } },
    { rcode: 132000, areaLv: 2, label: { en: "uiseong", kr: "의성군" } },
    { rcode: 132100, areaLv: 2, label: { en: "cheongdo", kr: "청도군" } },
    { rcode: 132200, areaLv: 2, label: { en: "cheongsong", kr: "청송군" } },
    { rcode: 132300, areaLv: 2, label: { en: "chilgok", kr: "칠곡군" } },
  ],
  southGyeongsang: [
    { rcode: 140100, areaLv: 2, label: { en: "geoje", kr: "거제시" } },
    { rcode: 140200, areaLv: 2, label: { en: "gimhae", kr: "김해시" } },
    { rcode: 140300, areaLv: 2, label: { en: "miryang", kr: "밀양시" } },
    { rcode: 140400, areaLv: 2, label: { en: "sacheon", kr: "사천시" } },
    { rcode: 140500, areaLv: 2, label: { en: "yangsan", kr: "양산시" } },
    { rcode: 140600, areaLv: 2, label: { en: "jinju", kr: "진주시" } },
    { rcode: 140700, areaLv: 2, label: { en: "changwon", kr: "창원시" } },
    { rcode: 140800, areaLv: 2, label: { en: "tongyeong", kr: "통영시" } },
    { rcode: 140900, areaLv: 2, label: { en: "geochang", kr: "거창군" } },
    { rcode: 141000, areaLv: 2, label: { en: "goseong", kr: "고성군" } },
    { rcode: 141100, areaLv: 2, label: { en: "namhae", kr: "남해군" } },
    { rcode: 141200, areaLv: 2, label: { en: "sancheong", kr: "산청군" } },
    { rcode: 141300, areaLv: 2, label: { en: "uiryeong", kr: "의령군" } },
    { rcode: 141400, areaLv: 2, label: { en: "changnyeong", kr: "창녕군" } },
    { rcode: 141500, areaLv: 2, label: { en: "hadong", kr: "하동군" } },
    { rcode: 141600, areaLv: 2, label: { en: "haman", kr: "함안군" } },
    { rcode: 141700, areaLv: 2, label: { en: "hamyang", kr: "함양군" } },
    { rcode: 141800, areaLv: 2, label: { en: "hapcheon", kr: "합천군" } },
  ],
  northJeolla: [
    { rcode: 150100, areaLv: 2, label: { en: "gunsan", kr: "군산시" } },
    { rcode: 150200, areaLv: 2, label: { en: "gimje", kr: "김제시" } },
    { rcode: 150300, areaLv: 2, label: { en: "namwon", kr: "남원시" } },
    { rcode: 150400, areaLv: 2, label: { en: "iksan", kr: "익산시" } },
    { rcode: 150500, areaLv: 2, label: { en: "jeonju", kr: "전주시" } },
    { rcode: 150600, areaLv: 2, label: { en: "jeongeup", kr: "정읍시" } },
    { rcode: 150700, areaLv: 2, label: { en: "gochang", kr: "고창군" } },
    { rcode: 150800, areaLv: 2, label: { en: "muju", kr: "무주군" } },
    { rcode: 150900, areaLv: 2, label: { en: "buan", kr: "부안군" } },
    { rcode: 151000, areaLv: 2, label: { en: "sunchang", kr: "순창군" } },
    { rcode: 151100, areaLv: 2, label: { en: "wanju", kr: "완주군" } },
    { rcode: 151200, areaLv: 2, label: { en: "imsil", kr: "임실군" } },
    { rcode: 151300, areaLv: 2, label: { en: "jangsu", kr: "장수군" } },
    { rcode: 151400, areaLv: 2, label: { en: "jinan", kr: "진안군" } },
  ],
  southJeolla: [
    { rcode: 160100, areaLv: 2, label: { en: "gwangyang", kr: "광양시" } },
    { rcode: 160200, areaLv: 2, label: { en: "naju", kr: "나주시" } },
    { rcode: 160300, areaLv: 2, label: { en: "mokpo", kr: "목포시" } },
    { rcode: 160400, areaLv: 2, label: { en: "suncheon", kr: "순천시" } },
    { rcode: 160500, areaLv: 2, label: { en: "yeosu", kr: "여수시" } },
    { rcode: 160600, areaLv: 2, label: { en: "gangjin", kr: "강진군" } },
    { rcode: 160700, areaLv: 2, label: { en: "goheung", kr: "고흥군" } },
    { rcode: 160800, areaLv: 2, label: { en: "gokseong", kr: "곡성군" } },
    { rcode: 160900, areaLv: 2, label: { en: "gurye", kr: "구례군" } },
    { rcode: 161000, areaLv: 2, label: { en: "damyang", kr: "담양군" } },
    { rcode: 161100, areaLv: 2, label: { en: "muan", kr: "무안군" } },
    { rcode: 161200, areaLv: 2, label: { en: "boseong", kr: "보성군" } },
    { rcode: 161300, areaLv: 2, label: { en: "sinan", kr: "신안군" } },
    { rcode: 161400, areaLv: 2, label: { en: "yeonggwang", kr: "영광군" } },
    { rcode: 161500, areaLv: 2, label: { en: "yeongam", kr: "영암군" } },
    { rcode: 161600, areaLv: 2, label: { en: "wando", kr: "완도군" } },
    { rcode: 161700, areaLv: 2, label: { en: "jangseong", kr: "장성군" } },
    { rcode: 161800, areaLv: 2, label: { en: "jangheung", kr: "장흥군" } },
    { rcode: 161900, areaLv: 2, label: { en: "jindo", kr: "진도군" } },
    { rcode: 162000, areaLv: 2, label: { en: "hampyeong", kr: "함평군" } },
    { rcode: 162100, areaLv: 2, label: { en: "haenam", kr: "해남군" } },
    { rcode: 162200, areaLv: 2, label: { en: "hwasun", kr: "화순군" } },
  ],
  jeju: [
    { rcode: 170100, areaLv: 2, label: { en: "seogwipo", kr: "서귀포시" } },
    { rcode: 170200, areaLv: 2, label: { en: "jeju", kr: "제주시" } },
  ],
};

export const LABEL_BY_RCODE: { [key: number]: localeText } = {
  10000: {
    en: "Seoul",
    kr: "서울특별시",
  },
  10100: {
    en: "Seoul Gangnam",
    kr: "서울특별시 강남구",
  },
  10200: {
    en: "Seoul Gangdong",
    kr: "서울특별시 강동구",
  },
  10300: {
    en: "Seoul Gangbuk",
    kr: "서울특별시 강북구",
  },
  10400: {
    en: "Seoul Gangseo",
    kr: "서울특별시 강서구",
  },
  10500: {
    en: "Seoul Gwanak",
    kr: "서울특별시 관악구",
  },
  10600: {
    en: "Seoul Gwangjin",
    kr: "서울특별시 광진구",
  },
  10700: {
    en: "Seoul Guro",
    kr: "서울특별시 구로구",
  },
  10800: {
    en: "Seoul Geumcheon",
    kr: "서울특별시 금천구",
  },
  10900: {
    en: "Seoul Nowon",
    kr: "서울특별시 노원구",
  },
  11000: {
    en: "Seoul Dobong",
    kr: "서울특별시 도봉구",
  },
  11100: {
    en: "Seoul Dongdaemun",
    kr: "서울특별시 동대문구",
  },
  11200: {
    en: "Seoul Dongjak",
    kr: "서울특별시 동작구",
  },
  11300: {
    en: "Seoul Mapo",
    kr: "서울특별시 마포구",
  },
  11400: {
    en: "Seoul Seodaemun",
    kr: "서울특별시 서대문구",
  },
  11500: {
    en: "Seoul Seocho",
    kr: "서울특별시 서초구",
  },
  11600: {
    en: "Seoul Seongdong",
    kr: "서울특별시 성동구",
  },
  11700: {
    en: "Seoul Seongbuk",
    kr: "서울특별시 성북구",
  },
  11800: {
    en: "Seoul Songpa",
    kr: "서울특별시 송파구",
  },
  11900: {
    en: "Seoul Yangcheon",
    kr: "서울특별시 양천구",
  },
  12000: {
    en: "Seoul Yeongdeungpo",
    kr: "서울특별시 영등포구",
  },
  12100: {
    en: "Seoul Yongsan",
    kr: "서울특별시 용산구",
  },
  12200: {
    en: "Seoul Eunpyeong",
    kr: "서울특별시 은평구",
  },
  12300: {
    en: "Seoul Jongno",
    kr: "서울특별시 종로구",
  },
  12400: {
    en: "Seoul Jung",
    kr: "서울특별시 중구",
  },
  12500: {
    en: "Seoul Jungnang",
    kr: "서울특별시 중랑구",
  },
  20000: {
    en: "Incheon",
    kr: "인천광역시",
  },
  20100: {
    en: "Incheon Gyeyang",
    kr: "인천광역시 계양구",
  },
  20200: {
    en: "Incheon Nam",
    kr: "인천광역시 남구",
  },
  20300: {
    en: "Incheon Namdong",
    kr: "인천광역시 남동구",
  },
  20400: {
    en: "Incheon Dong",
    kr: "인천광역시 동구",
  },
  20500: {
    en: "Incheon Bupyeong",
    kr: "인천광역시 부평구",
  },
  20600: {
    en: "Incheon Seo",
    kr: "인천광역시 서구",
  },
  20700: {
    en: "Incheon Yeonsu",
    kr: "인천광역시 연수구",
  },
  20800: {
    en: "Incheon Jung",
    kr: "인천광역시 중구",
  },
  20900: {
    en: "Incheon Ganghwa",
    kr: "인천광역시 강화군",
  },
  21000: {
    en: "Incheon Ongjin",
    kr: "인천광역시 옹진군",
  },
  30000: {
    en: "Daejeon",
    kr: "대전광역시",
  },
  30100: {
    en: "Daejeon Daedeok",
    kr: "대전광역시 대덕구",
  },
  30200: {
    en: "Daejeon Dong",
    kr: "대전광역시 동구",
  },
  30300: {
    en: "Daejeon Seo",
    kr: "대전광역시 서구",
  },
  30400: {
    en: "Daejeon Yuseong",
    kr: "대전광역시 유성구",
  },
  30500: {
    en: "Daejeon Jung",
    kr: "대전광역시 중구",
  },
  40000: {
    en: "Daegu",
    kr: "대구광역시",
  },
  40100: {
    en: "Daegu Nam",
    kr: "대구광역시 남구",
  },
  40200: {
    en: "Daegu Dalseo",
    kr: "대구광역시 달서구",
  },
  40300: {
    en: "Daegu Dong",
    kr: "대구광역시 동구",
  },
  40400: {
    en: "Daegu Buk",
    kr: "대구광역시 북구",
  },
  40500: {
    en: "Daegu Seo",
    kr: "대구광역시 서구",
  },
  40600: {
    en: "Daegu Suseong",
    kr: "대구광역시 수성구",
  },
  40700: {
    en: "Daegu Jung",
    kr: "대구광역시 중구",
  },
  40800: {
    en: "Daegu Dalseong",
    kr: "대구광역시 달성군",
  },
  50000: {
    en: "Ulsan",
    kr: "울산광역시",
  },
  50100: {
    en: "Ulsan Nam",
    kr: "울산광역시 남구",
  },
  50200: {
    en: "Ulsan Dong",
    kr: "울산광역시 동구",
  },
  50300: {
    en: "Ulsan Buk",
    kr: "울산광역시 북구",
  },
  50400: {
    en: "Ulsan Jung",
    kr: "울산광역시 중구",
  },
  50500: {
    en: "Ulsan Ulju",
    kr: "울산광역시 울주군",
  },
  60000: {
    en: "Busan",
    kr: "부산광역시",
  },
  60100: {
    en: "Busan Gangseo",
    kr: "부산광역시 강서구",
  },
  60200: {
    en: "Busan Gumjung",
    kr: "부산광역시 금정구",
  },
  60300: {
    en: "Busan Nam",
    kr: "부산광역시 남구",
  },
  60400: {
    en: "Busan Dong",
    kr: "부산광역시 동구",
  },
  60500: {
    en: "Busan Dongnae",
    kr: "부산광역시 동래구",
  },
  60600: {
    en: "Busan Busanjin",
    kr: "부산광역시 부산진구",
  },
  60700: {
    en: "Busan Buk",
    kr: "부산광역시 북구",
  },
  60800: {
    en: "Busan Sasang",
    kr: "부산광역시 사상구",
  },
  60900: {
    en: "Busan Saha",
    kr: "부산광역시 사하구",
  },
  61000: {
    en: "Busan Seo",
    kr: "부산광역시 서구",
  },
  61100: {
    en: "Busan Suyeong",
    kr: "부산광역시 수영구",
  },
  61200: {
    en: "Busan Yeonje",
    kr: "부산광역시 연제구",
  },
  61300: {
    en: "Busan Yeongdo",
    kr: "부산광역시 영도구",
  },
  61400: {
    en: "Busan Jung",
    kr: "부산광역시 중구",
  },
  61500: {
    en: "Busan Haeundae",
    kr: "부산광역시 해운대구",
  },
  61600: {
    en: "Busan Gijang",
    kr: "부산광역시 기장군",
  },
  70000: {
    en: "Gwangju",
    kr: "광주광역시",
  },
  70100: {
    en: "Gwangju Gwangsan",
    kr: "광주광역시 광산구",
  },
  70200: {
    en: "Gwangju Nam",
    kr: "광주광역시 남구",
  },
  70300: {
    en: "Gwangju Dong",
    kr: "광주광역시 동구",
  },
  70400: {
    en: "Gwangju Buk",
    kr: "광주광역시 북구",
  },
  70500: {
    en: "Gwangju Seo",
    kr: "광주광역시 서구",
  },
  80000: {
    en: "Sejong Sejong",
    kr: "세종특별자치시 세종특별자치시",
  },
  90000: {
    en: "Gyeonggi",
    kr: "경기도",
  },
  90100: {
    en: "Gyeonggi Goyang",
    kr: "경기도 고양시",
  },
  90200: {
    en: "Gyeonggi Gwacheon",
    kr: "경기도 과천시",
  },
  90300: {
    en: "Gyeonggi Gwangmyeong",
    kr: "경기도 광명시",
  },
  90400: {
    en: "Gyeonggi Gwangju",
    kr: "경기도 광주시",
  },
  90500: {
    en: "Gyeonggi Guri",
    kr: "경기도 구리시",
  },
  90600: {
    en: "Gyeonggi Gunpo",
    kr: "경기도 군포시",
  },
  90700: {
    en: "Gyeonggi Gimpo",
    kr: "경기도 김포시",
  },
  90800: {
    en: "Gyeonggi Namyangju",
    kr: "경기도 남양주시",
  },
  90900: {
    en: "Gyeonggi Dongducheon",
    kr: "경기도 동두천시",
  },
  91000: {
    en: "Gyeonggi Bucheon",
    kr: "경기도 부천시",
  },
  91100: {
    en: "Gyeonggi Seongnam",
    kr: "경기도 성남시",
  },
  91200: {
    en: "Gyeonggi Suwon",
    kr: "경기도 수원시",
  },
  91300: {
    en: "Gyeonggi Siheung",
    kr: "경기도 시흥시",
  },
  91400: {
    en: "Gyeonggi Ansan",
    kr: "경기도 안산시",
  },
  91500: {
    en: "Gyeonggi Anseong",
    kr: "경기도 안성시",
  },
  91600: {
    en: "Gyeonggi Anyang",
    kr: "경기도 안양시",
  },
  91700: {
    en: "Gyeonggi Yangju",
    kr: "경기도 양주시",
  },
  91800: {
    en: "Gyeonggi Yeoju",
    kr: "경기도 여주시",
  },
  91900: {
    en: "Gyeonggi Osan",
    kr: "경기도 오산시",
  },
  92000: {
    en: "Gyeonggi Yongin",
    kr: "경기도 용인시",
  },
  92100: {
    en: "Gyeonggi Uiwang",
    kr: "경기도 의왕시",
  },
  92200: {
    en: "Gyeonggi Uijeongbu",
    kr: "경기도 의정부시",
  },
  92300: {
    en: "Gyeonggi Icheon",
    kr: "경기도 이천시",
  },
  92400: {
    en: "Gyeonggi Paju",
    kr: "경기도 파주시",
  },
  92500: {
    en: "Gyeonggi Pyeongtaek",
    kr: "경기도 평택시",
  },
  92600: {
    en: "Gyeonggi Pocheon",
    kr: "경기도 포천시",
  },
  92700: {
    en: "Gyeonggi Hanam",
    kr: "경기도 하남시",
  },
  92800: {
    en: "Gyeonggi Hwaseong",
    kr: "경기도 화성시",
  },
  92900: {
    en: "Gyeonggi Gapyeong",
    kr: "경기도 가평군",
  },
  93000: {
    en: "Gyeonggi Yangpyeong",
    kr: "경기도 양평군",
  },
  93100: {
    en: "Gyeonggi Yeoncheon",
    kr: "경기도 여천군",
  },
  100000: {
    en: "Gangwon",
    kr: "강원도",
  },
  100100: {
    en: "Gangwon Gangneung",
    kr: "강원도 강릉시",
  },
  100200: {
    en: "Gangwon Donghae",
    kr: "강원도 동해시",
  },
  100300: {
    en: "Gangwon Samcheok",
    kr: "강원도 삼척시",
  },
  100400: {
    en: "Gangwon Sokcho",
    kr: "강원도 속초시",
  },
  100500: {
    en: "Gangwon Wonju",
    kr: "강원도 원주시",
  },
  100600: {
    en: "Gangwon Chuncheon",
    kr: "강원도 춘천시",
  },
  100700: {
    en: "Gangwon Taebaek",
    kr: "강원도 태백시",
  },
  100800: {
    en: "Gangwon Goseong",
    kr: "강원도 고성군",
  },
  100900: {
    en: "Gangwon Yanggu",
    kr: "강원도 양구군",
  },
  101000: {
    en: "Gangwon Yangyang",
    kr: "강원도 양양군",
  },
  101100: {
    en: "Gangwon Yeongwol",
    kr: "강원도 영월군",
  },
  101200: {
    en: "Gangwon Inje",
    kr: "강원도 인제군",
  },
  101300: {
    en: "Gangwon Jeongseon",
    kr: "강원도 정선군",
  },
  101400: {
    en: "Gangwon Cheorwon",
    kr: "강원도 철원군",
  },
  101500: {
    en: "Gangwon Pyeongchang",
    kr: "강원도 평창군",
  },
  101600: {
    en: "Gangwon Hongcheon",
    kr: "강원도 홍천군",
  },
  101700: {
    en: "Gangwon Hwacheon",
    kr: "강원도 화천군",
  },
  101800: {
    en: "Gangwon Hoengseong",
    kr: "강원도 횡성군",
  },
  110000: {
    en: "NorthChungcheong",
    kr: "충청북도",
  },
  110100: {
    en: "NorthChungcheong Jecheon",
    kr: "충청북도 제천시",
  },
  110200: {
    en: "NorthChungcheong Cheongju",
    kr: "충청북도 청주시",
  },
  110300: {
    en: "NorthChungcheong Chungju",
    kr: "충청북도 충주시",
  },
  110400: {
    en: "NorthChungcheong Goesan",
    kr: "충청북도 괴산군",
  },
  110500: {
    en: "NorthChungcheong Danyang",
    kr: "충청북도 단양군",
  },
  110600: {
    en: "NorthChungcheong Boeun",
    kr: "충청북도 보은군",
  },
  110700: {
    en: "NorthChungcheong Yeongdong",
    kr: "충청북도 영동군",
  },
  110800: {
    en: "NorthChungcheong Okcheon",
    kr: "충청북도 옥천군",
  },
  110900: {
    en: "NorthChungcheong Eumseong",
    kr: "충청북도 음성군",
  },
  111000: {
    en: "NorthChungcheong Jeungpyeong",
    kr: "충청북도 증평군",
  },
  111100: {
    en: "NorthChungcheong Jincheon",
    kr: "충청북도 진천군",
  },
  120000: {
    en: "SouthChungcheong",
    kr: "충청남도",
  },
  120100: {
    en: "SouthChungcheong Gyeryong",
    kr: "충청남도 계룡시",
  },
  120200: {
    en: "SouthChungcheong Gongju",
    kr: "충청남도 공주시",
  },
  120300: {
    en: "SouthChungcheong Nonsan",
    kr: "충청남도 논산시",
  },
  120400: {
    en: "SouthChungcheong Dangjin",
    kr: "충청남도 당진시",
  },
  120500: {
    en: "SouthChungcheong Boryeong",
    kr: "충청남도 보령시",
  },
  120600: {
    en: "SouthChungcheong Seosan",
    kr: "충청남도 서산시",
  },
  120700: {
    en: "SouthChungcheong Asan",
    kr: "충청남도 아산시",
  },
  120800: {
    en: "SouthChungcheong Cheonan",
    kr: "충청남도 천안시",
  },
  120900: {
    en: "SouthChungcheong Geumsan",
    kr: "충청남도 금산군",
  },
  121000: {
    en: "SouthChungcheong Buyeo",
    kr: "충청남도 부여군",
  },
  121100: {
    en: "SouthChungcheong Seocheon",
    kr: "충청남도 서천군",
  },
  121200: {
    en: "SouthChungcheong Yesan",
    kr: "충청남도 예산군",
  },
  121300: {
    en: "SouthChungcheong Cheongyang",
    kr: "충청남도 청양군",
  },
  121400: {
    en: "SouthChungcheong Taean",
    kr: "충청남도 태안군",
  },
  121500: {
    en: "SouthChungcheong Hongseong",
    kr: "충청남도 홍성군",
  },
  130000: {
    en: "NorthGyeongsang",
    kr: "경상북도",
  },
  130100: {
    en: "NorthGyeongsang Gyeongsan",
    kr: "경상북도 경산시",
  },
  130200: {
    en: "NorthGyeongsang Gyeongju",
    kr: "경상북도 경주시",
  },
  130300: {
    en: "NorthGyeongsang Gumi",
    kr: "경상북도 구미시",
  },
  130400: {
    en: "NorthGyeongsang Gimcheon",
    kr: "경상북도 김천시",
  },
  130500: {
    en: "NorthGyeongsang Mungyeong",
    kr: "경상북도 문경시",
  },
  130600: {
    en: "NorthGyeongsang Sangju",
    kr: "경상북도 상주시",
  },
  130700: {
    en: "NorthGyeongsang Andong",
    kr: "경상북도 안동시",
  },
  130800: {
    en: "NorthGyeongsang Yeongju",
    kr: "경상북도 영주시",
  },
  130900: {
    en: "NorthGyeongsang Yeongcheon",
    kr: "경상북도 영천시",
  },
  131000: {
    en: "NorthGyeongsang Pohang",
    kr: "경상북도 포항시",
  },
  131100: {
    en: "NorthGyeongsang Goryeong",
    kr: "경상북도 고령군",
  },
  131200: {
    en: "NorthGyeongsang Gunwi",
    kr: "경상북도 군위군",
  },
  131300: {
    en: "NorthGyeongsang Bonghwa",
    kr: "경상북도 봉화군",
  },
  131400: {
    en: "NorthGyeongsang Seongju",
    kr: "경상북도 성주군",
  },
  131500: {
    en: "NorthGyeongsang Yeongdeok",
    kr: "경상북도 영덕군",
  },
  131600: {
    en: "NorthGyeongsang Yeongyang",
    kr: "경상북도 영양군",
  },
  131700: {
    en: "NorthGyeongsang Yecheon",
    kr: "경상북도 예천군",
  },
  131800: {
    en: "NorthGyeongsang Ulleung",
    kr: "경상북도 울릉군",
  },
  131900: {
    en: "NorthGyeongsang Uljin",
    kr: "경상북도 울진군",
  },
  132000: {
    en: "NorthGyeongsang Uiseong",
    kr: "경상북도 의성군",
  },
  132100: {
    en: "NorthGyeongsang Cheongdo",
    kr: "경상북도 청도군",
  },
  132200: {
    en: "NorthGyeongsang Cheongsong",
    kr: "경상북도 청송군",
  },
  132300: {
    en: "NorthGyeongsang Chilgok",
    kr: "경상북도 칠곡군",
  },
  140000: {
    en: "SouthGyeongsang",
    kr: "경상남도",
  },
  140100: {
    en: "SouthGyeongsang Geoje",
    kr: "경상남도 거제시",
  },
  140200: {
    en: "SouthGyeongsang Gimhae",
    kr: "경상남도 김해시",
  },
  140300: {
    en: "SouthGyeongsang Miryang",
    kr: "경상남도 밀양시",
  },
  140400: {
    en: "SouthGyeongsang Sacheon",
    kr: "경상남도 사천시",
  },
  140500: {
    en: "SouthGyeongsang Yangsan",
    kr: "경상남도 양산시",
  },
  140600: {
    en: "SouthGyeongsang Jinju",
    kr: "경상남도 진주시",
  },
  140700: {
    en: "SouthGyeongsang Changwon",
    kr: "경상남도 창원시",
  },
  140800: {
    en: "SouthGyeongsang Tongyeong",
    kr: "경상남도 통영시",
  },
  140900: {
    en: "SouthGyeongsang Geochang",
    kr: "경상남도 거창군",
  },
  141000: {
    en: "SouthGyeongsang Goseong",
    kr: "경상남도 고성군",
  },
  141100: {
    en: "SouthGyeongsang Namhae",
    kr: "경상남도 남해군",
  },
  141200: {
    en: "SouthGyeongsang Sancheong",
    kr: "경상남도 산청군",
  },
  141300: {
    en: "SouthGyeongsang Uiryeong",
    kr: "경상남도 의령군",
  },
  141400: {
    en: "SouthGyeongsang Changnyeong",
    kr: "경상남도 창녕군",
  },
  141500: {
    en: "SouthGyeongsang Hadong",
    kr: "경상남도 하동군",
  },
  141600: {
    en: "SouthGyeongsang Haman",
    kr: "경상남도 함안군",
  },
  141700: {
    en: "SouthGyeongsang Hamyang",
    kr: "경상남도 함양군",
  },
  141800: {
    en: "SouthGyeongsang Hapcheon",
    kr: "경상남도 합천군",
  },
  150000: {
    en: "NorthJeolla",
    kr: "전라북도",
  },
  150100: {
    en: "NorthJeolla Gunsan",
    kr: "전라북도 군산시",
  },
  150200: {
    en: "NorthJeolla Gimje",
    kr: "전라북도 김제시",
  },
  150300: {
    en: "NorthJeolla Namwon",
    kr: "전라북도 남원시",
  },
  150400: {
    en: "NorthJeolla Iksan",
    kr: "전라북도 익산시",
  },
  150500: {
    en: "NorthJeolla Jeonju",
    kr: "전라북도 전주시",
  },
  150600: {
    en: "NorthJeolla Jeongeup",
    kr: "전라북도 정읍시",
  },
  150700: {
    en: "NorthJeolla Gochang",
    kr: "전라북도 고창군",
  },
  150800: {
    en: "NorthJeolla Muju",
    kr: "전라북도 무주군",
  },
  150900: {
    en: "NorthJeolla Buan",
    kr: "전라북도 부안군",
  },
  151000: {
    en: "NorthJeolla Sunchang",
    kr: "전라북도 순창군",
  },
  151100: {
    en: "NorthJeolla Wanju",
    kr: "전라북도 완주군",
  },
  151200: {
    en: "NorthJeolla Imsil",
    kr: "전라북도 임실군",
  },
  151300: {
    en: "NorthJeolla Jangsu",
    kr: "전라북도 장수군",
  },
  151400: {
    en: "NorthJeolla Jinan",
    kr: "전라북도 진안군",
  },
  160000: {
    en: "SouthJeolla",
    kr: "전라남도",
  },
  160100: {
    en: "SouthJeolla Gwangyang",
    kr: "전라남도 광양시",
  },
  160200: {
    en: "SouthJeolla Naju",
    kr: "전라남도 나주시",
  },
  160300: {
    en: "SouthJeolla Mokpo",
    kr: "전라남도 목포시",
  },
  160400: {
    en: "SouthJeolla Suncheon",
    kr: "전라남도 순천시",
  },
  160500: {
    en: "SouthJeolla Yeosu",
    kr: "전라남도 여수시",
  },
  160600: {
    en: "SouthJeolla Gangjin",
    kr: "전라남도 강진군",
  },
  160700: {
    en: "SouthJeolla Goheung",
    kr: "전라남도 고흥군",
  },
  160800: {
    en: "SouthJeolla Gokseong",
    kr: "전라남도 곡성군",
  },
  160900: {
    en: "SouthJeolla Gurye",
    kr: "전라남도 구례군",
  },
  161000: {
    en: "SouthJeolla Damyang",
    kr: "전라남도 담양군",
  },
  161100: {
    en: "SouthJeolla Muan",
    kr: "전라남도 무안군",
  },
  161200: {
    en: "SouthJeolla Boseong",
    kr: "전라남도 보성군",
  },
  161300: {
    en: "SouthJeolla Sinan",
    kr: "전라남도 신안군",
  },
  161400: {
    en: "SouthJeolla Yeonggwang",
    kr: "전라남도 영광군",
  },
  161500: {
    en: "SouthJeolla Yeongam",
    kr: "전라남도 영암군",
  },
  161600: {
    en: "SouthJeolla Wando",
    kr: "전라남도 완도군",
  },
  161700: {
    en: "SouthJeolla Jangseong",
    kr: "전라남도 장성군",
  },
  161800: {
    en: "SouthJeolla Jangheung",
    kr: "전라남도 장흥군",
  },
  161900: {
    en: "SouthJeolla Jindo",
    kr: "전라남도 진도군",
  },
  162000: {
    en: "SouthJeolla Hampyeong",
    kr: "전라남도 함평군",
  },
  162100: {
    en: "SouthJeolla Haenam",
    kr: "전라남도 해남군",
  },
  162200: {
    en: "SouthJeolla Hwasun",
    kr: "전라남도 화순군",
  },
  170000: {
    en: "Jeju",
    kr: "제주특별자치도",
  },
  170100: {
    en: "Jeju Seogwipo",
    kr: "제주특별자치도 서귀포시",
  },
  170200: {
    en: "Jeju Jeju",
    kr: "제주특별자치도 제주시",
  },
};
