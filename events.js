(function () {
  function getInitialMonth() {
    try {
      const url = new URL(window.location.href);
      const fromQuery = Number(url.searchParams.get('moon') || '4');
      if (Number.isFinite(fromQuery) && fromQuery >= 1 && fromQuery <= 12) {
        return fromQuery;
      }
    } catch (e) {}
    return 4; // default April
  }

  // Sample events (April). Replace or extend as needed.
  const EVENTS = [
    { id: 401, month: 4, date: '2025-04-03', time: '19:00-21:00', title: '台南400 城市走讀：府城舊城散策', location: '中西區', url: 'https://tainan400.tainan.gov.tw/', img: '101801.jpg' },
    { id: 402, month: 4, date: '2025-04-06', time: '14:00-16:30', title: '歷史街區導覽｜安平時光', location: '安平區', url: 'https://tainan400.tainan.gov.tw/', img: '101802.jpg' },
    { id: 403, month: 4, date: '2025-04-09', time: '19:00-20:30', title: '文化講座：台南四百的城市想像', location: '永華市政中心', url: 'https://tainan400.tainan.gov.tw/', img: '101803.jpg' },
    { id: 404, month: 4, date: '2025-04-12', time: '10:00-18:00', title: '親子市集 x 綠生活', location: '美術二館廣場', url: 'https://tainan400.tainan.gov.tw/', img: '101804.jpg' },
    { id: 405, month: 4, date: '2025-04-13', time: '17:30-19:00', title: '古蹟音樂會：府城之聲', location: '赤崁樓', url: 'https://tainan400.tainan.gov.tw/', img: '101805.jpg' },
    { id: 406, month: 4, date: '2025-04-17', time: '18:30-21:30', title: '港灣藝術節：海風舞台', location: '安平港', url: 'https://tainan400.tainan.gov.tw/', img: '101806.jpg' },
    { id: 407, month: 4, date: '2025-04-20', time: '11:00-17:00', title: '文創手作市集', location: '神農街', url: 'https://tainan400.tainan.gov.tw/', img: '101807.jpg' },
    { id: 408, month: 4, date: '2025-04-24', time: '19:00-20:30', title: '光影戲劇：府城夜', location: '藍晒圖文創園區', url: 'https://tainan400.tainan.gov.tw/', img: '101808.jpg' },
    { id: 409, month: 4, date: '2025-04-27', time: '10:00-17:00', title: '限定展覽：時間的城市', location: '台南文化中心', url: 'https://tainan400.tainan.gov.tw/', img: '101809.jpg' }
  ];

  const app = Vue.createApp({
    data() {
      return {
        selectedMonth: getInitialMonth(),
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        events: EVENTS
      };
    },
    computed: {
      filteredEvents() {
        return this.events.filter((e) => e.month === this.selectedMonth);
      }
    },
    methods: {
      setMonth(m) {
        this.selectedMonth = m;
        const url = new URL(window.location.href);
        url.searchParams.set('moon', String(m));
        window.history.replaceState({}, '', url.toString());
      },
      formatDate(iso) {
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return iso;
        const mm = String(d.getMonth() + 1).padStart(1, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${mm}/${dd}`;
      }
    }
  });

  app.mount('#events-app');
})();
