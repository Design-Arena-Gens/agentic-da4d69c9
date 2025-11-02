'use client';

import { useState } from 'react';
import { ExternalLink, Heart, Share2, BookmarkPlus, TrendingUp } from 'lucide-react';

interface ContentCardProps {
  content: {
    title: string;
    hook: string;
    keyInsight: string;
    source: string;
    imageUrl: string;
    category: string;
    impact: string;
    date: string;
  };
}

export function ContentCard({ content }: ContentCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const categoryColors: { [key: string]: string } = {
    research: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    innovation: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    practice: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-600">
        <img
          src={content.imageUrl}
          alt={content.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              categoryColors[content.category]
            }`}
          >
            {content.category.toUpperCase()}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-xs font-medium">{content.date}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Hook */}
        <div className="mb-3">
          <div className="flex items-start gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
            <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm leading-relaxed">
              {content.hook}
            </p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {content.title}
        </h3>

        {/* Key Insight */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {content.keyInsight}
        </p>

        {/* Impact Badge */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              💡 {content.impact}
            </span>
          </div>
        </div>

        {/* Source */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 truncate">
          Source: {content.source}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-lg transition-all ${
                liked
                  ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-lg transition-all ${
                saved
                  ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400'
              }`}
            >
              <BookmarkPlus className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 transition-all">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 text-sm font-medium transition-colors"
          >
            Read more
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
