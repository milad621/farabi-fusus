"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getAllChapters } from "@/lib/chapters";
import { searchChapters, type SearchResult } from "@/lib/search";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback((searchQuery: string) => {
    setIsSearching(true);
    const chapters = getAllChapters();
    const searchResults = searchChapters(chapters, searchQuery);
    setResults(searchResults);
    setIsSearching(false);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      const timeoutId = setTimeout(() => {
        handleSearch(query);
      }, 300);
      return () => clearTimeout(timeoutId);
    } else {
      setResults([]);
    }
  }, [query, handleSearch]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case "ar":
        return "Arabic";
      case "fa":
        return "Persian";
      case "en":
        return "English";
      default:
        return lang;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-start justify-center p-4 pt-16">
        <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl">
          {/* Search Input */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search in Arabic, Persian, or English..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 text-lg outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {query.length > 0 && query.length < 2 && (
              <p className="text-sm text-gray-500 mt-2">
                Type at least 2 characters to search
              </p>
            )}
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {isSearching && (
              <div className="p-8 text-center text-gray-500">
                Searching...
              </div>
            )}

            {!isSearching && query.length >= 2 && results.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-gray-500">No results found for &ldquo;{query}&rdquo;</p>
                <p className="text-sm text-gray-400 mt-2">
                  Try different keywords or search in another language
                </p>
              </div>
            )}

            {!isSearching && results.length > 0 && (
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4 px-2">
                  Found {results.length} chapter{results.length !== 1 ? "s" : ""} with matches
                </p>
                <div className="space-y-4">
                  {results.map((result) => (
                    <Link
                      key={result.chapter.id}
                      href={`/chapters/${result.chapter.id}`}
                      onClick={onClose}
                      className="block p-4 rounded-lg border-2 border-gray-200 hover:border-[var(--color-primary)] hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--color-primary)] text-white font-bold rounded-full text-sm">
                          {result.chapter.id}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {result.chapter.title.en}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {result.totalMatches} match{result.totalMatches !== 1 ? "es" : ""} found
                          </p>
                        </div>
                      </div>

                      {/* Snippets */}
                      <div className="space-y-2 ml-13">
                        {result.matches.map((match, idx) => (
                          <div
                            key={idx}
                            className={`text-sm ${
                              match.language === "ar" || match.language === "fa"
                                ? "text-right font-vazirmatn"
                                : ""
                            }`}
                            dir={match.language === "ar" || match.language === "fa" ? "rtl" : "ltr"}
                          >
                            <span className="text-xs text-gray-500 uppercase">
                              {getLanguageLabel(match.language)} {match.field}:
                            </span>
                            <p
                              className="text-gray-700 mt-1"
                              dangerouslySetInnerHTML={{ __html: match.snippet }}
                            />
                          </div>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {query.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                <p>Start typing to search across all chapters</p>
                <p className="text-sm text-gray-400 mt-2">
                  Supports Arabic, Persian, and English text
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
