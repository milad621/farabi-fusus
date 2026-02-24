export default function ChapterPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Chapter {params.id}
        </h1>
        <p className="text-center text-gray-600">
          Coming soon in Phase 2B...
        </p>
      </div>
    </main>
  );
}
