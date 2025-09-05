const app = Vue.createApp({
    data() {
     
      return {
        text:'文字',
        activityList2025: [    
          {unit:'國立成功大學規劃與設計學院院長',url:'https://www.up.ncku.edu.tw/portfolio-item/%E5%BC%B5%E5%AD%B8%E8%81%96/',name:'張學聖',ename:'Hsueh-Sheng Chang',img:'張學聖.png',field:'都市及區域規劃、韌性城市與防災規劃、低碳生態城市、空間分析及地理資訊系統',cv1:'國立成功大學都市計劃博士',cv2:'主持人Moderator'},

          {unit:'衍古開發顧問股份有限公司總經理',url:'https://ykupic.com/%E9%97%9C%E6%96%BC%E8%A1%8D%E5%8F%A4-about/',name:'古宜靈',ename:'Yi-Ling Gu',img:'古宜靈.png',field:'臺全球化與地區發展、都市計畫與土地開發、都市更新與資產管理、休閒遊憩與觀光發展策略、文化產業與環境規劃',cv1:'英國雪菲爾大學都市及區域計畫學系博士後研究',cv2:'發表人Presenter'},

          {unit:'國立成功大學都市計劃學系教授',url:'https://www.up.ncku.edu.tw/portfolio-item/%E8%B6%99%E5%AD%90%E5%85%83/',name:'趙子元',ename:'Tzu-Yuan Chao',img:'趙子元.png',field:'國土規劃制度與法令、氣候變遷調適與環境法令、高齡友善城市規劃與行為研究、都市更新與開發',cv1:'英國諾丁漢大學營建環境學院博士',cv2:'發表人Presenter'},

          {unit:'屏東縣政府城鄉發展處',url:'https://www.up.ncku.edu.tw/portfolio-item/%E9%99%B3%E5%BF%97%E5%AE%8F/',name:'陳志宏',ename:'Chih-Hung Chen',img:'陳志宏.png',field:'都市計畫、都市設計、都市更新、文化地景保存操作、鄉村地區整體規劃、都市形態研究',cv1:'德國德勒斯登工業大學工學博士',cv2:'發表人Presenter'},

          {unit:'臺南市政府地政局長',url:'https://land.tainan.gov.tw/cp.aspx?n=29653',name:'陳淑美',ename:'Shu-Mei Chen',img:'陳淑美.png',field:'不動產投資、不動產市場研究、不動產登記、住宅經濟與政策',cv1:'國立政治大學地政學研究所博士',cv2:'主持人Moderator'},

          {unit:'國立成功大學社會科學院院長暨經濟學系教授',url:'https://researchoutput.ncku.edu.tw/en/persons/chun-li-tsai',name:'蔡群立',ename:'Chun-Li Tsai',img:'蔡群立.png',field:'財務經濟學、貨幣經濟學',cv1:'美國德州農工大學經濟學博士',cv2:'發表人Presenter'},

          {unit:'國立成功大學測量及空間資訊學系暨研究所副教授',url:'https://researchoutput.ncku.edu.tw/en/persons/pei-fen-kuo',name:'郭佩棻',ename:'Pei-fen Kuo',img:'郭佩棻.png',field:'代理人基模型、地理資訊系統應用、人類空間行為與移動、空間資料探勘、空間統計',cv1:'美國德州農工大學土木工程博士',cv2:'發表人Presenter'},


        
          {unit:'國立成功大學學生事務處副學生事務長',url:'https://researchoutput.ncku.edu.tw/en/persons/wan-ju-yeh',name:'葉婉如',ename:'Wan-Ju Yeh',img:'葉婉如.png',field:'民事財產法、工程契約法、政府採購法制、民事科技法、不動產法制、消費者保護法制等',cv1:'德國哥廷根大學法學博士',cv2:'發表人Presenter'},

          {unit:'國立臺北大學公共事務學院院長',url:'https://new.ntpu.edu.tw/public-affairs/dean?lang=zh',name:'陳明燦',ename:'Ming-Can Chen',img:'陳明燦.png',field:'土地法、土地利用計畫法、土地重劃、土地徵收、法律經濟分析',cv1:'德國波昂大學農業政策研究所農學博士',cv2:'主持人Moderator'},

          {unit:'臺南市政府交通局長',url:'https://traffic.tainan.gov.tw/StaticPage/ChiefIntroduction',name:'王銘德',ename:'Ming-De Wang',img:'王銘德.png',field:'交通',cv1:'國立交通大學交通運輸研究所博士',cv2:'發表人Presenter'},

          {unit:'前台北市都市發展局局長',url:'hhttps://zh.wikipedia.org/zh-tw/%E6%9E%97%E6%B4%B2%E6%B0%91',name:'林洲民',ename:'Citizen LIN',img:'林洲民.png',field:'交通',cv1:'國哥倫比亞大學建築及都市設計碩士',cv2:'發表人Presenter'},

          {unit:'臺北市、桃園市、高雄市促進民間參與公共建設推動委員會/委員',url:'https://www.up.ncku.edu.tw/portfolio-item/%E8%B6%99%E6%AD%A3%E7%BE%A9/',name:'趙正義',ename:'Jheng-Yi Jhao',img:'趙正義.png',field:'不動產財務規劃、市場評估、不動產估價、土地開發策略規劃、不動產招商、物業管理、都市更新、促參及聯合開發投資規劃',cv1:'美國威斯康辛大學都市及區域規劃碩士',cv2:'發表人Presenter'},

        
  
         
    
  
        
  
  
         
  

          ],
      };
    },
    methods: {
      openModal(index) {
        const modalId = '#lineupModal' + index;
        $(modalId).modal('show');
      }
    }
  });
  
  app.mount('#app');
