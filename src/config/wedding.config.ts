const config = {
  couple: {
    bride: 'Анна',
    groom: 'Владислав',
  },
  event: {
    date: '29 вересня 2026',
    dateShort: '29.09.2026',
    city: 'Київ',
    preText: 'Запрошуємо вас розділити з нами цей особливий день',
    weddingDate: '2026-09-29T14:00:00',
  },
  waitingYou: {
    photo: '/images/background.webp',
  },
  story: [
    { year: '2022', text: 'Перша зустріч на студентській вечірці — ми танцювали до світанку і вже тоді знали, що це щось особливе.' },
    { year: '2023', text: 'Перша спільна подорож до Львова. Кава, бруківка і усвідомлення, що хочемо бути поруч завжди.' },
    { year: '2025', text: 'Заручини на березі Дніпра на світанку. Він сказав «виходь за мене» — вона сказала «так».' },
    { year: '2026', text: 'Ми одружуємося. Дякуємо, що ви з нами в цей найважливіший день нашого життя.' },
  ],
  dresscode: {
    hint: '',
    description:
      'Нам буде дуже приємно, якщо ви підтримаєте кольорову гаму та дрес-код нашого весілля.',
    colors: [
      { name: 'Blue',  img: '/images/dresscode/blue.webp',     textColor: '#ffffff' },
      { name: 'Gold',  img: '/images/dresscode/gold.webp',     textColor: '#ffffff' },
      { name: 'Pink',  img: '/images/dresscode/pink.webp',     textColor: '#6b4f3a' },
      { name: 'Ivory', img: '/images/dresscode/white-v2.webp', textColor: '#6b4f3a' },
    ],
  },
  timeline: [
    { time: '13:00', event: 'Збір гостей', sub: 'Реєстрація та привітання', isDim: false },
    { time: '14:00', event: 'Церемонія', sub: 'Офіційна реєстрація шлюбу', isDim: false },
    { time: '15:00', event: 'Фотосесія', sub: 'Спільні фото з молодятами', isDim: false },
    { time: '16:00', event: 'Банкет', sub: 'Святкова вечеря', isDim: false },
    { time: '20:00', event: 'Танці', sub: 'Вечірня програма', isDim: false },
  ],
  venue: {
    name: 'Villa Riviera',
    description: 'Вишуканий ресторан у центрі міста',
    details: [
      { label: 'Адреса', value: 'вул. Прикладна, 1, Київ' },
      { label: 'Паркінг', value: 'Безкоштовний поруч' },
    ],
    mapLink: 'https://maps.google.com',
    mapIframe: '',
  },
  organizer: {
    name: 'Марія',
    phone: '+380 XX XXX XX XX',
    role: 'Організатор свята',
    note: 'Усі важливі деталі та фотографії будуть у нашому спільному чаті',
    telegramGroup: 'https://t.me/+example',
  },
}

export type WeddingConfig = typeof config
export default config
