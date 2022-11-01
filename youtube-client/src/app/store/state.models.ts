import { Card } from '../youtube/models/card.model';
import { CustomCard } from '../youtube/models/custom-card.model';

export interface CustomCardsState {
  customCards: CustomCard[];
}

export interface YoutubeCardsState {
  youtubeCards: Card[];
}

export interface Store {
  customCards: CustomCardsState;
  youtubeCards: YoutubeCardsState;
}
