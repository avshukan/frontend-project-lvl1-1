/* eslint-disable import/extensions, no-console */
import { greetings, getRandomInt, gameProcess } from '../index.js';

/* Печать правил игры */
const printRules = () => {
  console.log('What number is missing in the progression?');
};

/* Получение данных игры */
const getData = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    const progressionLenght = getRandomInt(5) + 5;
    const progressionStep = getRandomInt(9) + 1;
    const numPosition = getRandomInt(progressionLenght);
    let progressionElem = getRandomInt(50);
    let progression = '';
    for (let j = 0; j < progressionLenght; j += 1) {
      if (j === numPosition) {
        gameData[1][i] = progressionElem;
        progression = `${progression} ..`;
      } else {
        progression = `${progression} ${progressionElem}`;
      }
      progressionElem += progressionStep;
    }
    gameData[0][i] = progression;
  }
  return gameData;
};

/* Процесс игры */
export const gameProgression = () => {
  const name = greetings();
  printRules();
  gameProcess(name, getData());
};

export default gameProgression;
