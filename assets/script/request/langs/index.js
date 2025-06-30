import de from './de.json';
import it from './it.json';
import en from './en.json';

export const currentLanguage = document.documentElement.lang;

export const languages = {
    de: de,
    it: it,
    en: en,
}