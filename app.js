const mdnVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const appState = {
  language: "kk",
  currentGenre: "fairy-tales",
  currentLevel: "A1",
  activeVideoId: "fairy-tales-1",
  selectedCharacterId: "dragon",
  profile: {
    name: "Aruzhan",
    email: "kid@example.com",
    level: "A1",
    lessonsCompleted: 12,
    stars: 128,
    badges: 4,
  },
};

const characters = [
  {
    id: "dragon",
    emoji: "🐉",
    name: { kk: "Айдаһар", ru: "Дракон", en: "Dragon" },
    happy: { kk: "Тамаша! Сен нағыз батырсың!", ru: "Отлично! Ты настоящий герой!", en: "Amazing! You are a true hero!" },
    supportive: { kk: "Қорықпа, тағы бір рет байқап көрейік.", ru: "Не бойся, давай попробуем еще раз.", en: "No worries, let's try one more time." },
  },
  {
    id: "robot",
    emoji: "🤖",
    name: { kk: "Робот", ru: "Робот", en: "Robot" },
    happy: { kk: "Жауап дұрыс. Менің қуатым артты!", ru: "Правильно. Моя энергия выросла!", en: "Correct. My power level is rising!" },
    supportive: { kk: "Жүйе кеңесі: қайтадан тексерейік.", ru: "Совет системы: давай проверим снова.", en: "System tip: let's check it again." },
  },
  {
    id: "hero",
    emoji: "🦸",
    name: { kk: "Супербатыр", ru: "Супергерой", en: "Superhero" },
    happy: { kk: "Сен бүгінгі күннің қаһарманысың!", ru: "Ты герой этого дня!", en: "You are the hero of the day!" },
    supportive: { kk: "Жарайсың, тағы бір қадам қалды.", ru: "Молодец, остался еще один шаг.", en: "Nice try, just one more step." },
  },
  {
    id: "fairy",
    emoji: "🧚",
    name: { kk: "Пері", ru: "Фея", en: "Fairy" },
    happy: { kk: "Жауабың сиқыр секілді әдемі!", ru: "Ответ получился волшебным!", en: "That answer felt magical!" },
    supportive: { kk: "Сиқырлы кеңес: асықпай ойлан.", ru: "Волшебный совет: подумай спокойно.", en: "Magic tip: think slowly and gently." },
  },
];

const genres = [
  {
    id: "fairy-tales",
    color: "#fff1b8",
    label: { kk: "Ертегі", ru: "Сказка", en: "Fairy tale" },
    description: {
      kk: "Қызыл телпек туралы классикалық ертегі",
      ru: "Классическая сказка о Красной Шапочке",
      en: "A classic Little Red Riding Hood story",
    },
  },
];

const videos = [
  {
    id: "fairy-tales-1",
    genre: "fairy-tales",
    duration: "0:29",
    level: "A1",
    title: { kk: "Қызыл телпек туралы ертегі", ru: "О Красной Шапочке", en: "Little Red Riding Hood" },
    description: {
      kk: "Қызыл телпек орман арқылы әжесіне барады.",
      ru: "Красная Шапочка идет через лес к бабушке.",
      en: "Little Red Riding Hood walks through the forest to visit her grandmother.",
    },
    transcript: "Little Red Riding Hood walks through the forest and says: I can take this basket to my grandmother.",
    src: mdnVideo,
  },
];

const vocabulary = [
  { word: "balloon", translation: { kk: "шар", ru: "шар", en: "balloon" }, emoji: "🎈" },
  { word: "forest", translation: { kk: "орман", ru: "лес", en: "forest" }, emoji: "🌲" },
  { word: "please", translation: { kk: "өтінемін", ru: "пожалуйста", en: "please" }, emoji: "🙏" },
  { word: "hero", translation: { kk: "батыр", ru: "герой", en: "hero" }, emoji: "⭐" },
  { word: "breakfast", translation: { kk: "таңғы ас", ru: "завтрак", en: "breakfast" }, emoji: "🍎" },
  { word: "moon", translation: { kk: "ай", ru: "луна", en: "moon" }, emoji: "🌙" },
  { word: "kind", translation: { kk: "мейірімді", ru: "добрый", en: "kind" }, emoji: "💛" },
  { word: "clock", translation: { kk: "сағат", ru: "часы", en: "clock" }, emoji: "⏰" },
];

const achievements = [
  { id: "watcher", icon: "📚", unlocked: true, title: { kk: "10 сабақ аяқталды", ru: "10 уроков завершено", en: "10 lessons completed" } },
  { id: "listener", icon: "🎧", unlocked: true, title: { kk: "Listening жұлдызы", ru: "Звезда listening", en: "Listening star" } },
  { id: "word", icon: "🪄", unlocked: true, title: { kk: "25 сөз жатталды", ru: "25 слов выучено", en: "25 words learned" } },
  { id: "b2", icon: "🚀", unlocked: false, title: { kk: "B2 деңгейіне жету", ru: "Дойти до уровня B2", en: "Reach B2 level" } },
  { id: "perfect", icon: "🏅", unlocked: false, title: { kk: "5 мінсіз нәтиже", ru: "5 идеальных результатов", en: "5 perfect scores" } },
  { id: "helper", icon: "🌟", unlocked: true, title: { kk: "Күннің батыры", ru: "Герой дня", en: "Hero of the day" } },
];

const placementQuestions = [
  {
    prompt: {
      kk: "Choose the correct sentence.",
      ru: "Выбери правильное предложение.",
      en: "Choose the correct sentence.",
    },
    options: ["She go to school.", "She goes to school.", "She going school."],
    answer: "She goes to school.",
    levelWeight: 2,
  },
  {
    prompt: {
      kk: "Fill the blank: I ___ a blue bag.",
      ru: "Вставь слово: I ___ a blue bag.",
      en: "Fill the blank: I ___ a blue bag.",
    },
    options: ["have", "has", "am"],
    answer: "have",
    levelWeight: 1,
  },
  {
    prompt: {
      kk: "Choose the best answer: Yesterday we ___ a song.",
      ru: "Выбери лучший ответ: Yesterday we ___ a song.",
      en: "Choose the best answer: Yesterday we ___ a song.",
    },
    options: ["sing", "sang", "sings"],
    answer: "sang",
    levelWeight: 3,
  },
  {
    prompt: {
      kk: "Choose the best word: The comic was funny and very ___.",
      ru: "Выбери слово: The comic was funny and very ___.",
      en: "Choose the best word: The comic was funny and very ___.",
    },
    options: ["entertaining", "tiny", "slowly"],
    answer: "entertaining",
    levelWeight: 4,
  },
];

const uiText = {
  kk: {
    brandTag: "Ағылшын ертегі әлемі",
    navHome: "Басты бет",
    navVideos: "Видео",
    navGenres: "Жанрлар",
    navGames: "Тапсырмалар / Ойындар",
    navWords: "Сөздер",
    navFeedback: "Кері байланыс",
    navSupport: "Қолдау",
    homeTitle: "Балаларға арналған ағылшын тілі: видео, сөздер, ойындар",
    homeText: "Қысқа видеоны көр, кейіпкермен бірге жауап бер, жұлдыз жина және ағылшынды ертегі сияқты үйрен.",
    storyQuote: "Ертегімен өс, біліммен өрле.",
    startNow: "Қазір бастау",
    takeTest: "Деңгейді анықтау",
    shortcutVideos: "Видео сабақтар",
    shortcutGenres: "Жанр таңдау",
    shortcutGames: "Ойын тапсырмалар",
    shortcutWords: "Сөздік әлемі",
    featuredLesson: "Бүгінгі сабақ",
    videoGenreLabel: "Жанр",
    videoDurationLabel: "Ұзақтығы",
    videoCharacterLabel: "Кейіпкер",
    watchAndPractice: "Көрдім, енді тапсырма ашу",
    profileLabel: "Профиль",
    characterLabel: "Серіктес кейіпкер",
    progressLabel: "Прогресс",
    videoSectionEyebrow: "Қысқа сабақтар",
    videoSectionTitle: "Видео арқылы үйрену",
    videoSectionText: "1–3 минуттық видеолар баланың жасына, деңгейіне және жанр таңдауына сай көрсетіледі.",
    genreTitle: "Жанр бойынша таңдау",
    genreText: "Әр жанрдың өз түсі, көңіл-күйі және сөздік бағыты бар.",
    gamesEyebrow: "Тапсырмалар",
    gamesTitle: "Видео соңындағы ойындар",
    gamesText: "Дұрыс жауап таңда, сөздерді толықтыр, жұптарды сәйкестендір және бірден кері байланыс ал.",
    gameTypeChoice: "Таңдау сұрағы",
    gameChoicePrompt: "Who helps the dragon in the story?",
    gameChoiceAnswers: "Robot / Fairy / Teacher",
    gameTypeFill: "Бос орынды толтыру",
    gameFillPrompt: "The hero says: “I can ___ the stars.”",
    gameFillAnswers: "see",
    gameTypeMatch: "Сәйкестендіру",
    gameMatchPrompt: "moon → ай, brave → батыл",
    gameMatchAnswers: "2 жұп",
    wordsEyebrow: "Сөздік",
    wordsTitle: "Сөздерді тыңдап, есте сақта",
    wordsText: "Әр сөзде аударма, дыбыстау және шағын жаттығу бар.",
    levelsEyebrow: "Деңгейлер",
    levelsTitle: "A1-ден B2-ге дейін",
    placementTitle: "Қысқа тест арқылы деңгейді анықтау",
    placementText: "4 сұрақтық тест баланың тіл деңгейін шамамен анықтап, лайықты контент ұсынады.",
    placementButton: "Тесті бастау",
    achievementsEyebrow: "Жетістіктер",
    achievementsTitle: "Жұлдыздар мен белгілер",
    feedbackEyebrow: "Кері байланыс",
    feedbackTitle: "Ата-ана мен мұғалімге",
    feedbackText: "Пікір қалдыру, сабақ сапасын бағалау және жаңа жанр ұсыну формасы осында орналасады.",
    feedbackNameLabel: "Аты-жөні",
    feedbackRoleLabel: "Сіз кімсіз?",
    feedbackRoleParent: "Ата-ана",
    feedbackRoleTeacher: "Мұғалім",
    feedbackRoleMentor: "Тәлімгер",
    feedbackMessageLabel: "Хабарлама",
    feedbackSubmit: "Жіберу",
    feedbackResultText: "Хабарлама сақталды. Бұл блокты кейін нақты email немесе базаға қосуға болады.",
    supportEyebrow: "Қолдау",
    supportTitle: "Көмек және қауіпсіздік",
    supportText: "Балаларға ыңғайлы ірі батырмалар, қарапайым маршруттар және ата-ана үшін бақылау аймағы қарастырылады.",
    supportTopicLabel: "Тақырып",
    supportPlanLabel: "Жоспар / идея / сұрақ",
    supportSubmit: "Жіберу",
    supportResultText: "Идея сақталды. Кейін бұл бөлім roadmap немесе admin panel-ге байланыса алады.",
    authEyebrow: "Қош келдің",
    authTitle: "Тіркелу немесе кіру",
    nameLabel: "Аты",
    emailLabel: "Email",
    passwordLabel: "Құпиясөз",
    levelSelectLabel: "Деңгей",
    saveProfile: "Профильді сақтау",
    characterPickTitle: "Ертегі кейіпкерін таңда",
    taskEyebrow: "Видео аяқталды",
    taskTitle: "AI тапсырмалары дайын",
    regenTasks: "Қайта генерациялау",
    submitTasks: "Жауаптарды тексеру",
    placementEyebrow: "Placement test",
    placementModalTitle: "Қысқа тест",
    submitPlacement: "Деңгейді көру",
    watchLabel: "Көру",
    openTasks: "Тапсырма ашу",
    listenWord: "Тыңдау",
    memoryGame: "Мини-ойын",
    chooseWord: "Аудармасын тап",
    lessonDone: "Сабақ аяқталды",
    lessonCountText: "{count} сабақ аяқталды",
    profileSummaryText: "{level} деңгейі • {badges} badge",
    aiReadyText: "AI бұл видеодан {count} тапсырма жасады. Кейіпкерің жауаптарыңды бірге тексереді.",
    taskSuccessText: "Нәтиже: {score}/{total}. Керемет жұмыс!",
    taskRetryText: "Нәтиже: {score}/{total}. Қайта қарап, тағы бір рет көрейік.",
    placementResult: "Ұсынылған деңгей: {level}. Келесі сабақтар осы деңгейге бейімделеді.",
    modalChoiceLabel: "Бір дұрыс жауапты таңда",
    modalFillLabel: "Сөзді жаз",
    modalMatchLabel: "Сәйкестігін таңда",
    answerCorrect: "Дұрыс",
    answerIncorrect: "Қате",
    wordGameText: "“{word}” сөзінің аудармасы қайсы?",
    feedbackIdeas: [
      "Жаңа жанр ұсыну",
      "Баланың прогресі туралы пікір",
      "Мұғалімге арналған режим",
      "Үй тапсырмасы идеясы",
    ],
    supportIdeas: [
      "Ата-ана бақылау панелі",
      "Қауіпсіз chat жоқ режим",
      "Апталық оқу жоспары",
      "Сабақ кестесі мен reminder",
    ],
    structureText:
      "src/\n  app/\n    router.tsx\n    layout/\n      BookShell.tsx\n      Header.tsx\n      MenuDrawer.tsx\n    pages/\n      HomePage.tsx\n      VideoPage.tsx\n      GenresPage.tsx\n      GamesPage.tsx\n      WordsPage.tsx\n      ProgressPage.tsx\n      ProfilePage.tsx\n      SettingsPage.tsx\n    components/\n      CharacterBuddy.tsx\n      VideoLessonCard.tsx\n      ExerciseModal.tsx\n      PlacementTest.tsx\n      WordCard.tsx\n      AchievementBadge.tsx\n    i18n/\n      kk.ts\n      ru.ts\n      en.ts\n  server/\n    routes/\n      auth.ts\n      lessons.ts\n      ai-tasks.ts\n      progress.ts\n    services/\n      taskGenerator.ts\n      transcriptParser.ts\n      storage.ts\n  prisma/\n    schema.prisma",
    logicItems: [
      "Пайдаланушы тіркелгенде аты, тілі, деңгейі және кейіпкері сақталады.",
      "Видео жанр, жас және деңгей фильтрлері бойынша ұсынылады.",
      "Видео аяқталған соң transcript AI сервиске жіберіледі.",
      "AI 2–5 тапсырма қайтарады: multiple choice, fill-in, matching.",
      "Modal ішінде жедел кері байланыс пен кейіпкер анимациясы көрсетіледі.",
      "Прогресс, жұлдыз және achievement деректері базаға жазылады.",
    ],
    aiExample:
      'POST /api/ai-tasks\n{\n  "level": "A2",\n  "language": "kk",\n  "videoTitle": "The Dragon and the Blue Balloon",\n  "transcript": "A little dragon sees a blue balloon and says: I can see the blue sky."\n}\n\n200 OK\n{\n  "tasks": [\n    {\n      "type": "multiple-choice",\n      "question": "What color is the balloon?",\n      "options": ["Red", "Blue", "Green"],\n      "answer": "Blue"\n    },\n    {\n      "type": "fill-in-the-blank",\n      "question": "I can see the ___ sky.",\n      "answer": "blue"\n    },\n    {\n      "type": "matching",\n      "pairs": [\n        ["balloon", "шар"],\n        ["sky", "аспан"]\n      ]\n    }\n  ]\n}',
  },
  ru: {
    brandTag: "Сказочный мир английского",
    navHome: "Главная",
    navVideos: "Видео",
    navGenres: "Жанры",
    navGames: "Задания / Игры",
    navWords: "Слова",
    navFeedback: "Обратная связь",
    navSupport: "Поддержка",
    homeTitle: "Английский для детей: видео, слова и игры",
    homeText: "Смотри короткое видео, отвечай вместе с персонажем, собирай звезды и учи английский как сказку.",
    storyQuote: "Расти с сказками, возвышайся через знания.",
    startNow: "Начать",
    takeTest: "Определить уровень",
    shortcutVideos: "Видео уроки",
    shortcutGenres: "Выбор жанра",
    shortcutGames: "Игровые задания",
    shortcutWords: "Мир слов",
    featuredLesson: "Сегодняшний урок",
    videoGenreLabel: "Жанр",
    videoDurationLabel: "Длительность",
    videoCharacterLabel: "Персонаж",
    watchAndPractice: "Я посмотрел, открыть задания",
    profileLabel: "Профиль",
    characterLabel: "Персонаж-помощник",
    progressLabel: "Прогресс",
    videoSectionEyebrow: "Короткие уроки",
    videoSectionTitle: "Обучение через видео",
    videoSectionText: "Видео на 1–3 минуты подбираются по возрасту, жанру и уровню ребенка.",
    genreTitle: "Выбор по жанрам",
    genreText: "У каждого жанра свой цвет, настроение и словарная тема.",
    gamesEyebrow: "Задания",
    gamesTitle: "Игры после видео",
    gamesText: "Выбирай верный ответ, вставляй слова, сопоставляй пары и сразу получай обратную связь.",
    gameTypeChoice: "Вопрос с выбором",
    gameChoicePrompt: "Who helps the dragon in the story?",
    gameChoiceAnswers: "Robot / Fairy / Teacher",
    gameTypeFill: "Заполни пропуск",
    gameFillPrompt: "The hero says: “I can ___ the stars.”",
    gameFillAnswers: "see",
    gameTypeMatch: "Сопоставление",
    gameMatchPrompt: "moon → ай, brave → батыл",
    gameMatchAnswers: "2 пары",
    wordsEyebrow: "Словарь",
    wordsTitle: "Слушай слова и запоминай",
    wordsText: "У каждого слова есть перевод, озвучка и мини-упражнение.",
    levelsEyebrow: "Уровни",
    levelsTitle: "От A1 до B2",
    placementTitle: "Определи уровень через короткий тест",
    placementText: "Тест из 4 вопросов приблизительно определяет уровень и предлагает подходящий контент.",
    placementButton: "Начать тест",
    achievementsEyebrow: "Достижения",
    achievementsTitle: "Звезды и значки",
    feedbackEyebrow: "Обратная связь",
    feedbackTitle: "Для родителей и учителей",
    feedbackText: "Здесь может быть форма для отзывов, оценки уроков и предложений новых жанров.",
    feedbackNameLabel: "Имя",
    feedbackRoleLabel: "Кто вы?",
    feedbackRoleParent: "Родитель",
    feedbackRoleTeacher: "Учитель",
    feedbackRoleMentor: "Наставник",
    feedbackMessageLabel: "Сообщение",
    feedbackSubmit: "Отправить",
    feedbackResultText: "Сообщение сохранено. Позже этот блок можно подключить к email или базе данных.",
    supportEyebrow: "Поддержка",
    supportTitle: "Помощь и безопасность",
    supportText: "Предусмотрены крупные кнопки, простые маршруты и родительская зона контроля.",
    supportTopicLabel: "Тема",
    supportPlanLabel: "План / идея / вопрос",
    supportSubmit: "Отправить",
    supportResultText: "Идея сохранена. Позже этот раздел можно связать с roadmap или admin panel.",
    authEyebrow: "Добро пожаловать",
    authTitle: "Регистрация или вход",
    nameLabel: "Имя",
    emailLabel: "Email",
    passwordLabel: "Пароль",
    levelSelectLabel: "Уровень",
    saveProfile: "Сохранить профиль",
    characterPickTitle: "Выбери сказочного героя",
    taskEyebrow: "Видео завершено",
    taskTitle: "AI-задания готовы",
    regenTasks: "Сгенерировать заново",
    submitTasks: "Проверить ответы",
    placementEyebrow: "Placement test",
    placementModalTitle: "Короткий тест",
    submitPlacement: "Показать уровень",
    watchLabel: "Смотреть",
    openTasks: "Открыть задания",
    listenWord: "Слушать",
    memoryGame: "Мини-игра",
    chooseWord: "Найди перевод",
    lessonDone: "Урок завершен",
    lessonCountText: "Завершено уроков: {count}",
    profileSummaryText: "Уровень {level} • {badges} badge",
    aiReadyText: "AI создал {count} задания по этому видео. Персонаж поможет проверить ответы.",
    taskSuccessText: "Результат: {score}/{total}. Отличная работа!",
    taskRetryText: "Результат: {score}/{total}. Давай посмотрим еще раз и попробуем снова.",
    placementResult: "Рекомендуемый уровень: {level}. Следующие уроки будут адаптированы под него.",
    modalChoiceLabel: "Выбери один правильный ответ",
    modalFillLabel: "Напиши слово",
    modalMatchLabel: "Выбери соответствие",
    answerCorrect: "Верно",
    answerIncorrect: "Ошибка",
    wordGameText: "Как переводится слово “{word}”?",
    feedbackIdeas: [
      "Предложить новый жанр",
      "Отзыв о прогрессе ребенка",
      "Режим для учителя",
      "Идея домашнего задания",
    ],
    supportIdeas: [
      "Родительская панель контроля",
      "Безопасный режим без чата",
      "Недельный учебный план",
      "Расписание занятий и напоминания",
    ],
    structureText:
      "src/\n  app/\n    router.tsx\n    layout/\n      BookShell.tsx\n      Header.tsx\n      MenuDrawer.tsx\n    pages/\n      HomePage.tsx\n      VideoPage.tsx\n      GenresPage.tsx\n      GamesPage.tsx\n      WordsPage.tsx\n      ProgressPage.tsx\n      ProfilePage.tsx\n      SettingsPage.tsx\n    components/\n      CharacterBuddy.tsx\n      VideoLessonCard.tsx\n      ExerciseModal.tsx\n      PlacementTest.tsx\n      WordCard.tsx\n      AchievementBadge.tsx\n    i18n/\n      kk.ts\n      ru.ts\n      en.ts\n  server/\n    routes/\n      auth.ts\n      lessons.ts\n      ai-tasks.ts\n      progress.ts\n    services/\n      taskGenerator.ts\n      transcriptParser.ts\n      storage.ts\n  prisma/\n    schema.prisma",
    logicItems: [
      "При регистрации сохраняются имя, язык, уровень и выбранный персонаж.",
      "Видео предлагаются по фильтрам жанра, возраста и уровня.",
      "После окончания видео transcript отправляется в AI-сервис.",
      "AI возвращает 2–5 заданий: multiple choice, fill in the blanks, matching.",
      "Внутри modal показываются мгновенная проверка и реакция персонажа.",
      "Прогресс, звезды и достижения записываются в базу данных.",
    ],
    aiExample:
      'POST /api/ai-tasks\n{\n  "level": "A2",\n  "language": "ru",\n  "videoTitle": "The Dragon and the Blue Balloon",\n  "transcript": "A little dragon sees a blue balloon and says: I can see the blue sky."\n}\n\n200 OK\n{\n  "tasks": [\n    {\n      "type": "multiple-choice",\n      "question": "What color is the balloon?",\n      "options": ["Red", "Blue", "Green"],\n      "answer": "Blue"\n    },\n    {\n      "type": "fill-in-the-blank",\n      "question": "I can see the ___ sky.",\n      "answer": "blue"\n    },\n    {\n      "type": "matching",\n      "pairs": [\n        ["balloon", "шар"],\n        ["sky", "небо"]\n      ]\n    }\n  ]\n}',
  },
  en: {
    brandTag: "A storybook world of English",
    navHome: "Home",
    navVideos: "Videos",
    navGenres: "Genres",
    navGames: "Exercises / Games",
    navWords: "Words",
    navFeedback: "Feedback",
    navSupport: "Support",
    homeTitle: "English for children through videos, words, and games",
    homeText: "Watch a short video, answer with your character friend, collect stars, and learn English like a fairy tale.",
    storyQuote: "Grow with stories, rise through knowledge.",
    startNow: "Start now",
    takeTest: "Check level",
    shortcutVideos: "Video lessons",
    shortcutGenres: "Genre choice",
    shortcutGames: "Game tasks",
    shortcutWords: "Word world",
    featuredLesson: "Today's lesson",
    videoGenreLabel: "Genre",
    videoDurationLabel: "Duration",
    videoCharacterLabel: "Character",
    watchAndPractice: "I watched it, open tasks",
    profileLabel: "Profile",
    characterLabel: "Helper character",
    progressLabel: "Progress",
    videoSectionEyebrow: "Short lessons",
    videoSectionTitle: "Learn with video",
    videoSectionText: "Videos of 1–3 minutes are selected by age, level, and genre.",
    genreTitle: "Choose by genre",
    genreText: "Each genre has its own color, mood, and vocabulary focus.",
    gamesEyebrow: "Tasks",
    gamesTitle: "Games after the video",
    gamesText: "Choose the right answer, fill in words, match pairs, and get immediate feedback.",
    gameTypeChoice: "Multiple choice",
    gameChoicePrompt: "Who helps the dragon in the story?",
    gameChoiceAnswers: "Robot / Fairy / Teacher",
    gameTypeFill: "Fill in the blank",
    gameFillPrompt: "The hero says: “I can ___ the stars.”",
    gameFillAnswers: "see",
    gameTypeMatch: "Matching",
    gameMatchPrompt: "moon → ay, brave → brave",
    gameMatchAnswers: "2 pairs",
    wordsEyebrow: "Vocabulary",
    wordsTitle: "Listen to words and remember them",
    wordsText: "Each word includes translation, audio, and a mini activity.",
    levelsEyebrow: "Levels",
    levelsTitle: "From A1 to B2",
    placementTitle: "Find the level with a short test",
    placementText: "A 4-question test estimates the learner level and suggests matching content.",
    placementButton: "Start test",
    achievementsEyebrow: "Achievements",
    achievementsTitle: "Stars and badges",
    feedbackEyebrow: "Feedback",
    feedbackTitle: "For parents and teachers",
    feedbackText: "A form for suggestions, lesson ratings, and new genre ideas can live here.",
    feedbackNameLabel: "Name",
    feedbackRoleLabel: "Who are you?",
    feedbackRoleParent: "Parent",
    feedbackRoleTeacher: "Teacher",
    feedbackRoleMentor: "Mentor",
    feedbackMessageLabel: "Message",
    feedbackSubmit: "Send",
    feedbackResultText: "Message saved. Later this block can be connected to email or a database.",
    supportEyebrow: "Support",
    supportTitle: "Help and safety",
    supportText: "The interface uses big buttons, simple navigation, and a parent control area.",
    supportTopicLabel: "Topic",
    supportPlanLabel: "Plan / idea / question",
    supportSubmit: "Send",
    supportResultText: "Idea saved. Later this section can be connected to a roadmap or admin panel.",
    authEyebrow: "Welcome",
    authTitle: "Register or sign in",
    nameLabel: "Name",
    emailLabel: "Email",
    passwordLabel: "Password",
    levelSelectLabel: "Level",
    saveProfile: "Save profile",
    characterPickTitle: "Choose a fairy-tale character",
    taskEyebrow: "Video complete",
    taskTitle: "AI tasks are ready",
    regenTasks: "Regenerate",
    submitTasks: "Check answers",
    placementEyebrow: "Placement test",
    placementModalTitle: "Short test",
    submitPlacement: "Show level",
    watchLabel: "Watch",
    openTasks: "Open tasks",
    listenWord: "Listen",
    memoryGame: "Mini game",
    chooseWord: "Find the translation",
    lessonDone: "Lesson completed",
    lessonCountText: "{count} lessons completed",
    profileSummaryText: "{level} level • {badges} badges",
    aiReadyText: "AI created {count} tasks for this video. Your character will react to every answer.",
    taskSuccessText: "Result: {score}/{total}. Great job!",
    taskRetryText: "Result: {score}/{total}. Let's review and try one more time.",
    placementResult: "Recommended level: {level}. Upcoming lessons will adapt to it.",
    modalChoiceLabel: "Choose one correct answer",
    modalFillLabel: "Type the word",
    modalMatchLabel: "Choose the matching pair",
    answerCorrect: "Correct",
    answerIncorrect: "Incorrect",
    wordGameText: "What is the translation of “{word}”?",
    feedbackIdeas: [
      "Suggest a new genre",
      "Share progress feedback",
      "Teacher mode request",
      "Homework idea",
    ],
    supportIdeas: [
      "Parent dashboard",
      "Safe no-chat mode",
      "Weekly study plan",
      "Lesson schedule and reminders",
    ],
    structureText:
      "src/\n  app/\n    router.tsx\n    layout/\n      BookShell.tsx\n      Header.tsx\n      MenuDrawer.tsx\n    pages/\n      HomePage.tsx\n      VideoPage.tsx\n      GenresPage.tsx\n      GamesPage.tsx\n      WordsPage.tsx\n      ProgressPage.tsx\n      ProfilePage.tsx\n      SettingsPage.tsx\n    components/\n      CharacterBuddy.tsx\n      VideoLessonCard.tsx\n      ExerciseModal.tsx\n      PlacementTest.tsx\n      WordCard.tsx\n      AchievementBadge.tsx\n    i18n/\n      kk.ts\n      ru.ts\n      en.ts\n  server/\n    routes/\n      auth.ts\n      lessons.ts\n      ai-tasks.ts\n      progress.ts\n    services/\n      taskGenerator.ts\n      transcriptParser.ts\n      storage.ts\n  prisma/\n    schema.prisma",
    logicItems: [
      "During sign-up, store name, language, level, and selected character.",
      "Recommend videos by genre, age group, and CEFR level.",
      "When the video ends, send the transcript to an AI task service.",
      "The AI returns 2–5 tasks: multiple choice, fill-in-the-blank, and matching.",
      "Inside the modal, show immediate feedback and animate the character reaction.",
      "Save progress, stars, and achievement updates to the database.",
    ],
    aiExample:
      'POST /api/ai-tasks\n{\n  "level": "A2",\n  "language": "en",\n  "videoTitle": "The Dragon and the Blue Balloon",\n  "transcript": "A little dragon sees a blue balloon and says: I can see the blue sky."\n}\n\n200 OK\n{\n  "tasks": [\n    {\n      "type": "multiple-choice",\n      "question": "What color is the balloon?",\n      "options": ["Red", "Blue", "Green"],\n      "answer": "Blue"\n    },\n    {\n      "type": "fill-in-the-blank",\n      "question": "I can see the ___ sky.",\n      "answer": "blue"\n    },\n    {\n      "type": "matching",\n      "pairs": [\n        ["balloon", "balloon"],\n        ["sky", "sky"]\n      ]\n    }\n  ]\n}',
  },
};

const els = {
  menuToggle: document.getElementById("menu-toggle"),
  menuDrawer: document.getElementById("menu-drawer"),
  languageButtons: document.querySelectorAll("[data-lang]"),
  openAuth: document.getElementById("open-auth"),
  openPlacement: document.getElementById("open-placement"),
  authModal: document.getElementById("auth-modal"),
  taskModal: document.getElementById("task-modal"),
  placementModal: document.getElementById("placement-modal"),
  closeButtons: document.querySelectorAll("[data-close]"),
  featuredLevel: document.getElementById("featured-level"),
  profileName: document.getElementById("profile-name"),
  profileSummary: document.getElementById("profile-summary"),
  progressStars: document.getElementById("progress-stars"),
  progressLessons: document.getElementById("progress-lessons"),
  characterName: document.getElementById("character-name"),
  characterAvatar: document.getElementById("character-avatar"),
  characterMood: document.getElementById("character-mood"),
  characterCard: document.getElementById("character-card"),
  videoGrid: document.getElementById("video-grid"),
  genreFilter: document.getElementById("genre-filter"),
  genreVideoList: document.getElementById("genre-video-list"),
  wordGrid: document.getElementById("word-grid"),
  levelSelector: document.getElementById("level-selector"),
  achievementGrid: document.getElementById("achievement-grid"),
  characterOptions: document.getElementById("character-options"),
  authForm: document.getElementById("auth-form"),
  authLevel: document.getElementById("auth-level"),
  taskDescription: document.getElementById("task-description"),
  taskForm: document.getElementById("task-form"),
  taskResults: document.getElementById("task-results"),
  regenTasks: document.getElementById("regen-tasks"),
  submitTasks: document.getElementById("submit-tasks"),
  placementForm: document.getElementById("placement-form"),
  submitPlacement: document.getElementById("submit-placement"),
  placementResult: document.getElementById("placement-result"),
  startPlacementInline: document.getElementById("start-placement-inline"),
  feedbackIdeas: document.getElementById("feedback-ideas"),
  supportIdeas: document.getElementById("support-ideas"),
  feedbackForm: document.getElementById("feedback-form"),
  supportForm: document.getElementById("support-form"),
  feedbackResult: document.getElementById("feedback-result"),
  supportResult: document.getElementById("support-result"),
  sectionVideoPlayer: document.getElementById("section-video-player"),
  openStorybook: document.getElementById("open-storybook"),
  storybookModal: document.getElementById("storybook-modal"),
  storybookImage: document.getElementById("storybook-image"),
  storybookPrev: document.getElementById("storybook-prev"),
  storybookNext: document.getElementById("storybook-next"),
  storybookCounter: document.getElementById("storybook-counter"),
  storybookThumbs: document.getElementById("storybook-thumbs"),
};

const storybookImages = [
  { src: "img-site /1.jpg", alt: "Image 1" },
  { src: "img-site /2.jpg", alt: "Image 2" },
  { src: "img-site /3.jpg", alt: "Image 3" },
  { src: "img-site /4.jpg", alt: "Image 4" },
  { src: "img-site /5.jpg", alt: "Image 5" },
];

let currentStoryIndex = 0;

function t(key) {
  return uiText[appState.language][key];
}

function getCharacter() {
  return characters.find((item) => item.id === appState.selectedCharacterId) || characters[0];
}

function getActiveVideo() {
  return videos.find((video) => video.id === appState.activeVideoId) || videos[0];
}

function getVideosByGenre(genreId) {
  return videos.filter((video) => video.genre === genreId);
}

function renderApp() {
  applyTranslations();
  renderProfile();
  renderFeaturedVideo();
  renderVideoGrid();
  renderGenreFilter();
  renderGenreVideoList();
  renderWords();
  renderLevels();
  renderAchievements();
  renderCharacterOptions();
  renderIdeaTags();
}

function renderStorybook() {
  const item = storybookImages[currentStoryIndex];
  if (!els.storybookImage || !item) {
    return;
  }

  els.storybookImage.src = item.src;
  els.storybookImage.alt = item.alt;
  if (els.storybookCounter) {
    els.storybookCounter.textContent = `${currentStoryIndex + 1} / ${storybookImages.length}`;
  }

  els.storybookThumbs?.querySelectorAll("[data-story-index]").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.storyIndex) === currentStoryIndex);
  });
}

function changeStorybook(direction) {
  currentStoryIndex = (currentStoryIndex + direction + storybookImages.length) % storybookImages.length;
  renderStorybook();
}

function openStorybook(index = 0) {
  currentStoryIndex = index;
  renderStorybook();
  openModal(els.storybookModal);
}

function applyTranslations() {
  document.documentElement.lang = appState.language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (uiText[appState.language][key]) {
      element.textContent = uiText[appState.language][key];
    }
  });

  els.languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === appState.language);
  });
}

function renderProfile() {
  const character = getCharacter();
  els.profileName.textContent = appState.profile.name;
  els.profileSummary.textContent = t("profileSummaryText")
    .replace("{level}", appState.profile.level)
    .replace("{badges}", appState.profile.badges);
  els.progressStars.textContent = `${appState.profile.stars} ★`;
  els.progressLessons.textContent = t("lessonCountText").replace("{count}", appState.profile.lessonsCompleted);
  els.characterName.textContent = character.name[appState.language];
  els.characterAvatar.textContent = character.emoji;
  els.characterMood.textContent = character.happy[appState.language];
}

function renderFeaturedVideo() {
  if (els.featuredLevel) {
    els.featuredLevel.textContent = appState.profile.level;
  }
}

function renderVideoGrid() {
  els.videoGrid.innerHTML = "";
  videos.forEach((video) => {
    const genre = genres.find((item) => item.id === video.genre);
    const card = document.createElement("article");
    card.className = "lesson-card";
    card.innerHTML = `
      <div class="lesson-card__top">
        <div>
          <span>${genre.label[appState.language]}</span>
          <strong>${video.title[appState.language]}</strong>
        </div>
        <div class="pill">${video.level}</div>
      </div>
      <p>${video.description[appState.language]}</p>
      <div class="lesson-card__actions">
        <button class="ghost-button" type="button" data-watch="${video.id}">${t("watchLabel")}</button>
        <button class="ghost-button" type="button" data-open-tasks="${video.id}">${t("openTasks")}</button>
      </div>
    `;
    els.videoGrid.appendChild(card);
  });
}

function renderGenreFilter() {
  els.genreFilter.innerHTML = "";
  genres.forEach((genre) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `genre-pill ${genre.id === appState.currentGenre ? "is-active" : ""}`;
    button.textContent = genre.label[appState.language];
    button.dataset.genre = genre.id;
    els.genreFilter.appendChild(button);
  });
}

function renderGenreVideoList() {
  els.genreVideoList.innerHTML = "";
  getVideosByGenre(appState.currentGenre).forEach((video) => {
    const card = document.createElement("article");
    card.className = "genre-video-card";
    card.innerHTML = `
      <div class="genre-video-card__top">
        <div>
          <span>${video.duration}</span>
          <strong>${video.title[appState.language]}</strong>
        </div>
        <div class="pill">${video.level}</div>
      </div>
      <p>${video.description[appState.language]}</p>
      <button class="ghost-button" type="button" data-watch="${video.id}">${t("watchLabel")}</button>
    `;
    els.genreVideoList.appendChild(card);
  });
}

function renderWords() {
  els.wordGrid.innerHTML = "";
  vocabulary.forEach((item) => {
    const card = document.createElement("article");
    card.className = "word-card";
    card.innerHTML = `
      <div class="word-card__image">${item.emoji}</div>
      <span>${item.translation[appState.language]}</span>
      <strong>${item.word}</strong>
      <p>${t("wordGameText").replace("{word}", item.word)}</p>
      <div class="word-card__actions">
        <button class="word-button" type="button" data-speak="${item.word}">${t("listenWord")}</button>
        <button class="word-button" type="button" data-memory="${item.word}" data-answer="${item.translation[appState.language]}">${t("memoryGame")}</button>
      </div>
    `;
    els.wordGrid.appendChild(card);
  });
}

function renderLevels() {
  els.levelSelector.innerHTML = "";
  ["A1", "A2", "B1", "B2"].forEach((level) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `level-chip ${level === appState.profile.level ? "is-active" : ""}`;
    button.textContent = level;
    button.dataset.level = level;
    els.levelSelector.appendChild(button);
  });
}

function renderAchievements() {
  els.achievementGrid.innerHTML = "";
  achievements.forEach((item) => {
    const card = document.createElement("article");
    card.className = `achievement-card ${item.unlocked ? "" : "is-locked"}`;
    card.innerHTML = `
      <span>${item.icon}</span>
      <strong>${item.title[appState.language]}</strong>
    `;
    els.achievementGrid.appendChild(card);
  });
}

function renderCharacterOptions() {
  els.characterOptions.innerHTML = "";
  characters.forEach((character) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `character-option ${character.id === appState.selectedCharacterId ? "is-active" : ""}`;
    button.dataset.character = character.id;
    button.innerHTML = `<span>${character.emoji}</span><strong>${character.name[appState.language]}</strong>`;
    els.characterOptions.appendChild(button);
  });
}

function renderIdeaTags() {
  els.feedbackIdeas.innerHTML = "";
  els.supportIdeas.innerHTML = "";

  uiText[appState.language].feedbackIdeas.forEach((item) => {
    const tag = document.createElement("div");
    tag.className = "idea-tag";
    tag.textContent = item;
    els.feedbackIdeas.appendChild(tag);
  });

  uiText[appState.language].supportIdeas.forEach((item) => {
    const tag = document.createElement("div");
    tag.className = "idea-tag";
    tag.textContent = item;
    els.supportIdeas.appendChild(tag);
  });
}

function openModal(modal) {
  modal.classList.remove("hidden");
}

function closeModal(modal) {
  modal.classList.add("hidden");
}

function setActiveVideo(videoId) {
  appState.activeVideoId = videoId;
  renderFeaturedVideo();
}

function generateAiTasks(video, level = appState.profile.level) {
  const translations = {
    wolf: appState.language === "ru" ? "волк" : appState.language === "kk" ? "қасқыр" : "wolf",
    basket: appState.language === "ru" ? "корзина" : appState.language === "kk" ? "себет" : "basket",
    grandmother: appState.language === "ru" ? "бабушка" : appState.language === "kk" ? "әже" : "grandmother",
  };

  const tasksByLevel = {
    A1: [
      {
        type: "multiple-choice",
        heading: "A1 - Beginner",
        prompt: "Task 1 - Multiple Choice\n\nWhat color is Little Red Riding Hood's cape?",
        options: ["Red", "Blue", "Black"],
        answer: "Red",
      },
      {
        type: "fill-in-the-blank",
        prompt: "Task 2 - Fill in the Blank\n\nThe wolf is in the ___ .",
        answer: "forest",
      },
      {
        type: "matching",
        heading: "Task 3 - Match",
        pairs: [
          ["wolf", translations.wolf],
          ["basket", translations.basket],
          ["grandmother", translations.grandmother],
        ],
      },
    ],
    A2: [
      {
        type: "multiple-choice",
        heading: "A2 - Elementary",
        prompt: "Task 1 - Multiple Choice\n\nWhy does Little Red Riding Hood go to her grandmother's house?",
        options: ["To bring food", "To play games", "To buy flowers"],
        answer: "To bring food",
      },
      {
        type: "fill-in-the-blank",
        prompt: "Task 2 - Complete the Sentence\n\nThe wolf wants to ___ Little Red Riding Hood.",
        answer: "trick",
      },
      {
        type: "true-false",
        prompt: "Task 3 - True / False\n\nThe wolf wears grandmother's clothes.",
        options: ["True", "False"],
        answer: "True",
      },
    ],
    B1: [
      {
        type: "multiple-choice",
        heading: "B1 - Intermediate",
        prompt: "Task 1 - Choose the Best Answer\n\nWhy does the wolf talk politely to Little Red Riding Hood?",
        options: [
          "He wants to help her",
          "He wants information about her grandmother",
          "He is lonely",
        ],
        answer: "He wants information about her grandmother",
      },
      {
        type: "ordering",
        prompt:
          "Task 2 - Put the Events in Order\n\n1. The wolf reaches grandmother's house\n2. Little Red Riding Hood enters the forest\n3. The hunter saves them",
        answer: ["2 1 3", "2-1-3", "2,1,3", "2 -> 1 -> 3", "2 to 1 to 3", "2 1 3."],
        placeholder: "Example: 2 1 3",
      },
      {
        type: "short-answer",
        prompt: "Task 3 - Short Answer\n\nWhat mistake did Little Red Riding Hood make?",
        acceptedAnswers: [
          "she trusted the wolf",
          "she talked to the wolf",
          "she trusted a stranger",
          "she spoke with the wolf",
        ],
        placeholder: "Example: She trusted the wolf.",
      },
    ],
    B2: [
      {
        type: "discussion",
        heading: "B2 - Upper Intermediate",
        prompt: "Task 1 - Discussion Question\n\nDo you think the wolf is intelligent or manipulative? Why?",
        placeholder: "Write 1-3 sentences.",
      },
      {
        type: "multiple-choice",
        prompt: "Task 2 - Vocabulary in Context\n\nChoose the synonym for 'deceive':",
        options: ["protect", "trick", "follow"],
        answer: "trick",
      },
      {
        type: "short-answer",
        prompt: "Task 3 - Critical Thinking\n\nWhat lesson does the story teach children?",
        acceptedAnswers: [
          "do not trust strangers",
          "not to trust strangers",
          "children should not trust strangers",
          "the story teaches children not to trust strangers",
        ],
        placeholder: "Example: The story teaches children not to trust strangers.",
      },
    ],
  };

  return tasksByLevel[level] || tasksByLevel.A1;
}

function openTaskModal(videoId) {
  setActiveVideo(videoId);
  const video = getActiveVideo();
  const tasks = generateAiTasks(video);
  els.taskForm.dataset.tasks = JSON.stringify(tasks);
  els.taskDescription.textContent = t("aiReadyText").replace("{count}", tasks.length);
  els.taskResults.classList.add("hidden");
  els.taskResults.classList.remove("is-error");
  renderTaskForm(tasks);
  openModal(els.taskModal);
}

function renderTaskForm(tasks) {
  els.taskForm.innerHTML = "";
  tasks.forEach((task, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "task-item";
    const headingMarkup = task.heading ? `<strong>${task.heading}</strong>` : "";
    if (task.type === "multiple-choice") {
      wrapper.innerHTML = `
        ${headingMarkup}
        <strong>${task.prompt.replace(/\n/g, "<br />")}</strong>
        <p class="task-item__hint">${t("modalChoiceLabel")}</p>
        <div class="task-item__options">
          ${task.options
            .map(
              (option) => `
                <label class="option-row">
                  <input type="radio" name="task-${index}" value="${option}" />
                  <span>${option}</span>
                </label>`
            )
            .join("")}
        </div>
      `;
    }

    if (task.type === "fill-in-the-blank") {
      wrapper.innerHTML = `
        ${headingMarkup}
        <strong>${task.prompt.replace(/\n/g, "<br />")}</strong>
        <p class="task-item__hint">${t("modalFillLabel")}</p>
        <input type="text" name="task-${index}" autocomplete="off" placeholder="${task.placeholder || ""}" />
      `;
    }

    if (task.type === "matching") {
      wrapper.innerHTML = `
        ${headingMarkup}
        <strong>${t("modalMatchLabel")}</strong>
        <div class="match-grid">
          ${task.pairs
            .map(
              ([left, right], pairIndex) => `
                <div class="match-row">
                  <span>${left}</span>
                  <select name="task-${index}-${pairIndex}">
                    ${shuffleArray(task.pairs.map((pair) => pair[1]))
                      .map((option) => `<option value="${option}">${option}</option>`)
                      .join("")}
                  </select>
                </div>`
            )
            .join("")}
        </div>
      `;
    }

    if (task.type === "true-false") {
      wrapper.innerHTML = `
        ${headingMarkup}
        <strong>${task.prompt.replace(/\n/g, "<br />")}</strong>
        <p class="task-item__hint">${t("modalChoiceLabel")}</p>
        <div class="task-item__options">
          ${task.options
            .map(
              (option) => `
                <label class="option-row">
                  <input type="radio" name="task-${index}" value="${option}" />
                  <span>${option}</span>
                </label>`
            )
            .join("")}
        </div>
      `;
    }

    if (task.type === "ordering" || task.type === "short-answer") {
      wrapper.innerHTML = `
        ${headingMarkup}
        <strong>${task.prompt.replace(/\n/g, "<br />")}</strong>
        <p class="task-item__hint">${t("modalFillLabel")}</p>
        <input type="text" name="task-${index}" autocomplete="off" placeholder="${task.placeholder || ""}" />
      `;
    }

    if (task.type === "discussion") {
      wrapper.innerHTML = `
        ${headingMarkup}
        <strong>${task.prompt.replace(/\n/g, "<br />")}</strong>
        <p class="task-item__hint">${t("modalFillLabel")}</p>
        <textarea name="task-${index}" rows="4" placeholder="${task.placeholder || ""}"></textarea>
      `;
    }

    els.taskForm.appendChild(wrapper);
  });
}

function evaluateTasks() {
  const tasks = JSON.parse(els.taskForm.dataset.tasks || "[]");
  let score = 0;

  tasks.forEach((task, index) => {
    if (task.type === "multiple-choice") {
      const selected = els.taskForm.querySelector(`input[name="task-${index}"]:checked`);
      if (selected && selected.value === task.answer) {
        score += 1;
      }
    }

    if (task.type === "fill-in-the-blank") {
      const input = els.taskForm.querySelector(`input[name="task-${index}"]`);
      if (input && input.value.trim().toLowerCase() === task.answer.toLowerCase()) {
        score += 1;
      }
    }

    if (task.type === "matching") {
      const allCorrect = task.pairs.every((pair, pairIndex) => {
        const select = els.taskForm.querySelector(`select[name="task-${index}-${pairIndex}"]`);
        return select && select.value === pair[1];
      });
      if (allCorrect) {
        score += 1;
      }
    }

    if (task.type === "true-false") {
      const selected = els.taskForm.querySelector(`input[name="task-${index}"]:checked`);
      if (selected && selected.value === task.answer) {
        score += 1;
      }
    }

    if (task.type === "ordering") {
      const input = els.taskForm.querySelector(`input[name="task-${index}"]`);
      if (input) {
        const normalized = input.value.trim().toLowerCase().replace(/\s+/g, " ");
        const isMatch = task.answer.some((item) => item.toLowerCase() === normalized);
        if (isMatch) {
          score += 1;
        }
      }
    }

    if (task.type === "short-answer") {
      const input = els.taskForm.querySelector(`input[name="task-${index}"]`);
      if (input) {
        const normalized = input.value.trim().toLowerCase();
        const isMatch = task.acceptedAnswers.some((item) => normalized.includes(item.toLowerCase()));
        if (isMatch) {
          score += 1;
        }
      }
    }

    if (task.type === "discussion") {
      const textarea = els.taskForm.querySelector(`textarea[name="task-${index}"]`);
      if (textarea && textarea.value.trim().length > 0) {
        score += 1;
      }
    }
  });

  const isGood = score >= Math.ceil(tasks.length * 0.67);
  const character = getCharacter();
  els.taskResults.classList.remove("hidden");
  els.taskResults.classList.toggle("is-error", !isGood);
  els.taskResults.textContent = (isGood ? t("taskSuccessText") : t("taskRetryText"))
    .replace("{score}", score)
    .replace("{total}", tasks.length);

  els.characterMood.textContent = isGood
    ? character.happy[appState.language]
    : character.supportive[appState.language];
  els.characterCard.classList.remove("is-happy", "is-supportive");
  els.characterCard.classList.add(isGood ? "is-happy" : "is-supportive");

  if (isGood) {
    appState.profile.lessonsCompleted += 1;
    appState.profile.stars += 12;
    renderProfile();
  }
}

function renderPlacementForm() {
  els.placementForm.innerHTML = "";
  placementQuestions.forEach((question, index) => {
    const block = document.createElement("div");
    block.className = "task-item";
    block.innerHTML = `
      <strong>${index + 1}. ${question.prompt[appState.language]}</strong>
      <div class="task-item__options">
        ${question.options
          .map(
            (option) => `
              <label class="option-row">
                <input type="radio" name="placement-${index}" value="${option}" />
                <span>${option}</span>
              </label>`
          )
          .join("")}
      </div>
    `;
    els.placementForm.appendChild(block);
  });
}

function evaluatePlacement() {
  let totalWeight = 0;
  placementQuestions.forEach((question, index) => {
    const selected = els.placementForm.querySelector(`input[name="placement-${index}"]:checked`);
    if (selected && selected.value === question.answer) {
      totalWeight += question.levelWeight;
    }
  });

  let level = "A1";
  if (totalWeight >= 9) {
    level = "B2";
  } else if (totalWeight >= 6) {
    level = "B1";
  } else if (totalWeight >= 3) {
    level = "A2";
  }

  appState.profile.level = level;
  appState.currentLevel = level;
  els.placementResult.classList.remove("hidden");
  els.placementResult.textContent = t("placementResult").replace("{level}", level);
  renderApp();
}

function playWord(word) {
  if (!("speechSynthesis" in window)) {
    return;
  }
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function runWordMiniGame(word, answer) {
  const correct = window.confirm(`${t("wordGameText").replace("{word}", word)}\n\n${answer}?`);
  const character = getCharacter();
  els.characterMood.textContent = correct
    ? character.happy[appState.language]
    : character.supportive[appState.language];
  els.characterCard.classList.remove("is-happy", "is-supportive");
  els.characterCard.classList.add(correct ? "is-happy" : "is-supportive");
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

els.menuToggle.addEventListener("click", () => {
  const expanded = els.menuToggle.getAttribute("aria-expanded") === "true";
  els.menuToggle.setAttribute("aria-expanded", String(!expanded));
  els.menuDrawer.classList.toggle("hidden");
});

els.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appState.language = button.dataset.lang;
    renderApp();
    renderPlacementForm();
  });
});

els.openAuth.addEventListener("click", () => openModal(els.authModal));
els.openPlacement.addEventListener("click", () => {
  renderPlacementForm();
  els.placementResult.classList.add("hidden");
  openModal(els.placementModal);
});
els.startPlacementInline.addEventListener("click", () => {
  renderPlacementForm();
  els.placementResult.classList.add("hidden");
  openModal(els.placementModal);
});
els.openStorybook?.addEventListener("click", () => openStorybook(0));
els.regenTasks.addEventListener("click", () => openTaskModal(appState.activeVideoId));
els.submitTasks.addEventListener("click", evaluateTasks);
els.submitPlacement.addEventListener("click", evaluatePlacement);
els.storybookPrev?.addEventListener("click", () => changeStorybook(-1));
els.storybookNext?.addEventListener("click", () => changeStorybook(1));

els.closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.close);
    closeModal(modal);
  });
});

document.addEventListener("click", (event) => {
  const watchButton = event.target.closest("[data-watch]");
  if (watchButton) {
    const videoId = watchButton.dataset.watch;
    setActiveVideo(videoId);
    document.getElementById("videos").scrollIntoView({ behavior: "smooth", block: "start" });
    if (els.sectionVideoPlayer) {
      window.setTimeout(() => {
        els.sectionVideoPlayer.play().catch(() => {});
      }, 350);
    }
  }

  const taskButton = event.target.closest("[data-open-tasks]");
  if (taskButton) {
    openTaskModal(taskButton.dataset.openTasks);
  }

  const genreButton = event.target.closest("[data-genre]");
  if (genreButton) {
    appState.currentGenre = genreButton.dataset.genre;
    renderGenreFilter();
    renderGenreVideoList();
  }

  const levelButton = event.target.closest("[data-level]");
  if (levelButton) {
    appState.profile.level = levelButton.dataset.level;
    appState.currentLevel = levelButton.dataset.level;
    els.authLevel.value = levelButton.dataset.level;
    renderApp();
  }

  const characterButton = event.target.closest("[data-character]");
  if (characterButton) {
    appState.selectedCharacterId = characterButton.dataset.character;
    renderCharacterOptions();
    renderProfile();
    renderFeaturedVideo();
  }

  const jumpButton = event.target.closest("[data-jump]");
  if (jumpButton) {
    document.getElementById(jumpButton.dataset.jump).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) {
    playWord(speakButton.dataset.speak);
  }

  const memoryButton = event.target.closest("[data-memory]");
  if (memoryButton) {
    runWordMiniGame(memoryButton.dataset.memory, memoryButton.dataset.answer);
  }

  const storyThumb = event.target.closest("[data-story-index]");
  if (storyThumb) {
    currentStoryIndex = Number(storyThumb.dataset.storyIndex);
    renderStorybook();
  }
});

els.authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(els.authForm);
  appState.profile.name = formData.get("name");
  appState.profile.email = formData.get("email");
  appState.profile.level = formData.get("level");
  appState.currentLevel = formData.get("level");
  closeModal(els.authModal);
  renderApp();
});

els.feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(els.feedbackForm);
  const author = formData.get("author");
  els.feedbackResult.classList.remove("hidden");
  els.feedbackResult.classList.remove("is-error");
  els.feedbackResult.textContent = `${author}: ${t("feedbackResultText")}`;
  els.feedbackForm.reset();
});

els.supportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(els.supportForm);
  const topic = formData.get("topic");
  els.supportResult.classList.remove("hidden");
  els.supportResult.classList.remove("is-error");
  els.supportResult.textContent = `${topic}: ${t("supportResultText")}`;
  els.supportForm.reset();
});

els.featuredVideo?.addEventListener("ended", () => openTaskModal(appState.activeVideoId));

if (storyImage) {
  storyImage.style.setProperty("--parallax-y", currentY + "px");
}

let lastY = 0;
let currentY = 0;

window.addEventListener("scroll", () => {
  lastY = window.scrollY;
});

function animate() {
  const target = lastY * 2; // 🔥 СИЛЬНЫЙ ЭФФЕКТ

  currentY += (target - currentY) * 0.25; // быстрее движение

  if (image) {
    image.style.setProperty("--parallax-y", currentY + "px");
  }

  requestAnimationFrame(animate);
}

animate();
renderApp();
renderPlacementForm();
