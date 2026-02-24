import { getBookMetadata, getChapterById } from "@/lib/chapters";

export default function Home() {
  const book = getBookMetadata();
  const sampleChapter = getChapterById(1);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            {book.title.en}
          </h1>
          <p className="text-3xl font-vazirmatn" dir="rtl">
            {book.title.ar}
          </p>
          <p className="text-2xl font-vazirmatn" dir="rtl">
            {book.title.fa}
          </p>
          <p className="text-lg text-gray-600">
            {book.author.en}
          </p>
        </div>

        {/* Sample Chapter - Testing Fonts & RTL */}
        {sampleChapter && (
          <div className="space-y-6 border-t pt-6">
            <h2 className="text-2xl font-bold text-center">
              Font & Direction Test - Chapter 1
            </h2>
            
            {/* Arabic */}
            <div className="p-6 bg-white rounded-lg shadow-sm" dir="rtl">
              <h3 className="text-xl font-bold font-vazirmatn mb-3 text-right">
                {sampleChapter.title.ar}
              </h3>
              <p className="text-lg font-vazirmatn leading-loose text-right">
                {sampleChapter.content.ar}
              </p>
            </div>

            {/* Persian */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm" dir="rtl">
              <h3 className="text-xl font-bold font-vazirmatn mb-3 text-right">
                {sampleChapter.title.fa}
              </h3>
              <p className="text-lg font-vazirmatn leading-loose text-right">
                {sampleChapter.content.fa}
              </p>
            </div>

            {/* English */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                {sampleChapter.title.en}
              </h3>
              <p className="text-lg leading-relaxed">
                {sampleChapter.content.en}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
