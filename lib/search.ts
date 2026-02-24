import type { Chapter } from "./types";

export interface SearchResult {
  chapter: Chapter;
  matches: {
    language: "ar" | "fa" | "en";
    field: "title" | "content";
    snippet: string;
    matchCount: number;
  }[];
  totalMatches: number;
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSnippet(text: string, query: string, contextLength: number = 100): string {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);
  
  if (index === -1) return "";
  
  const start = Math.max(0, index - contextLength);
  const end = Math.min(text.length, index + query.length + contextLength);
  
  let snippet = text.substring(start, end);
  
  if (start > 0) snippet = "..." + snippet;
  if (end < text.length) snippet = snippet + "...";
  
  return snippet;
}

function highlightText(text: string, query: string): string {
  if (!query) return text;
  
  const escapedQuery = escapeRegExp(query);
  const regex = new RegExp(`(${escapedQuery})`, "gi");
  
  return text.replace(regex, "<mark class='bg-yellow-200 font-semibold'>$1</mark>");
}

export function searchChapters(chapters: Chapter[], query: string): SearchResult[] {
  if (!query || query.trim().length < 2) return [];
  
  const normalizedQuery = query.trim().toLowerCase();
  const results: SearchResult[] = [];
  
  for (const chapter of chapters) {
    const matches: SearchResult["matches"] = [];
    let totalMatches = 0;
    
    // Search in Arabic title
    if (chapter.title.ar.toLowerCase().includes(normalizedQuery)) {
      const count = (chapter.title.ar.toLowerCase().match(new RegExp(escapeRegExp(normalizedQuery), "gi")) || []).length;
      matches.push({
        language: "ar",
        field: "title",
        snippet: highlightText(chapter.title.ar, normalizedQuery),
        matchCount: count,
      });
      totalMatches += count;
    }
    
    // Search in Arabic content
    if (chapter.content.ar.toLowerCase().includes(normalizedQuery)) {
      const count = (chapter.content.ar.toLowerCase().match(new RegExp(escapeRegExp(normalizedQuery), "gi")) || []).length;
      const snippet = getSnippet(chapter.content.ar, normalizedQuery);
      matches.push({
        language: "ar",
        field: "content",
        snippet: highlightText(snippet, normalizedQuery),
        matchCount: count,
      });
      totalMatches += count;
    }
    
    // Search in Persian title
    if (chapter.title.fa.toLowerCase().includes(normalizedQuery)) {
      const count = (chapter.title.fa.toLowerCase().match(new RegExp(escapeRegExp(normalizedQuery), "gi")) || []).length;
      matches.push({
        language: "fa",
        field: "title",
        snippet: highlightText(chapter.title.fa, normalizedQuery),
        matchCount: count,
      });
      totalMatches += count;
    }
    
    // Search in Persian content
    if (chapter.content.fa.toLowerCase().includes(normalizedQuery)) {
      const count = (chapter.content.fa.toLowerCase().match(new RegExp(escapeRegExp(normalizedQuery), "gi")) || []).length;
      const snippet = getSnippet(chapter.content.fa, normalizedQuery);
      matches.push({
        language: "fa",
        field: "content",
        snippet: highlightText(snippet, normalizedQuery),
        matchCount: count,
      });
      totalMatches += count;
    }
    
    // Search in English title
    if (chapter.title.en.toLowerCase().includes(normalizedQuery)) {
      const count = (chapter.title.en.toLowerCase().match(new RegExp(escapeRegExp(normalizedQuery), "gi")) || []).length;
      matches.push({
        language: "en",
        field: "title",
        snippet: highlightText(chapter.title.en, normalizedQuery),
        matchCount: count,
      });
      totalMatches += count;
    }
    
    // Search in English content
    if (chapter.content.en.toLowerCase().includes(normalizedQuery)) {
      const count = (chapter.content.en.toLowerCase().match(new RegExp(escapeRegExp(normalizedQuery), "gi")) || []).length;
      const snippet = getSnippet(chapter.content.en, normalizedQuery);
      matches.push({
        language: "en",
        field: "content",
        snippet: highlightText(snippet, normalizedQuery),
        matchCount: count,
      });
      totalMatches += count;
    }
    
    if (matches.length > 0) {
      results.push({
        chapter,
        matches,
        totalMatches,
      });
    }
  }
  
  // Sort by total matches (most relevant first)
  return results.sort((a, b) => b.totalMatches - a.totalMatches);
}
