import { Card } from '../models/card.model';

export function SettingsSortDate(cards: Card[], direcrion: boolean) {
  const cardsInner: Card[] = <Card[]>JSON.parse(JSON.stringify(cards));
  const cardsInnerDate = cardsInner.map((obj) => {
    return { ...obj, publishedAt: new Date(obj.snippet.publishedAt) };
  });

  if (direcrion) {
    return [...cardsInnerDate].sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime());
  }
  return [...cardsInnerDate].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export function SettingsSortCount(cards: Card[], direcrion: boolean) {
  const cardsInner: Card[] = <Card[]>JSON.parse(JSON.stringify(cards));
  if (direcrion) {
    return cardsInner.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
  }
  return cardsInner.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
}

export function SettingsFilterByWord(cards: Card[], word: string) {
  const cardsInner: Card[] = <Card[]>JSON.parse(JSON.stringify(cards));

  return cardsInner.filter(({ snippet }) => snippet.title.toLowerCase().indexOf(word.toLowerCase()) > -1);
}
