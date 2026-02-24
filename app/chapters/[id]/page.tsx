import { notFound } from "next/navigation";
import Link from "next/link";
import { getChapterById, getTotalChapters, getAllChapters } from "@/lib/chapters";
import ChapterNavigation from "@/components/ChapterNavigation";

export async function generateStaticParams() {
  const chapters = getAllChapters();
  return chapters.map((chapter) => ({
    id: chapter.id.toString(),
  }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chapterId = parseInt(id);
  
  if (isNaN(chapterId) || chapterId < 1 || chapterId > getTotalChapters()) {
    notFound();
  }

  const chapter = getChapterById(chapterId);
  
  if (!chapter) {
    notFound();
  }

  const totalChapters = getTotalChapters();

  return (
    <>
      <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 pb-32">
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
              Chapter {chapterId} of {totalChapters}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round((chapterId / totalChapters) * 100)}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[var(--color-primary)] h-2 rounded-full transition-all"
              style={{ width: `${(chapterId / totalChapters) * 100}%` }}
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

        </div>
      </main>

      {/* Sticky Bottom Navigation */}
      <ChapterNavigation currentId={chapterId} totalChapters={totalChapters} />
    </>
  );
}
