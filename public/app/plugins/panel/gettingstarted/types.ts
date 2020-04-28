import { IconName } from '@grafana/ui';

export type CardType = 'tutorial' | 'docs' | 'other';

export interface Card {
  title: string;
  type: CardType;
  icon: IconName;
  href: string;
  check: () => Promise<boolean>;
  done: boolean;
  heading: string;
  info?: string;
  // For local storage
  key?: string;
}

export interface SetupStep {
  heading: string;
  subheading: string;
  title: string;
  info: string;
  cards: Card[];
  done: boolean;
}