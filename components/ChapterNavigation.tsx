import Link from "next/link";

interface ChapterNavigationProps {
  currentId: number;
  totalChapters: number;
}

export default function ChapterNavigation({
  currentId,
  totalChapters,
}: ChapterNavigationProps) {
  const hasPrevious = currentId > 1;
  const hasNext = currentId < totalChapters;

  return (
    <div className="sticky bottom-0 bg-white border-t-2 border-gray-200 shadow-lg py-4 px-4 sm:px-6 lg:px-8 z-40">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">
        {/* Previous Button */}
        {hasPrevious ? (
          <Link
            href={`/chapters/${currentId - 1}`}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-parchment)] transition-colors text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </Link>
        ) : (
          <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-400 rounded-lg font-semibold cursor-not-allowed text-sm sm:text-base">
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </div>
        )}

        {/* Chapter Indicator */}
        <div className="text-center flex-1">
          <div className="text-xs sm:text-sm text-gray-600">
            Chapter {currentId} of {totalChapters}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1 max-w-xs mx-auto">
            <div
              className="bg-[var(--color-primary)] h-1.5 rounded-full transition-all"
              style={{ width: `${(currentId / totalChapters) * 100}%` }}
            />
          </div>
        </div>

        {/* Next Button */}
        {hasNext ? (
          <Link
            href={`/chapters/${currentId + 1}`}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
          <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-400 rounded-lg font-semibold cursor-not-allowed text-sm sm:text-base">
            Next
          </div>
        )}
      </div>
    </div>
  );
}
