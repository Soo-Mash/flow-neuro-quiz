import { QuizData } from '../data/dataAndTypes';

export const quizData: QuizData = [
  {
    title: 'Mood',
    question:
      'Here you should try to indicate your mood, whether you have felt sad or gloomy.',
    paragraph:
      'Try to recall how you have felt during the past 3 days, whether your mood has been changeable or much the same all the time. In particular, try to recall whether you have felt more cheerful if something good happened.',
    responses: [
      'I can be either cheerful or sad, depending on the circumstances',
      'I feel a bit low for the most part, though sometimes it eases up a little',
      'I feel thoroughly low and gloomy. Even things that normally cheer me up give me no pleasure',
      'I feel so utterly low and miserable, that I can imagine nothing worse',
    ],
  },
  {
    title: 'Feelings of unease',
    question:
      'Here you should indicate to what extent you have had feelings of inner tension, uneasiness, anxiety, or vague fear, during the past 3 days.',
    paragraph:
      'Pay particular attention to how intense any such feelings have been, whether they have come and gone or persisted almost all the time.',
    responses: [
      'I feel calm for the most part',
      'I sometimes have unpleasant feelings of unease',
      'I am constantly plagued by feelings of uneasiness that can be very strong, and which I must make an effort to overcome',
      'I have dreadful, persistent or unbearable feelings of anxiety',
    ],
  },
  {
    title: 'Sleep',
    question:
      'Here you should indicate how well you sleep, how long you sleep, and how good your sleep has been for the past three nights.',
    paragraph:
      'Your assessment should reflect how you have actually slept, regardless of whether you have used sleeping pills. If you have slept more than usual, you should mark the scale at zero (0).',
    responses: [
      'I have no sleeping problems, and get as much sleep as I need. I have no difficulty in falling asleep',
      'I have some sleeping problems. Sometimes it is hard to get off to sleep, or I sleep more lightly or restlessly than usual',
      'I sleep at least 2 h a night less than usual. I wake often during the night, even if nothing has disturbed me',
      'I sleep very badly, no more than 2\u20133 h a night',
    ],
  },
  {
    title: 'Appetite',
    question:
      'Here you should indicate how your appetite has been, and try to recall whether it has differed in any way from normal.',
    paragraph:
      'If your appetite has been better than usual, you should mark the scale at zero (0).',
    responses: [
      'My appetite has been much the same as usual',
      'My appetite has been poorer than usual',
      'I have had almost no appetite at all. Food seems tasteless and I have to make myself eat',
      'I haven\u2019t felt like eating at all. I need persuading if I am to get anything down',
    ],
  },
  {
    title: 'Ability to concentrate',
    question:
      'Here you should try to indicate your ability to collect your thoughts, to concentrate on what you are doing.',
    paragraph:
      'Try to recall how well you have been able to cope with tasks requiring different degrees of concentration \u2014 for instance, compare your ability to read a more complex text and an easy passage in the newspaper, or to pay attention to the TV.',
    responses: [
      'I have no difficulty in concentrating',
      'Occasionally I find it hard to concentrate on things that I would usually find interesting (e.g., reading, or watching TV)',
      'I find it particularly hard to concentrate on things that usually require no effort (e.g., reading, or talking with other people)',
      'I am quite unable to concentrate on anything at all',
    ],
  },
  {
    title: 'Initiative',
    question: 'Here you should try to assess your ability to get things done.',
    paragraph:
      'This item concerns how hard or how easy it is for you to get started on things you think should be done, and to what extent you feel you must overcome inner resistance (inertia) in order to get started on anything.',
    responses: [
      'I have no difficulties starting new tasks',
      'When I have to get on with something, I find it more difficult than usual',
      'It requires great effort for me to get started on simple tasks that I normally perform more or less without thinking',
      'I can not get started with the simplest everyday tasks',
    ],
  },
  {
    title: 'Emotional involvement',
    question:
      'Here you should assess your interest in your surroundings, in other people, and in activities that normally give you pleasure.',
    responses: [
      'I am interested and involved in my surroundings, and this gives me pleasure',
      'I feel less strongly about things that normally arouse my interest; it is harder than usual to be cheerful, or to be angry when there is cause',
      'I feel no interest in my surroundings, not even for friends and acquaintances',
      'I no longer have any feelings. I feel painfully indifferent, even toward those closest to me',
    ],
  },
  {
    title: 'Pessimism',
    question:
      'Here you should consider how you view your future, and how you feel about yourself.',
    paragraph:
      'Consider to what extent you may feel self-critical, whether you are plagued with guilty feelings, and whether you have been worrying more than usual \u2014 for example, about your finances or your health.',
    responses: [
      'I view the future with confidence. On the whole I am quite satisfied with life',
      'Sometimes I am self-critical and think I am less worthy than others',
      'I brood over my failures and feel inferior or worthless, even if others may not agree',
      'Everything seems black to me, and I can see no glimmering of hope. I feel I am thoroughly useless, and that there is no chance of forgiveness for the awful things I have done',
    ],
  },
  {
    title: 'Zest for life',
    question:
      'This item concerns your appetite for life, and whether you have felt listless and weary of life.',
    paragraph:
      ' Have you had thoughts of suicide, and if so to what extent do you consider it a realistic escape?',
    responses: [
      'My appetite for life is normal',
      'Life doesn\u2019t seem particularly meaningful, though I don\u2019t wish I were dead',
      'I often think it would be better to be dead, and though I don\u2019t really want to commit suicide it does seem a possible solution',
      'I am quite convinced that my only solution is to die, and I give a lot of thought to the best way to take my own life',
    ],
  },
];
