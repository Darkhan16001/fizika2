
"use strict";

/* ==========================================
 PHYSICS LAB 3.1.2 — BY DARKHAN
 Электр заряды. Зарядтың сақталуы. Кулон заңы.
========================================== */

const $ = id => document.getElementById(id);

const esc = value => String(value)
  .replaceAll("&","&amp;")
  .replaceAll("<","&lt;")
  .replaceAll(">","&gt;")
  .replaceAll('"',"&quot;");

/* Формуладағы индекстер HTML арқылы жазылады.
   Ескі Unicode вектор таңбаларын қолданбаймыз. */

const fraction = (a,b) =>
  `<span class="frac"><span>${a}</span><span>${b}</span></span>`;

const FORMULA = {
  charge:"q = ne",
  conservation:"q<sub>1</sub> + q<sub>2</sub> = Q",
  coulomb:`F = k${fraction("|q<sub>1</sub>q<sub>2</sub>|","r<sup>2</sup>")}`,
  distance:`r = &radic;(${fraction("k|q<sub>1</sub>q<sub>2</sub>|","F")})`,
  spheres:`q' = ${fraction("q<sub>1</sub> + q<sub>2</sub>","2")}`,
  vector:`<span class="vec">F</span><sub>12</sub>
          = -<span class="vec">F</span><sub>21</sub>`
};

const lesson = {
  title:"Электр заряды. Зарядтың сақталу заңы. Кулон заңы",

  theory:[
    {
      title:"Электр заряды дегеніміз не?",
      definition:"Электр заряды — денелер мен элементар бөлшектердің электромагниттік өзара әсерлесуге қатысуын сипаттайтын физикалық шама.",
      detail:"Барлық зат атомдардан тұрады. Атом құрамындағы протондар оң, ал электрондар теріс зарядталған. Олардың зарядтарының модульдері бірдей. Егер денедегі оң және теріс зарядтар теңгерілсе, дененің жалпы заряды нөлге тең болады. Ал дене электрондарды алса немесе жоғалтса, электрленуі мүмкін. Зарядталған денелер айналасында электр өрісі туады, сол өріс арқылы олар бір-біріне әсер етеді. Зарядтың SI жүйесіндегі өлшем бірлігі — кулон.",
      formula:"q — Кл",
      example:"Электрондар артық болғанда дене теріс зарядталады.",
      warning:"Электр заряды мен электр тогын шатастырмаңдар.",
      visual:"generator"
    },
    {
      title:"Аттас және әр аттас зарядтар",
      definition:"Бірдей таңбалы зарядтар бір-бірін тебеді, ал таңбалары қарама-қарсы зарядтар бір-біріне тартылады.",
      detail:"Екі оң заряд немесе екі теріс заряд жақындағанда олардың арасында тебілу күші пайда болады. Ал оң және теріс зарядтар арасында тартылу күші әсер етеді. Бұл күштер зарядтарды қосатын түзу бойымен бағытталады. Екі зарядтың бір-біріне түсіретін күштері модульдері бойынша тең, бағыттары бойынша қарама-қарсы. Мұны Ньютонның үшінші заңы арқылы да түсіндіруге болады.",
      formula:FORMULA.vector,
      example:"+3 мкКл және −5 мкКл зарядтар тартылады.",
      warning:"Кулон күшінің модулі теріс болмайды.",
      visual:"forces"
    },
    {
      title:"Электрлену әдістері",
      definition:"Электрлену — дененің электр зарядына ие болуы немесе оның ішіндегі зарядтардың қайта бөлінуі.",
      detail:"Денелер үйкеліс, жанасу және электростатикалық индукция арқылы электрленуі мүмкін. Үйкеліс кезінде материалдар арасында электрондар ауысады. Жанасу кезінде екі өткізгіш арасында заряд қайта бөлінеді. Индукция кезінде сыртқы электр өрісінің әсерінен өткізгіштегі еркін зарядтар бір жаққа ығысады. Индукция құбылысында өткізгіштің жалпы заряды өзгермеуі мүмкін, тек ішкі зарядтар орналасуы өзгереді.",
      formula:"Үйкеліс • Жанасу • Индукция",
      example:"Электрленген тарақтың ұсақ қағаз қиындыларын тартуы.",
      warning:"Электрленудің барлық түрінде жаңа заряд пайда болады деуге болмайды.",
      visual:"induction"
    },
    {
      title:"Элементар заряд",
      definition:"Элементар заряд — протон зарядының оң мәніне тең болатын іргелі электр зарядының модулі.",
      detail:"Элементар заряд e әрпімен белгіленеді. Оның дәл мәні 1,602176634·10⁻¹⁹ Кл. Электрон заряды −e, ал протон заряды +e. Дененің заряды элементар зарядтың бүтін еселігімен өрнектеледі. Бұл құбылыс зарядтың квантталуы деп аталады. Мысалы, бір миллион артық электрон бар дененің заряды шамамен −1,602·10⁻¹³ Кл болады.",
      formula:FORMULA.charge,
      example:"Артық 10⁶ электрон: q=−10⁶e≈−1,602·10⁻¹³ Кл.",
      warning:"Зарядты таситын электрон саны бүтін сан болуы тиіс.",
      visual:"particles"
    },
    {
      title:"Зарядтың сақталу заңы",
      definition:"Электрлік оқшауланған жүйедегі зарядтардың алгебралық қосындысы тұрақты болып қалады.",
      detail:"Заряд денелер арасында ауысуы және қайта бөлінуі мүмкін, бірақ электрлік оқшауланған жүйедегі жалпы заряд сақталады. Бастапқы жалпы заряд соңғы жалпы зарядқа тең. Есеп шығарғанда оң және теріс зарядтарды таңбаларын ескеріп қосу керек. Мысалы, +8 мкКл және −3 мкКл зарядтардың қосындысы +5 мкКл. Жүйедегі зарядтардың қайта бөлінуі осы нәтижені өзгертпейді.",
      formula:FORMULA.conservation,
      example:"+12 мкКл және −4 мкКл зарядтардың жалпысы +8 мкКл.",
      warning:"Зарядтарды абсолют мәнімен қосуға болмайды.",
      visual:"conservation"
    },
    {
      title:"Кулон заңы",
      definition:"Кулон заңы — вакуумдегі тыныштықтағы екі нүктелік заряд арасындағы электрлік әсерлесу күшінің модулін анықтайтын заң.",
      detail:"Екі заряд арасындағы электр күші олардың зарядтарының модульдері көбейтіндісіне тура пропорционал. Ал зарядтардың арақашықтығының квадратына кері пропорционал. Кулон заңының коэффициенті вакуумде k≈9·10⁹ Н·м²/Кл². Егер зарядтардың арақашықтығы артса, әсерлесу күші азаяды. Зарядтардың таңбасы күштің тартылу немесе тебілу түрін анықтайды.",
      formula:FORMULA.coulomb,
      example:"|q₁|=2 мкКл, |q₂|=3 мкКл, r=0,3 м болса, F≈0,6 Н.",
      warning:"Барлық берілгендерді SI жүйесіне айналдырыңдар.",
      visual:"coulomb"
    },
    {
      title:"Кулон заңы және арақашықтық",
      definition:"Зарядтар өзгермеген жағдайда Кулон күші арақашықтықтың квадратына кері пропорционал.",
      detail:"Екі заряд арасындағы арақашықтық екі есе артса, олардың өзара әсерлесу күші төрт есе кемиді. Қашықтық үш есе артса, күш тоғыз есе кемиді. Қашықтықты екі есе қысқартқанда күш төрт есе ұлғаяды. Бұл тәуелділік квадратқа кері пропорционалдық деп аталады және электр өрісіне қатысты есептерде маңызды.",
      formula:`F &prop; ${fraction("1","r<sup>2</sup>")}`,
      example:"r=0,2 м кезінде F=8 Н болса, r=0,4 м кезінде F=2 Н.",
      warning:"Қашықтық екі есе артқанда күш екі есе емес, төрт есе кемиді.",
      visual:"distance"
    },
    {
      title:"Арақашықтықты есептеу",
      definition:"Кулон күшінің формуласы арқылы екі заряд арасындағы арақашықтықты анықтауға болады.",
      detail:"Егер екі заряд модульдері және олардың әсерлесу күшінің модулі белгілі болса, алдымен Кулон заңынан r² шамасын жеке шығарамыз. Одан кейін квадрат түбір аламыз. Бұл үшін калькулятордағы түбір және дәреже амалдары пайдаланылады. Есептеу алдында микрокулонды кулонға айналдыру керек. Соңғы жауап метрмен жазылады.",
      formula:FORMULA.distance,
      example:"|q₁|=3 мкКл, |q₂|=6 мкКл, F=1,8 Н болса, r=0,3 м.",
      warning:"Күш пен заряд модульдері оң мәндермен есептеледі.",
      visual:"distance"
    },
    {
      title:"Бірдей өткізгіш шарлардың жанасуы",
      definition:"Бірдей екі өткізгіш шар жанасып, электростатикалық тепе-теңдікке келгенде олардың соңғы зарядтары тең болады.",
      detail:"Екі бірдей металл шардың бастапқы зарядтары әртүрлі болуы мүмкін. Олар жанасқанда электрондардың қайта бөлінуі жүреді. Оқшауланған жүйедегі толық заряд өзгермейді. Шарлар бірдей болғандықтан, тепе-теңдік орнағаннан кейін олардың зарядтары тең болады. Сондықтан әр шардың соңғы заряды бастапқы екі зарядтың қосындысының жартысына тең. Зарядтардың таңбасы міндетті түрде ескеріледі.",
      formula:FORMULA.spheres,
      example:"+10 мкКл және −4 мкКл шарлар жанасса, соңында әрқайсысында +3 мкКл болады.",
      warning:"Бұл қарапайым формула бірдей өткізгіш шарлар үшін қолданылады.",
      visual:"spheres"
    },
    {
      title:"Физикалық есепті дұрыс шығару",
      definition:"Физикалық есепте берілгендерді жазу, SI жүйесіне айналдыру, формуланы түрлендіру және нәтижені тексеру қажет.",
      detail:"Есептің шартын оқып, берілген шамаларды бөлек жазамыз. Нені табу керек екенін белгілейміз. Микрокулонды кулонға, сантиметрді метрге айналдырамыз. Содан кейін қажетті формуланы таңдап, белгісіз шаманы жеке шығарамыз. Сандарды формулаға қойып, калькулятор көмегімен есептейміз. Жауапты өлшем бірлігімен жазып, зарядтардың тартылу немесе тебілу түрін қажет болса түсіндіреміз.",
      formula:"Берілгені → SI → Формула → Шешуі → Жауабы",
      example:"4,5 мкКл = 4,5·10⁻⁶ Кл; 12 см = 0,12 м.",
      warning:"Кулон заңында SI жүйесін қолданбау өте үлкен қателікке әкеледі.",
      visual:"units"
    }
  ],

  notes:[
    ["Электр заряды","Денелер мен бөлшектердің электромагниттік әсерлесуін сипаттайтын шама.","q — Кл.","Оң және теріс зарядтар болады."],
    ["Зарядтардың әсерлесуі","Бірдей таңбалы зарядтар тебіледі, қарама-қарсы таңбалы зарядтар тартылады.","q₁q₂>0 — тебілу; q₁q₂<0 — тартылу.","Күш модулі теріс болмайды."],
    ["Элементар заряд","Протонның заряды оң, электронның заряды теріс және модульдері бірдей.","e=1,602176634·10⁻¹⁹ Кл.","Электрон заряды −e."],
    ["Заряд квантталуы","Заряд элементар зарядтың бүтін еселігі болады.","q=ne.","n бүтін сан."],
    ["Электрлену","Үйкеліс, жанасу және индукция кезінде зарядтар ауысады немесе қайта бөлінеді.","Үйкеліс • Жанасу • Индукция.","Заряд сақталады."],
    ["Зарядтың сақталуы","Оқшауланған жүйедегі зарядтардың алгебралық қосындысы өзгермейді.","Σq=const.","Оң және теріс таңбаларды ескеріңдер."],
    ["Кулон заңы","Вакуумдегі екі тыныштықтағы нүктелік зарядтың әсерлесу күші олардың зарядтары мен арақашықтығына тәуелді.","F=k|q₁q₂|/r².","r метрмен алынады."],
    ["Кулон коэффициенті","Вакуумдегі Кулон заңына кіретін тұрақты коэффициент.","k≈9·10⁹ Н·м²/Кл².","Орта өзгерсе, коэффициент те өзгеруі мүмкін."],
    ["Арақашықтықтың әсері","Кулон күші зарядтар арақашықтығының квадратына кері пропорционал.","F∝1/r².","r екі есе артса, F төрт есе азаяды."],
    ["Бірдей металл шарлар","Бірдей өткізгіш шарлар жанасқанда толық заряд сақталып, соңғы зарядтары тең болады.","q′=(q₁+q₂)/2.","Зарядтарды таңбасымен қосыңдар."]
  ],

  problems:[
    [
      ["+8 мкКл және −3 мкКл зарядтарының қосындысын табыңдар.","q₁=+8 мкКл; q₂=−3 мкКл","Q","Q=8−3=+5 мкКл."],
      ["1 мкКл және 2 мкКл зарядтардың арасы 0,3 м. Кулон күшінің модулін табыңдар.","|q₁|=1·10⁻⁶ Кл; |q₂|=2·10⁻⁶ Кл; r=0,3 м","F","F=9·10⁹·1·10⁻⁶·2·10⁻⁶/0,3²=0,2 Н."],
      ["Бірдей металл шарлардың зарядтары +6 мкКл және +2 мкКл. Жанасқаннан кейін әр шарда қанша заряд қалады?","q₁=+6 мкКл; q₂=+2 мкКл","q′","q′=(6+2)/2=+4 мкКл."],
      ["Жүйенің жалпы заряды +12 мкКл. Бірінші заряд +17 мкКл болса, екіншісін табыңдар.","Q=+12 мкКл; q₁=+17 мкКл","q₂","q₂=12−17=−5 мкКл."]
    ],
    [
      ["Бірдей шарларда +10 мкКл және −4 мкКл заряд бар. Жанасқаннан кейін әр шардың зарядын табыңдар.","q₁=+10 мкКл; q₂=−4 мкКл","q′","q′=(10−4)/2=+3 мкКл."],
      ["|q₁|=3 мкКл, |q₂|=6 мкКл, F=1,8 Н. Арақашықтықты табыңдар.","|q₁|=3·10⁻⁶ Кл; |q₂|=6·10⁻⁶ Кл; F=1,8 Н","r","r=√(9·10⁹·3·10⁻⁶·6·10⁻⁶/1,8)=0,3 м."],
      ["Екі зарядтың модульдері 4 мкКл, аралары 20 см. Кулон күшін табыңдар.","|q₁|=|q₂|=4·10⁻⁶ Кл; r=0,2 м","F","F=9·10⁹·(4·10⁻⁶)²/(0,2²)=3,6 Н."],
      ["2 мкКл және 5 мкКл зарядтар арасы 0,15 м. Қашықтықты үш есе арттырғанда күш қалай өзгереді?","|q₁|=2·10⁻⁶ Кл; |q₂|=5·10⁻⁶ Кл; r=0,15 м","F₁ және F₂","F₁=4 Н. Жаңа арақашықтық 0,45 м; F₂=4/9≈0,444 Н."]
    ],
    [
      ["Зарядтар +3,6 мкКл және −7,2 мкКл, арасы 8,5 см. Күш модулін және әсерлесу түрін анықтаңдар.","q₁=+3,6·10⁻⁶ Кл; q₂=−7,2·10⁻⁶ Кл; r=0,085 м","F","F≈32,29 Н. Зарядтар тартылады."],
      ["|q₁|=5,2 мкКл, |q₂|=8,7 мкКл. Күш 12,5 Н. Вакуумдегі арақашықтықты анықтаңдар.","|q₁|=5,2·10⁻⁶ Кл; |q₂|=8,7·10⁻⁶ Кл; F=12,5 Н","r","r=√(9·10⁹·5,2·10⁻⁶·8,7·10⁻⁶/12,5)≈0,180 м."],
      ["Бірдей шарларда +18 мкКл және −6 мкКл заряд бар. Жанастырып, 12 см арақашықтыққа ажыратты. Күшті табыңдар.","q₁=+18 мкКл; q₂=−6 мкКл; r=0,12 м","q′ және F","q′=(18−6)/2=+6 мкКл. F=9·10⁹·(6·10⁻⁶)²/(0,12²)=22,5 Н. Тебіледі."],
      ["Бірдей екі оң заряд 25 см арақашықтықта 3,6 Н күшпен тебіледі. Әр зарядтың модулін табыңдар.","q₁=q₂=q; r=0,25 м; F=3,6 Н","q","q=√(Fr²/k)=√(3,6·0,25²/(9·10⁹))=5·10⁻⁶ Кл=5 мкКл."]
    ]
  ],

  quiz:[
    ["Жылдам тест","Электр зарядының SI өлшем бірлігі?",["Ньютон","Кулон","Вольт","Джоуль"],1],
    ["Логика","Аттас зарядтар қалай әсерлеседі?",["Тартылады","Тебіледі","Әсерлеспейді","Жойылады"],1],
    ["Формуланы тап","Кулон заңының формуласы?",["F=ma","F=k|q₁q₂|/r²","A=Fs","U=IR"],1],
    ["Өлшем бірліктері","1 мкКл неше кулон?",["10⁻³","10⁻⁶","10⁶","10⁻⁹"],1],
    ["Кім жылдам?","Протонның заряды қандай?",["Теріс","Оң","Нөл","Өзгермелі"],1],
    ["Қатені тап","Электрон қандай заряд тасиды?",["Оң","Теріс","Нөл","Екеуін де"],1],
    ["Есеп батлы","+8 мкКл және −3 мкКл зарядтардың қосындысы?",["+11 мкКл","+5 мкКл","−5 мкКл","+24 мкКл"],1],
    ["Логикалық сұрақ","Қашықтық екі есе артса, Кулон күші?",["2 есе кемиді","4 есе кемиді","2 есе артады","Өзгермейді"],1],
    ["Калькулятор батлы","|q₁|=1 мкКл, |q₂|=2 мкКл, r=0,3 м. F қанша?",["0,02 Н","0,2 Н","2 Н","20 Н"],1],
    ["Заңды тап","Оқшауланған жүйеде не сақталады?",["Әр дененің жеке заряды","Толық заряд","Әр дененің потенциалы","Кернеулік"],1],
    ["Логика","Қашықтық үш есе кемісе, күш қалай өзгереді?",["3 есе артады","9 есе артады","9 есе кемиді","Өзгермейді"],1],
    ["Формула шебері","Арақашықтықты табу формуласы?",["r=F/kq₁q₂","r=√(k|q₁q₂|/F)","r=kF","r=F²/k"],1],
    ["Шарлар есебі","+6 және −2 мкКл заряды бар бірдей шарлар жанасса, әрқайсысында қанша?",["+4 мкКл","+2 мкКл","−2 мкКл","+8 мкКл"],1],
    ["Физикалық ойлау","Әр аттас зарядтар қалай әсерлеседі?",["Тебіледі","Тартылады","Әсерлеспейді","Қозғалмайды"],1],
    ["Коэффициент","Вакуумдегі k-ның жуық мәні?",["9·10⁻⁹","9·10⁹","9·10³","9·10⁻³"],1],
    ["Есеп сайысы","|q₁|=2 мкКл, |q₂|=4 мкКл, r=0,2 м. F қанша?",["0,18 Н","1,8 Н","18 Н","180 Н"],1],
    ["Капитандар сайысы","Әр заряд модулі екі есе артса, күш қалай өзгереді?",["2 есе артады","4 есе артады","4 есе кемиді","Өзгермейді"],1],
    ["Финал","Кулон күші қай бағытта әсер етеді?",["Перпендикуляр","Зарядтарды қосатын түзу бойымен","Тек жоғары","Кездейсоқ"],1]
  ],

  homework:[
    "Зарядтар +13 мкКл және −8 мкКл. Жалпы зарядты табыңдар.",
    "Бірдей металл шарларда +18 мкКл және −6 мкКл заряд бар. Жанасқаннан кейін әр шардың зарядын табыңдар.",
    "q₁=+4,5 мкКл, q₂=−6,8 мкКл, r=0,12 м. Кулон күшінің модулін және әсерлесу түрін анықтаңдар.",
    "F=0,72 Н, |q₁|=2 мкКл, |q₂|=4 мкКл. Арақашықтықты табыңдар.",
    "Екі бірдей оң заряд 0,18 м арақашықтықта 5 Н күшпен тебіледі. Әр заряд модулін есептеңдер."
  ]
};

/* ==========================================
  КӨРНЕКІ СХЕМАЛАР ЖӘНЕ ФОТОЛАР
========================================== */

const PHOTO_1 =
 "https://commons.wikimedia.org/wiki/Special:FilePath/Van_de_graaff_generator_sm.jpg";

const PHOTO_2 =
 "https://commons.wikimedia.org/wiki/Special:FilePath/Electric_field_between_two_charged_spheres.jpg";

function forceSVG(opposite=false){
 return `<svg viewBox="0 0 420 240">
  <circle cx="110" cy="110" r="34" fill="#e56477"/>
  <circle cx="310" cy="110" r="34"
    fill="${opposite?"#1685ce":"#e56477"}"/>
  <text x="110" y="124" font-size="45"
    text-anchor="middle" fill="white">+</text>
  <text x="310" y="124" font-size="45"
    text-anchor="middle" fill="white">${opposite?"−":"+"}</text>
  <path d="M154 110 H266" stroke="#b3cfe1"
    stroke-width="3" stroke-dasharray="8 6"/>
  ${opposite?`
    <path d="M20 110 H67 M353 110 H400"
      stroke="#087dcc" stroke-width="5"/>
    <path d="M67 110 L48 100 L48 120 Z" fill="#087dcc"/>
    <path d="M353 110 L372 100 L372 120 Z" fill="#087dcc"/>
  `:`
    <path d="M67 110 H20 M353 110 H400"
      stroke="#d8445a" stroke-width="5"/>
    <path d="M20 110 L38 100 L38 120 Z" fill="#d8445a"/>
    <path d="M400 110 L382 100 L382 120 Z" fill="#d8445a"/>
  `}
  <text x="210" y="210" text-anchor="middle"
    font-size="25" fill="#245e84">
    ${opposite?"Тартылу":"Тебілу"}
  </text>
 </svg>`;
}

function svgFor(type){
 if(type==="forces")return forceSVG(false)+forceSVG(true);
 if(type==="coulomb")return forceSVG(false);
 if(type==="distance"){
  return `<svg viewBox="0 0 420 240">
   <circle cx="85" cy="85" r="30" fill="#e55b6a"/>
   <circle cx="335" cy="85" r="30" fill="#e55b6a"/>
   <text x="85" y="98" font-size="39" fill="white"
    text-anchor="middle">+</text>
   <text x="335" y="98" font-size="39" fill="white"
    text-anchor="middle">+</text>
   <path d="M122 85 H297" stroke="#1685ce"
    stroke-width="4" stroke-dasharray="8 7"/>
   <text x="210" y="65" text-anchor="middle"
    font-size="29" fill="#087dcc">r</text>
   <text x="210" y="175" text-anchor="middle"
    font-size="31" fill="#138249">F ~ 1/r²</text>
   <text x="210" y="213" text-anchor="middle"
    font-size="21">r × 2 → F ÷ 4</text>
  </svg>`;
 }
 if(type==="spheres"||type==="conservation"){
  return `<svg viewBox="0 0 420 230">
   <circle cx="100" cy="90" r="60" fill="#ddf0ff"
    stroke="#69add7" stroke-width="3"/>
   <circle cx="320" cy="90" r="60" fill="#e1f8eb"
    stroke="#5bbd8a" stroke-width="3"/>
   <text x="100" y="100" text-anchor="middle"
    font-size="29" fill="#087dcc">+8</text>
   <text x="320" y="100" text-anchor="middle"
    font-size="29" fill="#138249">−3</text>
   <text x="210" y="100" font-size="35"
    text-anchor="middle">+</text>
   <text x="210" y="203" font-size="27"
    text-anchor="middle">Q = +5 мкКл</text>
  </svg>`;
 }
 if(type==="particles"){
  return `<svg viewBox="0 0 420 230">
   <circle cx="115" cy="105" r="65" fill="#ffe3e9"/>
   <circle cx="305" cy="105" r="65" fill="#dcefff"/>
   <text x="115" y="118" text-anchor="middle"
    font-size="42" fill="#c92d48">p+</text>
   <text x="305" y="118" text-anchor="middle"
    font-size="42" fill="#087dcc">e−</text>
   <text x="210" y="207" text-anchor="middle"
    font-size="24">e = 1,602 × 10⁻¹⁹ Кл</text>
  </svg>`;
 }
 if(type==="induction"){
  return `<svg viewBox="0 0 420 220">
   <rect x="25" y="58" width="95" height="105"
     rx="16" fill="#dcefff" stroke="#087dcc"
     stroke-width="3"/>
   <text x="72" y="120" text-anchor="middle"
     font-size="38">+</text>
   <rect x="215" y="58" width="170" height="105"
     rx="20" fill="#eaf8ee" stroke="#2da977"
     stroke-width="3"/>
   <text x="250" y="120" font-size="34">− −</text>
   <text x="325" y="120" font-size="34">+ +</text>
   <text x="210" y="198" text-anchor="middle"
     font-size="21">Зарядтардың қайта бөлінуі</text>
  </svg>`;
 }
 return `<svg viewBox="0 0 420 220">
  <text x="210" y="65" text-anchor="middle"
   font-size="30" fill="#087dcc">мкКл → Кл</text>
  <text x="210" y="125" text-anchor="middle"
   font-size="30" fill="#138249">см → м</text>
  <text x="210" y="186" text-anchor="middle"
   font-size="27" fill="#d23850">SI жүйесі</text>
 </svg>`;
}

function visual(type){
 if(type==="generator"||type==="coulomb"){
  const photo=type==="generator"?PHOTO_1:PHOTO_2;
  return `<div class="visual">
   <img src="${photo}" alt="Электростатика фотосуреті"
    onerror="this.style.display='none';this.nextElementSibling.hidden=false">
   <div hidden>${svgFor(type)}</div>
   <p class="caption">
    ${type==="generator"
     ?"Ван де Грааф электр генераторы"
     :"Екі зарядталған шар арасындағы өріс"}
   </p>
  </div>`;
 }
 return `<div class="visual">${svgFor(type)}</div>`;
}

/* ==========================================
  ОҚУШЫЛАР ЖӘНЕ КОМАНДАЛАР
========================================== */

const initialNames=[
 "Рамазан","Тұрғанжан","Нұрай","Әлқуат",
 "Шырай","Гүлсезім","Маржан","Мариям",
 "Жансая","Азиза","Ақсезім","Нұрболсын",
 "Ақнұр","Іңкәр","Асхат","Аяжан",
 "Мирас","Санжар","Ерасыл","Нұрасыл",
 "Расул","Айнұр","Дархан","Айкерім"
];

const STORE="physics312_complete_";

function load(key,fallback){
 try{
  const raw=localStorage.getItem(STORE+key);
  return raw?JSON.parse(raw):fallback;
 }catch{return fallback}
}

let students=load("students",
 initialNames.map((name,i)=>({
  id:i+1,name,present:true
 }))
);

let teams=load("teams",[[],[],[]]);
let scores=[0,0,0];
let answered={};
let speakerHistory=[[],[],[]];
let currentSpeaker="";
let currentPage=0;
let pages=[];
let advanceTimer=null;
let zCounter=100;
const startedAt=Date.now();

function save(){
 localStorage.setItem(STORE+"students",JSON.stringify(students));
 localStorage.setItem(STORE+"teams",JSON.stringify(teams));
}

function openPanel(id){
 const el=$(id);
 el.classList.remove("hidden");
 el.style.zIndex=++zCounter;
}
function closePanel(id){
 $(id).classList.add("hidden");
}
function openAttendance(){
 drawAttendance();
 openPanel("attendancePanel");
}
function drawAttendance(){
 $("attendanceList").innerHTML=students.map(s=>`
  <div class="student-row">
   <input type="checkbox"
    ${s.present?"checked":""}
    onchange="setPresent(${s.id},this.checked)">
   <span>${esc(s.name)}</span>
   <button onclick="removeStudent(${s.id})">Өшіру</button>
  </div>
 `).join("");

 const present=students.filter(s=>s.present).length;
 $("attendanceCount").textContent=
 `Барлығы: ${students.length} | Бар: ${present} | Жоқ: ${students.length-present}`;
}

function stopAdvance(){
 if(advanceTimer!==null){
  clearTimeout(advanceTimer);
  advanceTimer=null;
 }
}

function resetAfterAttendance(){
 stopAdvance();
 teams=[[],[],[]];
 scores=[0,0,0];
 answered={};
 speakerHistory=[[],[],[]];
 currentSpeaker="";
 save();drawTeams();renderPage();
}

function markAll(value){
 students.forEach(s=>s.present=value);
 resetAfterAttendance();drawAttendance();
}

function setPresent(id,value){
 const student=students.find(s=>s.id===id);
 if(student)student.present=value;
 resetAfterAttendance();drawAttendance();
}

function addStudent(){
 const input=$("newStudent");
 const name=input.value.trim();
 if(!name)return;
 if(students.some(s=>
  s.name.toLocaleLowerCase("kk")===name.toLocaleLowerCase("kk")
 )){
  alert("Бұл есім тізімде бар.");return;
 }

 const id=students.length
  ?Math.max(...students.map(s=>s.id))+1:1;

 students.push({id,name,present:true});
 input.value="";
 resetAfterAttendance();drawAttendance();
}

function removeStudent(id){
 students=students.filter(s=>s.id!==id);
 resetAfterAttendance();drawAttendance();
}

function presentStudents(){
 return students.filter(s=>s.present);
}

function shuffleTeams(show=true){
 const list=[...presentStudents()];

 if(!list.length){
  alert("Алдымен сабаққа келгендерді белгілеңіз.");
  return;
 }

 for(let i=list.length-1;i>0;i--){
  const j=Math.floor(Math.random()*(i+1));
  [list[i],list[j]]=[list[j],list[i]];
 }

 teams=[[],[],[]];
 list.forEach((s,i)=>teams[i%3].push(s.id));

 stopAdvance();
 scores=[0,0,0];
 answered={};
 speakerHistory=[[],[],[]];
 currentSpeaker="";

 save();
 if(isQuizPage()){
  currentSpeaker=pickSpeaker(teamForQuestion(quizIndex()));
 }
 drawTeams();renderPage();

 if(show){
  closePanel("attendancePanel");
  openPanel("teamsPanel");
 }
}

function teamNames(i){
 return teams[i]
  .map(id=>students.find(s=>s.id===id))
  .filter(s=>s&&s.present)
  .map(s=>s.name);
}

function drawTeams(){
 $("teamLists").innerHTML=[0,1,2].map(i=>`
  <div class="team-card">
   <h3>${i+1}-команда</h3>
   <p>${teamNames(i).map(esc).join(", ")||"Оқушы жоқ"}</p>
   <div class="score">${scores[i]} ұпай</div>
  </div>
 `).join("");
}

function openTeams(){
 drawTeams();openPanel("teamsPanel");
}

function teamForQuestion(index){
 return index%3;
}

function pickSpeaker(team){
 const names=teamNames(team);
 if(!names.length)return "Оқушы жоқ";

 let available=names.filter(
  name=>!speakerHistory[team].includes(name)
 );

 if(!available.length){
  speakerHistory[team]=[];
  available=names;
 }

 const selected=available[
  Math.floor(Math.random()*available.length)
 ];
 speakerHistory[team].push(selected);
 return selected;
}

/* ==========================================
  БЕТТЕР
========================================== */

function introPage(){
 return `<section class="slide">
  <span class="eyebrow">ФИЗИКА • 3.1.2</span>
  <div class="card">
   <h1>${esc(lesson.title)}</h1>
   <div class="definition">
    <p class="green">
     Электр зарядтарының өзара әсерлесуін,
     зарядтың сақталу заңын және Кулон заңын
     зерттейміз.
    </p>
   </div>
   <div class="formula">${FORMULA.coulomb}</div>
   <div class="grid2">
    <div class="example"><p>📘 Түсіндірме, конспект, 12 есеп</p></div>
    <div class="definition"><p>🏆 3 команда, 18 ойын сұрағы</p></div>
   </div>
   <p class="blue">1-курс • 80 минут • By Darkhan</p>
  </div>
 </section>`;
}

function theoryPage(t,i){
 return `<section class="slide">
  <span class="eyebrow">
   ТҮСІНДІРМЕ ${i+1}/${lesson.theory.length}
  </span>
  <h2>${esc(t.title)}</h2>
  <div class="card">
   <div class="definition">
    <p class="green">${esc(t.definition)}</p>
   </div>

   <div class="photo-layout">
    ${visual(t.visual)}
    <div><p>${esc(t.detail)}</p></div>
   </div>

   <div class="formula">${t.formula}</div>

   <div class="example">
    <p class="gold">Мысал: ${esc(t.example)}</p>
   </div>

   <div class="warning">
    <p class="red">Маңызды: ${esc(t.warning)}</p>
   </div>
  </div>
 </section>`;
}

function notePage(part){
 const start=part*2;
 return `<section class="slide">
  <span class="eyebrow">ДӘПТЕРГЕ ЖАЗЫП АЛ</span>
  <h2>📘 Конспект — ${part+1}-бөлім</h2>

  ${lesson.notes.slice(start,start+2).map((n,i)=>`
   <div class="notebook-item">
    <div class="notebook-number">
     ${start+i+1}. ${esc(n[0])}
    </div>
    <p class="green">${esc(n[1])}</p>
    <p class="blue">${esc(n[2])}</p>
    <p class="red">${esc(n[3])}</p>
   </div>
  `).join("")}
 </section>`;
}

function problemPage(level,part){
 const labels=[
  "🟢 1-деңгей — Оңай",
  "🟡 2-деңгей — Орташа",
  "🔴 3-деңгей — Қиын"
 ];
 const offset=part*2;

 return `<section class="slide">
  <span class="level ${["easy","medium","hard"][level]}">
   ${labels[level]}
  </span>
  <h2>✍️ Дәптерде шығарылатын есептер</h2>

  ${level===2?`
   <div class="example">
    <p class="gold">
     🧮 Калькуляторды қолданыңдар.
     Шешу жолын дәптерге толық жазыңдар.
    </p>
   </div>`:""}

  ${lesson.problems[level].slice(offset,offset+2)
   .map((p,i)=>`
    <div class="problem">
     <p class="problem-title">
      ${offset+i+1}-есеп. ${esc(p[0])}
     </p>
     <div class="data-line">
      <span class="blue">Берілгені:</span>
      ${esc(p[1])}
     </div>
     <div class="data-line">
      <span class="green">Табу:</span>
      ${esc(p[2])}
     </div>
     <p>SI → Формула → Түрлендіру → Шешуі → Жауабы</p>

     <button onclick="toggleAnswer('a_${level}_${part}_${i}')">
      Жауапты көрсету
     </button>

     <div class="answer hidden"
      id="a_${level}_${part}_${i}">
      ${esc(p[3])}
     </div>
    </div>
   `).join("")}
 </section>`;
}

function toggleAnswer(id){
 $(id).classList.toggle("hidden");
}

function quizStart(){
 return 1+lesson.theory.length+
  Math.ceil(lesson.notes.length/2)+
  lesson.problems.reduce(
   (sum,group)=>sum+Math.ceil(group.length/2),0
  );
}
function quizIndex(){
 return currentPage-quizStart();
}
function isQuizPage(){
 const index=quizIndex();
 return index>=0&&index<lesson.quiz.length;
}

function quizPage(item,index){
 const [type,question,options,correct]=item;
 const team=teamForQuestion(index);
 const result=answered[index];
 const speaker=isQuizPage()&&quizIndex()===index
  ?currentSpeaker:"";

 return `<section class="slide">
  <span class="eyebrow">
   КОМАНДАЛЫҚ ОЙЫН ${index+1}/${lesson.quiz.length}
  </span>
  <h2>🏆 ${esc(type)}</h2>

  <div class="team-turn">
   ${[0,1,2].map(t=>`
    <span class="turn-pill ${team===t?"active":""}">
     ${t+1}-команда • ${scores[t]} ұпай
    </span>
   `).join("")}
  </div>

  <div class="player-banner">
   <strong>${team+1}-команданың кезегі</strong>
   <p>
    🎲 Жауап беретін оқушы:
    <b>${esc(speaker||"Таңдалуда...")}</b>
   </p>
  </div>

  <div class="card">
   <p class="quiz-question">${esc(question)}</p>

   <div class="choices">
    ${options.map((option,i)=>`
     <button class="choice
      ${result&&i===correct?"correct":""}
      ${result&&i===result.choice&&i!==correct?"wrong":""}"
      onclick="submitAnswer(${index},${i})"
      ${result?"disabled":""}>
      ${"ABCD"[i]}. ${esc(option)}
     </button>
    `).join("")}
   </div>

   ${result?`
    <div class="answer">
     ${result.choice===correct
      ?"✅ Дұрыс жауап! +10 ұпай"
      :"❌ Қате жауап"}
     Дұрыс жауап: ${esc(options[correct])}
    </div>
    <p class="blue">
     Келесі командаға автоматты өтеді...
    </p>
   `:""}
  </div>
 </section>`;
}

function resultsPage(){
 const best=Math.max(...scores);
 return `<section class="slide">
  <span class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</span>
  <h2>🏆 Командалардың нәтижесі</h2>

  <div class="grid3">
   ${scores.map((score,i)=>`
    <div class="team-card">
     <h3>${i+1}-команда</h3>
     <div class="score">${score} ұпай</div>
     <p>${score===best&&score>0
      ?"🏅 Ең жоғары нәтиже"
      :"Жарайсыңдар!"}</p>
    </div>
   `).join("")}
  </div>

  <div class="card">
   <h3>Сабақты қорытындылау</h3>
   <p>Кулон заңы нені сипаттайды?</p>
   <p>Зарядтың сақталу заңы қалай орындалады?</p>
   <p>Арақашықтық екі есе артса, күш қалай өзгереді?</p>
   <button onclick="restartQuiz()">
    🔄 Ойынды қайта бастау
   </button>
  </div>
 </section>`;
}

function homeworkPage(){
 return `<section class="slide">
  <span class="eyebrow">ҮЙ ТАПСЫРМАСЫ</span>
  <h2>🏠 Кулон заңы бойынша есептер</h2>

  <div class="card">
   <ol>
    ${lesson.homework.map(t=>`
     <li>${esc(t)}</li>
    `).join("")}
   </ol>
   <div class="warning">
    <p class="red">
     Барлық есептер дәптерге толық шығарылсын.
     SI жүйесі, формула, шешу жолы және
     өлшем бірлігі міндетті.
    </p>
   </div>
  </div>
  <p class="blue">Сау болыңыздар! By Darkhan</p>
 </section>`;
}

function buildPages(){
 pages=[
  introPage(),
  ...lesson.theory.map(theoryPage),
  ...Array.from(
   {length:Math.ceil(lesson.notes.length/2)},
   (_,i)=>notePage(i)
  ),
  ...lesson.problems.flatMap((group,level)=>
   Array.from(
    {length:Math.ceil(group.length/2)},
    (_,part)=>problemPage(level,part)
   )
  ),
  ...lesson.quiz.map(quizPage),
  resultsPage(),
  homeworkPage()
 ];
}

function renderPage(){
 buildPages();

 currentPage=Math.max(
  0,Math.min(currentPage,pages.length-1)
 );

 $("screen").innerHTML=pages[currentPage];

 $("pageNumber").textContent=
  `${currentPage+1} / ${pages.length}`;

 $("progressFill").style.width=
  `${100*(currentPage+1)/pages.length}%`;
}

function changePage(direction){
 stopAdvance();
 const previous=currentPage;

 currentPage=Math.max(
  0,Math.min(currentPage+direction,pages.length-1)
 );

 if(currentPage!==previous&&isQuizPage()){
  currentSpeaker=pickSpeaker(
   teamForQuestion(quizIndex())
  );
 }

 renderPage();
}

function submitAnswer(index,choice){
 if(answered[index])return;

 const team=teamForQuestion(index);
 if(!teamNames(team).length){
  alert("Алдымен оқушыларды 3 командаға бөліңіз.");
  openAttendance();
  return;
 }

 const correct=lesson.quiz[index][3];
 answered[index]={team,choice};

 if(choice===correct)scores[team]+=10;

 renderPage();
 drawTeams();

 advanceTimer=setTimeout(()=>{
  advanceTimer=null;

  if(currentPage!==quizStart()+index)return;

  currentPage=Math.min(
   currentPage+1,pages.length-1
  );

  if(isQuizPage()){
   currentSpeaker=pickSpeaker(
    teamForQuestion(quizIndex())
   );
  }
  renderPage();
 },2500);
}

function restartQuiz(){
 stopAdvance();
 scores=[0,0,0];
 answered={};
 speakerHistory=[[],[],[]];

 if(isQuizPage()){
  currentSpeaker=pickSpeaker(
   teamForQuestion(quizIndex())
  );
 }

 renderPage();drawTeams();
}

/* ==========================================
  ЖЫЛЖЫМАЛЫ ТЕРЕЗЕЛЕР
  Калькуляторларды бос жерінен ұстап қозғалтуға болады.
========================================== */

document.querySelectorAll(".floating").forEach(panel=>{
 let active=false;
 let offsetX=0,offsetY=0;

 panel.addEventListener("pointerdown",e=>{
  if(e.target.closest(
   "button,input,select,textarea,label,a"
  ))return;

  const rect=panel.getBoundingClientRect();
  offsetX=e.clientX-rect.left;
  offsetY=e.clientY-rect.top;

  active=true;
  panel.style.zIndex=++zCounter;
  panel.setPointerCapture(e.pointerId);
  e.preventDefault();
 });

 panel.addEventListener("pointermove",e=>{
  if(!active)return;

  const x=Math.max(0,Math.min(
   innerWidth-panel.offsetWidth,
   e.clientX-offsetX
  ));

  const y=Math.max(0,Math.min(
   innerHeight-panel.offsetHeight,
   e.clientY-offsetY
  ));

  panel.style.left=x+"px";
  panel.style.top=y+"px";
  panel.style.right="auto";
 });

 panel.addEventListener("pointerup",()=>active=false);
 panel.addEventListener("pointercancel",()=>active=false);
});

/* ==========================================
  МАТЕМАТИКАЛЫҚ КАЛЬКУЛЯТОР
========================================== */

let mathExpression="";

const keys=[
 "7","8","9","÷",
 "4","5","6","×",
 "1","2","3","−",
 "0",".","(",")",
 "+","^","√","π",
 "sin","cos","tan","log",
 "ln","C","⌫","="
];

$("mathKeys").innerHTML=keys.map(key=>`
 <button onclick="mathPress('${key}')">${key}</button>
`).join("");

function mathPress(key){
 if(key==="C"){
  mathExpression="";
  $("mathResult").textContent="Тазаланды.";
 }else if(key==="⌫"){
  mathExpression=mathExpression.slice(0,-1);
 }else if(key==="="){
  try{
   const value=evaluateMath(mathExpression);
   $("mathResult").textContent=
    "Жауабы: "+Number(value.toPrecision(12));
  }catch{
   $("mathResult").textContent=
    "Өрнекті тексеріңіз.";
  }
  return;
 }else if(["√","sin","cos","tan","log","ln"].includes(key)){
  mathExpression+=key+"(";
 }else{
  mathExpression+=key;
 }

 $("mathDisplay").value=mathExpression;
}

function evaluateMath(text){
 const source=text
  .replaceAll("×","*")
  .replaceAll("÷","/")
  .replaceAll("−","-")
  .replaceAll("π",String(Math.PI))
  .replace(/\s+/g,"");

 const tokens=source.match(
  /(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|√|sin|cos|tan|log|ln|[()+\-*/^]/gi
 );

 if(!tokens||tokens.join("")!==source){
  throw Error("Таңба");
 }

 let pos=0;

 function atom(){
  const t=tokens[pos++];

  if(t==="("){
   const x=sum();
   if(tokens[pos++]!==")")throw Error("Жақша");
   return x;
  }

  if(t!==undefined&&!isNaN(Number(t))){
   return Number(t);
  }

  if(["√","sin","cos","tan","log","ln"].includes(t)){
   if(tokens[pos++]!=="(")throw Error("Функция");
   const x=sum();
   if(tokens[pos++]!==")")throw Error("Жақша");

   if(t==="√")return Math.sqrt(x);
   if(t==="sin")return Math.sin(x*Math.PI/180);
   if(t==="cos")return Math.cos(x*Math.PI/180);
   if(t==="tan")return Math.tan(x*Math.PI/180);
   if(t==="log")return Math.log10(x);
   if(t==="ln")return Math.log(x);
  }

  throw Error("Мән");
 }

 function power(){
  let x=atom();
  if(tokens[pos]==="^"){
   pos++;
   x=Math.pow(x,unary());
  }
  return x;
 }

 function unary(){
  if(tokens[pos]==="-"){
   pos++;
   return -unary();
  }
  if(tokens[pos]==="+"){
   pos++;
   return unary();
  }
  return power();
 }

 function multiply(){
  let x=unary();
  while(["*","/"].includes(tokens[pos])){
   const op=tokens[pos++];
   const right=unary();
   x=op==="*"?x*right:x/right;
  }
  return x;
 }

 function sum(){
  let x=multiply();
  while(["+","-"].includes(tokens[pos])){
   const op=tokens[pos++];
   const right=multiply();
   x=op==="+"?x+right:x-right;
  }
  return x;
 }

 const result=sum();

 if(pos!==tokens.length||!Number.isFinite(result)){
  throw Error("Нәтиже");
 }
 return result;
}

/* ==========================================
  ФИЗИКАЛЫҚ КАЛЬКУЛЯТОР
========================================== */

const formulas=[
 {
  name:"Кулон күші F=k|q₁q₂|/r²",
  vars:["F","q1","q2","r"],
  units:["Н","Кл, модуль","Кл, модуль","м"],
  solve:(v,n)=>{
   const k=9e9;
   if(n==="F")return k*Math.abs(v.q1*v.q2)/v.r**2;
   if(n==="q1")return v.F*v.r**2/(k*Math.abs(v.q2));
   if(n==="q2")return v.F*v.r**2/(k*Math.abs(v.q1));
   return Math.sqrt(k*Math.abs(v.q1*v.q2)/v.F);
  }
 },
 {
  name:"Элементар заряд модулі |q|=Ne",
  vars:["q","N"],
  units:["Кл, модуль","дана"],
  solve:(v,n)=>n==="q"
   ?v.N*1.602176634e-19
   :Math.abs(v.q)/1.602176634e-19
 },
 {
  name:"Бірдей шарлар q'=(q1+q2)/2",
  vars:["q","q1","q2"],
  units:["Кл","Кл","Кл"],
  solve:(v,n)=>
   n==="q"?(v.q1+v.q2)/2:
   n==="q1"?2*v.q-v.q2:
   2*v.q-v.q1
 },
 {
  name:"Зарядтың сақталуы Q=q1+q2",
  vars:["Q","q1","q2"],
  units:["Кл","Кл","Кл"],
  solve:(v,n)=>
   n==="Q"?v.q1+v.q2:
   n==="q1"?v.Q-v.q2:
   v.Q-v.q1
 }
];

function selectFormula(){
 const f=formulas[Number($("formulaSelect").value)];
 $("unknownSelect").innerHTML=f.vars.map(v=>
  `<option value="${v}">${v}</option>`
 ).join("");
 drawPhysicsFields();
}

function drawPhysicsFields(){
 const f=formulas[Number($("formulaSelect").value)];
 const unknown=$("unknownSelect").value;

 $("physicsFields").innerHTML=f.vars
  .filter(v=>v!==unknown)
  .map(v=>{
   const unit=f.units[f.vars.indexOf(v)];
   return `<label>${v} (${esc(unit)})</label>
    <input type="number" step="any"
     id="phys_${v}"
     placeholder="${v} мәнін енгізіңіз">`;
  }).join("");

 $("physicsResult").textContent=
  "Берілгендерді SI жүйесінде енгізіңіз.";
}

function calculatePhysics(){
 const f=formulas[Number($("formulaSelect").value)];
 const unknown=$("unknownSelect").value;
 const values={};

 for(const v of f.vars){
  if(v===unknown)continue;

  const raw=$("phys_"+v).value.trim();
  if(!raw){
   $("physicsResult").textContent=
    "Барлық белгілі шаманы енгізіңіз.";
   return;
  }
  values[v]=Number(raw);
 }

 try{
  const result=f.solve(values,unknown);

  if(!Number.isFinite(result))throw Error();

  const unit=f.units[f.vars.indexOf(unknown)];

  $("physicsResult").textContent=
   `Формула: ${f.name}\n\n`+
   "Берілгені:\n"+
   Object.entries(values)
    .map(([name,value])=>`${name} = ${value}`)
    .join("\n")+
   `\n\nТабу керек: ${unknown}\n`+
   `Жауабы: ${unknown} = `+
   `${Number(result.toPrecision(10))} ${unit}`;
 }catch{
  $("physicsResult").textContent=
   "Мәндерді тексеріңіз. Нөлге бөлуге болмайды.";
 }
}

/* ==========================================
  ІСКЕ ҚОСУ
========================================== */

$("formulaSelect").innerHTML=formulas.map((f,i)=>
 `<option value="${i}">${esc(f.name)}</option>`
).join("");

selectFormula();
drawAttendance();

const presentIds=presentStudents().map(s=>s.id);
const assigned=teams.flat();
const validTeams=
 assigned.length===presentIds.length &&
 new Set(assigned).size===assigned.length &&
 presentIds.every(id=>assigned.includes(id));

if(!validTeams&&presentIds.length>0){
 shuffleTeams(false);
}

drawTeams();
renderPage();

setInterval(()=>{
 const elapsed=Math.floor(
  (Date.now()-startedAt)/1000
 );
 $("timer").textContent=
  String(Math.floor(elapsed/60)).padStart(2,"0")+
  ":"+
  String(elapsed%60).padStart(2,"0");
},1000);

/* 3.1.2 — Алматының нақты уақыты */

function updateCurrentTime() {
  const clock = document.getElementById("currentTime");
  if (!clock) return;

  clock.textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Almaty",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).format(new Date());
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
