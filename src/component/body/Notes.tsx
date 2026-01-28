import { BookOpen } from 'lucide-react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import { useEffect, useState } from 'react';

type Chapter = {
  id: number;
  title: string;
  url: string;
};

const chapters11: Chapter[] = [
  { id: 1, title: "Introduction to Computer", url: "https://example.com/chapter-1" },
  { id: 2, title: "Number System", url: "https://example.com/chapter-2" },
  { id: 3, title: "Computer Software", url: "https://example.com/chapter-3" },
  { id: 4, title: "Operating System", url: "https://example.com/chapter-4" },
  { id: 5, title: "Application Software", url: "https://example.com/chapter-5" },
  { id: 6, title: "Programming Concepts", url: "https://example.com/chapter-6" },
  { id: 7, title: "Web Technology I", url: "https://example.com/chapter-7" },
  { id: 8, title: "Web Technology II", url: "https://example.com/chapter-8" }
];

const chapters12: Chapter[] = [
  { id: 1, title: "12", url: "https://example.com/chapter-1" },
  { id: 2, title: "13", url: "https://example.com/chapter-2" },
  { id: 3, title: "Computer Software", url: "https://example.com/chapter-3" },
  { id: 4, title: "Operating System", url: "https://example.com/chapter-4" },
  { id: 5, title: "Application Software", url: "https://example.com/chapter-5" },
  { id: 6, title: "Programming Concepts", url: "https://example.com/chapter-6" },
  { id: 7, title: "Web Technology I", url: "https://example.com/chapter-7" }
];

export default function Notes({ notes }: { notes: string }) {
  const [currentChapter, setCurrentChapter] = useState<Chapter[]>([]);

  useEffect(() => {
    setCurrentChapter(notes === "class11" ? chapters11 : chapters12);
  }, [notes]);

  return (
    <div>
      <Navigation />

      <div className="mt-4 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-500/20 rounded-3xl mb-2">
              <BookOpen className="text-indigo-400" size={30} />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-3">
              Course Chapters
            </h1>
            <p className="text-slate-400 text-lg">
              Click on any chapter to start learning
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentChapter.map((chapter) => (
              <div
                key={chapter.id}
                className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-4 hover:border-indigo-500/50 transition-all"
              >
                <div className="w-7 h-7 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mb-4 flex items-center justify-center font-bold">
                  {chapter.id}
                </div>

                <h3 className="text-md font-semibold mb-3">
                  {chapter.title}
                </h3>

                <a
                  href={chapter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl"
                >
                  View Chapter
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
