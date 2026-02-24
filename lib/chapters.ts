import chaptersData from "@/content/chapters.json";
import bookData from "@/content/book-description.json";
import type { Chapter, BookMetadata, Theme } from "./types";

const chapters = chaptersData as Chapter[];
const metadata = bookData as BookMetadata;

export function getAllChapters(): Chapter[] {
  return chapters;
}

export function getChapterById(id: number): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === id);
}

export function getChaptersBySection(section: string): Chapter[] {
  return chapters.filter((chapter) => chapter.section === section);
}

export function getBookMetadata(): BookMetadata {
  return metadata;
}

export function getThemes(): Theme[] {
  return metadata.themes;
}

export function getThemeById(id: string): Theme | undefined {
  return metadata.themes.find((theme) => theme.id === id);
}

export function getTotalChapters(): number {
  return chapters.length;
}

export function getPreviousChapter(currentId: number): Chapter | null {
  if (currentId <= 1) return null;
  return getChapterById(currentId - 1) || null;
}

export function getNextChapter(currentId: number): Chapter | null {
  if (currentId >= chapters.length) return null;
  return getChapterById(currentId + 1) || null;
}
