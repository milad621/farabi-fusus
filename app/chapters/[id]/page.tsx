import { notFound } from "next/navigation";
import Link from "next/link";
import { getChapterById, getTotalChapters, getAllChapters } from "@/lib/chapters";

export async function generateStaticParams() {
  const chapters = getAllChapters();
  return chapters.map((chapter) => ({
    id: chapter.id.toString(),
  }));
}

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterId = parseInt(params.id);
  
  if (isNaN(chapterId) || chapterId < 1 || chapterId > getTotalChapters()) {
    notFound();
  }

  const chapter = getChapterById(chapterId);
  
  if (!chapter) {
    notFound();
  }

  const hasPrevious = chapterId > 1;
  const hasNext = chapterId < getTotalChapters();

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/chapters"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Table of Contents
          </Link>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Chapter {chapterId} of {getTotalChapters()}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round((chapterId / getTotalChapters()) * 100)}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[var(--color-primary)] h-2 rounded-full transition-all"
              style={{ width: `${(chapterId / getTotalChapters()) * 100}%` }}
            />
          </div>
        </div>

        {/* Chapter Number Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-primary)] text-white text-2xl font-bold rounded-full mb-4">
            {chapterId}
          </div>
        </div>

        {/* Chapter Content - Stacked Layout */}
        <div className="space-y-8">
          {/* Arabic */}
          <section className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg shadow-md border-r-4 border-[var(--color-secondary)]">
            <div dir="rtl" className="text-right">
              <h1 className="text-3xl font-bold font-vazirmatn mb-6 text-gray-900">
                {chapter.title.ar}
              </h1>
              <p className="text-xl font-vazirmatn leading-loose text-gray-800">
                {chapter.content.ar}
              </p>
            </div>
            <div className="mt-4 text-xs text-gray-500 text-right">
              <span className="font-vazirmatn">العربية</span> • Arabic
            </div>
          </section>

          {/* Persian */}
          <section className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md border-r-4 border-[var(--color-primary)]">
            <div dir="rtl" className="text-right">
              <h2 className="text-3xl font-bold font-vazirmatn mb-6 text-gray-900">
                {chapter.title.fa}
              </h2>
              <p className="text-xl font-vazirmatn leading-loose text-gray-800">
                {chapter.content.fa}
              </p>
            </div>
            <div className="mt-4 text-xs text-gray-500 text-right">
              <span className="font-vazirmatn">فارسی</span> • Persian
            </div>
          </section>

          {/* English */}
          <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[var(--color-primary)]">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {chapter.title.en}
            </h2>
            <p className="text-xl leading-relaxed text-gray-800">
              {chapter.content.en}
            </p>
            <div className="mt-4 text-xs text-gray-500">
              English
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between items-center gap-4">
          {hasPrevious ? (
            <Link
              href={`/chapters/${chapterId - 1}`}
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-parchment)] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </Link>
          ) : (
            <div className="px-6 py-3 bg-gray-100 text-gray-400 rounded-lg font-semibold cursor-not-allowed">
              Previous
            </div>
          )}

          {hasNext ? (
            <Link
              href={`/chapters/${chapterId + 1}`}
              className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Next
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div className="px-6 py-3 bg-gray-100 text-gray-400 rounded-lg font-semibold cursor-not-allowed">
              Next
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
