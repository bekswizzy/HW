const user = {
  name: "Богдан",
  surname: "Колосар",
  userPhoto: "mephoto.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Автомобіль моєї мрії" },
    { src: "home.jpg", alt: "Домівка на місяці" },
    { src: "voyage.jpg", alt: "Подорож до космосу" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  600,
  700,
  800,
  1000,
  1300,
  1500,
  1900,
  2100,
  2400,
  2900,
  3000,
  3500,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "CSS" },
  { month: "Серпень", skill: "HTML" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Гнучкість" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
