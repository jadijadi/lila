import { arrow, assetUrl, pieceImg, toLevel } from '../util';
import type { StageNoID } from './list';

const stage: StageNoID = {
  key: 'queen',
  title: i18n.learn.theQueen,
  subtitle: i18n.learn.queenCombinesRookAndBishop,
  image: assetUrl + 'images/learn/pieces/Q.svg',
  intro: i18n.learn.queenIntro,
  illustration: pieceImg('queen'),
  levels: [
    {
      goal: i18n.learn.grabAllTheStars,
      fen: '8/8/8/8/8/8/4Q3/8 w - -',
      apples: 'e5 b8',
      nbMoves: 2,
      shapes: [arrow('e2e5'), arrow('e5b8')],
    },
    {
      goal: i18n.learn.grabAllTheStars,
      fen: '8/8/8/8/3Q4/8/8/8 w - -',
      apples: 'a3 f2 f8 h3',
      nbMoves: 4,
    },
    {
      goal: i18n.learn.grabAllTheStars,
      fen: '8/8/8/8/2Q5/8/8/8 w - -',
      apples: 'a3 d6 f1 f8 g3 h6',
      nbMoves: 6,
    },
    {
      goal: i18n.learn.grabAllTheStars,
      fen: '8/6Q1/8/8/8/8/8/8 w - -',
      apples: 'a2 b5 d3 g1 g8 h2 h5',
      nbMoves: 7,
    },
    {
      goal: i18n.learn.grabAllTheStars,
      fen: '8/8/8/8/8/8/8/4Q3 w - -',
      apples: 'a6 d1 f2 f6 g6 g8 h1 h4',
      nbMoves: 9,
    },
  ].map(toLevel),
  complete: i18n.learn.queenComplete,
};
export default stage;
