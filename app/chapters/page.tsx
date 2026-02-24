import Link from "next/link";
import { getAllChapters, getBookMetadata } from "@/lib/chapters";

export default function ChaptersPage() {
  const chapters = getAllChapters();
  const { themes } = getBookMetadata();

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
            Table of Contents
          </h1>
          <p className="text-xl font-vazirmatn" dir="rtl">
            فهرست مطالب
          </p>
          <p className="text-gray-600 mt-4">
            70 chapters organized by thematic sections
          </p>
        </div>

        {/* Chapters by Theme */}
        <div className="space-y-12">
          {themes.map((theme) => {
            const themeChapters = chapters.filter(
              (ch) =>
                ch.id >= theme.chapterRange[0] && ch.id <= theme.chapterRange[1]
            );

            return (
              <section key={theme.id} className="bg-white rounded-lg shadow-md p-6">
                {/* Theme Header */}
                <div className="mb-6 pb-4 border-b-2 border-[var(--color-secondary)]">
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                    {theme.label.en}
                  </h2>
                  <p className="text-lg font-vazirmatn text-gray-700" dir="rtl">
                    {theme.label.ar}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {theme.description.en}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Chapters {theme.chapterRange[0]}–{theme.chapterRange[1]}
                  </p>
                </div>

                {/* Chapter List */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {themeChapters.map((chapter) => (
                    <Link
                      key={chapter.id}
                      href={`/chapters/${chapter.id}`}
                      className="group block p-4 rounded-lg border-2 border-gray-200 hover:border-[var(--color-primary)] hover:shadow-lg transition-all"
                    >
                      {/* Chapter Number Badge */}
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--color-primary)] text-white font-bold rounded-full group-hover:bg-[var(--color-primary-dark)] transition-colors">
                          {chapter.id}
                        </span>
                        <div className="flex-1 min-w-0">
                          {/* English Title */}
                          <h3 className="font-semibold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 mb-2">
                            {chapter.title.en}
                          </h3>
                          {/* Arabic Title */}
                          <p
                            className="text-sm font-vazirmatn text-gray-600 line-clamp-1"
                            dir="rtl"
                          >
                            {chapter.title.ar}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/chapters/1"
            className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white rounded-lg font-semibold text-lg hover:bg-[var(--color-primary-dark)] transition-colors shadow-lg"
          >
            Start Reading from Chapter 1
          </Link>
        </div>
      </div>
    </main>
  );
}
