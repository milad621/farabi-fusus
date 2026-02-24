import Link from "next/link";
import { getBookMetadata } from "@/lib/chapters";

export default function Home() {
  const book = getBookMetadata();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-[var(--color-parchment)] to-[var(--color-parchment-light)]">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Book Title - Multilingual */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-primary)]">
              {book.title.en}
            </h1>
            <p className="text-4xl md:text-5xl font-vazirmatn font-bold" dir="rtl">
              {book.title.ar}
            </p>
            <p className="text-3xl md:text-4xl font-vazirmatn text-gray-700" dir="rtl">
              {book.title.fa}
            </p>
          </div>

          {/* Author Info */}
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">
              {book.author.en}
            </p>
            <p className="text-lg font-vazirmatn text-gray-600" dir="rtl">
              {book.author.ar}
            </p>
            <p className="text-base text-[var(--color-secondary)] font-medium">
              {book.authorTitle.en}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              href="/chapters/1"
              className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-lg font-semibold text-lg hover:bg-[var(--color-primary-dark)] transition-colors shadow-lg"
            >
              Start Reading
            </Link>
            <Link
              href="/chapters"
              className="px-8 py-4 bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] rounded-lg font-semibold text-lg hover:bg-[var(--color-parchment)] transition-colors shadow-lg"
            >
              Table of Contents
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            About This Work
          </h2>

          {/* English Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {book.description.en}
            </p>
          </div>

          {/* Persian Description */}
          <div className="p-6 bg-[var(--color-parchment-light)] rounded-lg" dir="rtl">
            <p className="font-vazirmatn text-lg leading-loose text-right text-gray-800">
              {book.description.fa}
            </p>
          </div>

          {/* Arabic Description */}
          <div className="p-6 bg-gray-50 rounded-lg" dir="rtl">
            <p className="font-vazirmatn text-lg leading-loose text-right text-gray-800">
              {book.description.ar}
            </p>
          </div>
        </div>
      </section>

      {/* Themes Overview */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-[var(--color-parchment-light)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-primary)]">
            Themes & Structure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {book.themes.map((theme) => (
              <div
                key={theme.id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)]">
                  {theme.label.en}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Chapters {theme.chapterRange[0]}–{theme.chapterRange[1]}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {theme.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attribution Note */}
      <section className="py-8 px-6 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Note on Attribution:</strong> Scholarly sources note that
            the authorship of this work is disputed. Some consider it
            authentically Farabian, while others classify it as pseudo-Farabian.
            The text presented here is based on available manuscripts and
            translations.
          </p>
        </div>
      </section>
    </main>
  );
}
