// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Run `yarn run download-resources` to regenerate.
// To overwrite this, please overwrite download.ts script.
import de from './de.json';
import en from './en.json';
import fr from './fr.json';
import ru from './ru.json';
import zh_Hans from './zh-Hans.json';

export const LOCALES = [
  {
    id: 1000040001,
    name: 'English',
    tag: 'en',
    originalName: 'English',
    flagEmoji: '🇬🇧',
    base: true,
    completeRate: 1,
    res: en,
  },
  {
    id: 1000040004,
    name: 'Simplified Chinese',
    tag: 'zh-Hans',
    originalName: '简体中文',
    flagEmoji: '🇨🇳',
    base: false,
    completeRate: 0.7651515151515151,
    res: zh_Hans,
  },
  {
    id: 1000040006,
    name: 'French',
    tag: 'fr',
    originalName: 'français',
    flagEmoji: '🇫🇷',
    base: false,
    completeRate: 0.8787878787878788,
    res: fr,
  },
  {
    id: 1000040009,
    name: 'German',
    tag: 'de',
    originalName: 'Deutsch',
    flagEmoji: '🇩🇪',
    base: false,
    completeRate: 0.8787878787878788,
    res: de,
  },
  {
    id: 1000040011,
    name: 'Russian',
    tag: 'ru',
    originalName: 'русский',
    flagEmoji: '🇷🇺',
    base: false,
    completeRate: 0.7348484848484849,
    res: ru,
  },
] as const;
