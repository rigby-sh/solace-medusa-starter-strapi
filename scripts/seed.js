const axios = require('axios');

// API токен для доступа к Strapi.
const STRAPI_API_TOKEN = 'bb814f867c245d124da040bb9b20fb99fd795d1f74150224da7b3cf9a69c6cbb11a00042d60d631ee50077bdb5cb7c0de5fb41de201f1259571984a95f782e04d614f69f17b87b367b4835327db3120569e96c807231b3556626aa84d0a0818235bd5cbc506e782433e3b28b6950fb0896d50421da43d62a86605be4e92c9b20';
const STRAPI_URL = 'http://localhost:1337/api';

const headers = {
  Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  'Content-Type': 'application/json',
};

const servicePageData = {
  data: {
    title: "Забота о клиентах",
    subTitle: "Уважаемый покупатель, благодарим вас за выбор бытовой техники BERTAZZONI.",
    request_block_title: "Заявка на сервисное обслуживание",
    request_block_description: "Вы можете направить сообщение или оставить заявку:",
    request_block_phone: "+7 (499) 719-19-89",
    request_block_button_text: "Оставить заявку",
    request_block_email_text: "Написать: service@koros-kitchen.com",
    installation_block_title: "По вопросам установки и подключения бытовой техники:",
    installation_block_comment: "(кроме газовых приборов)",
    installation_block_name: "СЦ БытМонтаж",
    installation_block_phone: "+7-985-854-14-46",
    installation_block_website: "www.bytmg.ru",
    installation_block_note: "Обращаем Ваше внимание, что подключение и установка производится к готовым коммуникациям",
    centers_list_title: "Центры сервисного обслуживания"
  }
};

const serviceCenters = [
  { city: 'Москва', name: 'ООО "МИКСТЕХ"', phone: '8 800 2222-679' },
  { city: 'Москва', name: 'ИП Федотов (СЦ Горсервис)', phone: '+7 926 564 19 30', comment: 'кроме холодильников' },
  { city: 'Москва', name: 'Совинсервис', address: '129085, г. Москва, ул. Бочкова, дом 6, корп.2, стр.2', phone: '+7(495) 917-91-08, 8-800-550-10-74' },
  { city: 'Москва', name: 'ООО ТОТ Сервис', phone: '+7 (499) 281-67-83, +7 (499) 281-67-84' },
  { city: 'Москва', name: 'Экспресс-Сервис', phone: '+7 (499) 719-19-89' },
  { city: 'Астрахань', name: 'ИП Пушкин', address: '414024, г. Астрахань, 2-я Дербенская ул, 38Б', phone: '+7 (908) 612-92-61', website: 'https://www.master-i-co.ru' },
  { city: 'Брянск', name: 'Экспресс Сервис', address: '241013, г. Брянск, ул. Молодой Гвардии, д. 20, оф. 1-А', phone: '+7 (483) 236-53-67' },
  { city: 'Владивосток', name: 'ИП Холод Г. В.', address: 'ул. Русская, д.9Б', phone: '+7 (914) 668-68-91' },
  { city: 'Волгоград', name: 'Планета Сервис', address: '400107, г. Волгоград, ул. Рионская, д.3', phone: '+7 (844) 236-64-20', website: 'http://www.planeta-service.ru' },
  { city: 'Воронеж', name: 'ВТЦ "Орбита-Сервис"', phone: '+7 (473) 202-66-70', website: 'www.orbitavrn.ru' },
  { city: 'Грозный', name: 'Алиф', address: '364024, г. Грозный, ул. Маяковского, 17 «в»', phone: '+7 (871) 222-49-21' },
  { city: 'Екатеринбург', name: 'ИП Пруткин (ТК Сервис)', address: '620030, г. Екатеринбург, ул. Карьерная, д. 26, оф. 4', phone: '+7 (343) 319-40-96' },
  { city: 'Иваново', name: 'ООО «ЭкспертБытСервис»', address: 'ул. Смирнова, д.13', phone: '+7(4932)32-95-05, 8-962-163-39-49', comment: '(кроме кофемашин)', website: 'ex-bs.ru' },
  { city: 'Калининград', name: 'РемТехСервис', address: 'ул. Судостроительная, 75', phone: '8(4012)303-800' },
  { city: 'Краснодар', name: 'ИП Бабаков А.А. (БАТ-Сервис)', address: '350087, г. Краснодар, ул. Белозерная, 1\\1', phone: '+7 (918) 102-00-10' },
  { city: 'Курган', name: 'Заурал Монтаж Сервис', address: '640018, г. Курган, ул. Пичугина, д. 9', phone: '+7 (352) 260-49-04' },
  { city: 'Минск', name: 'Техноадрия-сервис', address: '220123, Республика Беларусь, г. Минск, ул. М. Богдановича, д. 60', phone: '+375 (17) 243-60-11' },
  { city: 'Нижний Новогород', name: 'Симона СЦ', address: '603074, г. Нижний Новгород, Сормовское шоссе, д. 15 А', phone: '+7 (831) 241-47-20', website: 'https://simona-service.ru' },
  { city: 'Новосибирск', name: 'ЭН-студио', address: '630132, г. Новосибирск, улица Железнодорожная, 14', phone: '+7 (383) 221-42-16' },
  { city: 'Орел', name: 'ИП Жигунов (Орел-Сервис)', address: '302043, г. Орел, ул. Комсомольская, д. 241', phone: '+7 (486) 272-16-95' },
  { city: 'Оренбург', name: 'ИП Тюшевский А.В. ("Эксперт-Сервис")', address: '460050, г. Оренбург, ул. Ноябрьская, 43/2-110 (помещение №3)', phone: '+7 (353) 261-11-38', website: 'https://expertservice56.business.site/' },
  { city: 'Пенза', name: 'Максимум Сервиса ПНЗ', address: '440008, г. Пенза, ул. Суворова, д. 145А', phone: '+7 (841) 220-60-90', website: 'https://max-of-service.ru' },
  { city: 'Пермь', name: 'ИП Юдин С.В. (Евросервис)', address: '614068, г. Пермь, ул. Крисанова, д. 29', phone: '+7 (342) 238-33-80', website: 'https://esperm.ru/' },
  { city: 'Пятигорск', name: 'ИП Чернявский (Полисервис)', address: '357551, г. Пятигорск, ул.1-я Набережная д.32, корп. 4', phone: '+7 (879) 333-17-29', website: 'http://www.pservice.com.ru' },
  { city: 'Ростов-на-Дону', name: 'ТЦ «Комфорт-Сервис»', address: '344091, г. Ростов-на-Дону, Коммунистический пр-т, 48 Б', phone: '+7 (863) 222-45-51', website: 'http://rembittehrostov.tilda.ws/' },
  { city: 'Самара', name: 'Фирма Сервис-Центр', address: '443096, г. Самара, ул. Мичурина, д. 15, офис 307', phone: '+7 (846) 263-74-74' },
  { city: 'Санкт-Петербург', name: 'А-Сервис', address: '195220, г. Санкт-Петербург, Гражданский проспект д. 4', phone: '+7 (812) 333-41-31' },
  { city: 'Саратов', name: 'Транссервис-Саратов', address: '410008, г. Саратов, ул. Большая Садовая, д. 95', phone: '+7 (845) 252-84-58', website: 'solo_126@mail.ru' },
  { city: 'Смоленск', name: 'Глобал 67', address: '214013, г. Смоленск, ул. Кирова, д. 22 «Д»', phone: '+7 (481) 235-68-01', website: 'https://global67.ru/' },
  { city: 'Ставрополь', name: 'ИП Дьяченко Д.А.', address: '355021, Ставропольский край, г. Ставрополь, ул. Доваторцев, д. 115А', phone: '+7 (865) 228-50-97' },
  { city: 'Тольятти', name: 'СОЛОМОНСЕРВИС', address: '445011, Самарская область г. Тольятти ул. Карла Маркса - 44а', phone: '+7 (848) 277-77-11', website: 'http://solomon-service.ru' },
  { city: 'Томск', name: 'Элит-Сервис', address: '634055, г. Томск, пр. Академический 1, Блок А', phone: '+7 (382) 225-32-12' },
  { city: 'Тюмень', name: 'ИП Аржонухина С.А. (АГАТ)', address: '625032, Тюменская область, г. Тюмень, ул. Гастелло, д. 57, стр. 3, офис 7', phone: '+7 (345) 293-03-71' },
  { city: 'Уфа', name: 'Сервис-Центр Регион', address: '450052, г. Уфа, ул. Аксакова, д.73', phone: '+7 (347) 251-79-79', website: 'www.region-ufa.ru' },
  { city: 'Череповец', name: 'ИП Волков Е.С.', address: '162624, г. Череповец, ул. К. Белова, д. 29 офис № 2', phone: '+7 (820) 228-91-03' },
  { city: 'Ялта', name: 'ИП Пурик А.Н. («АВИ-Электроникс»)', address: '298612, г. Ялта, ул. Жадановского, д. 3', phone: '+7 (978) 861-63-88', website: 'http://avi-electronics.ru/' }
];

async function seedServicePage() {
  try {
    console.log('Updating Service Page...');
    await axios.put(`${STRAPI_URL}/service-page`, servicePageData, { headers });
    console.log('Service Page updated successfully.');
  } catch (error) {
    console.error('Error updating Service Page:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
  }
}

async function seedServiceCenters() {
  console.log('Seeding Service Centers...');
  for (const center of serviceCenters) {
    try {
      await axios.post(`${STRAPI_URL}/service-centers`, { data: center }, { headers });
      console.log(`- Created: ${center.name} in ${center.city}`);
    } catch (error) {
      console.error(`Error creating ${center.name}:`, JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    }
  }
  console.log('Service Centers seeding finished.');
}

async function main() {
  await seedServicePage();
  await seedServiceCenters();
}

main();