export interface MultilingualText {
  ar: string;
  fa: string;
  en: string;
}

export interface Chapter {
  id: number;
  section: string;
  title: MultilingualText;
  content: MultilingualText;
}

export interface Theme {
  id: string;
  label: MultilingualText;
  chapterRange: [number, number];
  description: MultilingualText;
}

export interface BookMetadata {
  title: MultilingualText;
  author: MultilingualText;
  authorTitle: MultilingualText;
  description: MultilingualText;
  themes: Theme[];
}
