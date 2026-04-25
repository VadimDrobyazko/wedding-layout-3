const config = {
  couple: {
    bride: 'Анна',
    groom: 'Владислав',
  },
  event: {
    date: '7 вересня 2025',
    dateShort: '07.09.2025',
    city: 'Київ',
    preText: 'Запрошуємо вас розділити з нами цей особливий день',
    weddingDate: '2026-09-07T14:00:00',
  },
  waitingYou: {
    photo: 'demo/couple.jpg',
  },
  dresscode: {
    hint: 'Ми будемо раді бачити вас у вбранні в теплих тонах',
    description:
      'Наша палітра — це відтінки піску, молочного, бежевого та теракоти. Уникайте яскравих кольорів та білого — залиште білий для нареченої.',
    palette: ['#FFFFFF', '#F5F2EE', '#E6DED4', '#CDBBA8', '#A4876A', '#6B4F3A'],
  },
  timeline: [
    { time: '13:00', event: 'Збір гостей', sub: 'Реєстрація та привітання', isDim: false },
    { time: '14:00', event: 'Церемонія', sub: 'Офіційна реєстрація шлюбу', isDim: false },
    { time: '15:00', event: 'Фотосесія', sub: 'Спільні фото з молодятами', isDim: false },
    { time: '16:00', event: 'Банкет', sub: 'Святкова вечеря', isDim: false },
    { time: '20:00', event: 'Танці', sub: 'Вечірня програма', isDim: false },
  ],
  venue: {
    name: 'Назва ресторану',
    description: 'Вишуканий ресторан у центрі міста',
    details: [
      { label: 'Адреса', value: 'вул. Прикладна, 1, Київ' },
      { label: 'Паркінг', value: 'Безкоштовний поруч' },
    ],
    mapIframe: '',
  },
  organizer: {
    name: 'Марія',
    phone: '+380 XX XXX XX XX',
    role: 'Організатор свята',
    note: 'З усіх питань звертайтесь до організатора',
  },
}

export type WeddingConfig = typeof config
export default config
