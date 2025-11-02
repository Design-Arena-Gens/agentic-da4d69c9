'use client';

import { useState, useEffect } from 'react';
import { Sparkles, RefreshCw, TrendingUp, Leaf, Lightbulb, BookOpen } from 'lucide-react';
import { ContentCard } from '@/components/ContentCard';
import { contentDatabase } from '@/lib/contentDatabase';

export default function Home() {
  const [contents, setContents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'research' | 'innovation' | 'practice'>('all');

  const generateContent = () => {
    setLoading(true);
    setTimeout(() => {
      const shuffled = [...contentDatabase].sort(() => Math.random() - 0.5);
      const filtered = filter === 'all'
        ? shuffled
        : shuffled.filter(c => c.category === filter);
      setContents(filtered.slice(0, 6));
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    generateContent();
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-emerald-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Sustainability Intelligence Hub
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Curated insights on sustainable development & innovation
                </p>
              </div>
            </div>
            <button
              onClick={generateContent}
              disabled={loading}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Feed
            </button>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            All Topics
          </button>
          <button
            onClick={() => setFilter('research')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'research'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Research Papers
          </button>
          <button
            onClick={() => setFilter('innovation')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'innovation'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            Market Innovation
          </button>
          <button
            onClick={() => setFilter('practice')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'practice'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700'
            }`}
          >
            <Leaf className="w-4 h-4" />
            Best Practices
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <RefreshCw className="w-12 h-12 text-emerald-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Curating insights...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contents.map((content, index) => (
              <ContentCard key={index} content={content} />
            ))}
          </div>
        )}

        {!loading && contents.length === 0 && (
          <div className="text-center py-20">
            <Leaf className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No content available. Try a different filter!
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>AI-powered sustainability content curation • Built for impact</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
