const DESCRIPTIONS = [
  'Море и пляж',
  'Дети играют на пляже',
  'Живописное место',
  'Оттенки осени',
  'Представление на сцене',
  'Пикник на лужайке',
  'Девочка вяжет',
  'Пара людей',
  'Лужи на асфальте',
  'Туристы у башни Намсан',
  'Люди на набережной',
  'Дом книги',
  'Тлеющий костер',
  'Вишневый сад',
  'Медленный танец',
  'Девушка в розовом платье',
  'Река',
  'Дикая природа',
  'Безлюдная деревня',
  'Спелая клубникв',
  'Краски лета',
  'Солнечный свет',
  'Лунный свет',
  'Голубая лагуна',
  'Дикая природа'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Анастасия',
  'Евгений',
  'Елена',
  'Никита',
  'Наталья',
  'Виктория',
  'Антон',
  'Татьяна',
  'Денис',
  'Анна',
  'Герман',
  'Святослав',
  'Мира',
  'Артём',
  'Ольга',
  'Олег',
  'Юлия',
  'Вероника',
  'Николай',
  'Александр',
  'Максим',
  'Светлана',
  'Ева'
];

const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENT_COUNT = 0;
const MAX_COMMENT_COUNT = 30;
const AMOUNT_OF_PHOTOS = 25;


const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let currentId = 0;
  return () => {
    currentId += 1;
    return currentId;
  };
};

const generateCommentId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const generateComments = () => {
  const count = getRandomInteger(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT);
  return Array.from({ length: count }, createComment);
};

const createPhotoDescription = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[id - 1],
  likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: generateComments()
});

const arrayOfPhotos = Array.from({ length: AMOUNT_OF_PHOTOS }, (_, index) => createPhotoDescription(index + 1));

console.log(arrayOfPhotos);