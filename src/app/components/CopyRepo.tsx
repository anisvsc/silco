'use client';

import { Check, Copy, Github } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CopyRepo() {
  const [copied, setCopied] = useState(false);
  const repoUrl = 'https://github.com/anisvsc/silco.git';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(repoUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ERROR HERE
    }
  };

  return (
    <div className="-translate-x-1/2 fixed bottom-8 left-1/2 z-50 transform">
      <div className=" relative">
        {/* Main glass container */}
        <div className="relative rounded-2xl border border-gray-800/50 bg-primary-foreground/30 p-4 shadow-2xl backdrop-blur transition-all duration-300 hover:shadow-primary-foreground/50">
          {/* Liquid animation overlay */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="-skew-x-12 absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gray-700/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </div>

          {/* Content */}
          <div className="relative flex items-center space-x-3">
            <Link
              className="cursor-pointer rounded-lg border bg-primary-foreground/60 p-2 backdrop-blur-sm"
              href={repoUrl}
              target="_blank"
            >
              <Github className="h-5 w-5 text-foreground/80 hover:text-foreground/100" />
            </Link>

            <div className="hidden flex-1 sm:block">
              <div className="rounded-lg border px-3 py-2 font-mono text-foreground/80 text-sm backdrop-blur-sm">
                {repoUrl}
              </div>
            </div>

            <button
              className="cursor-pointer rounded-lg border bg-primary-foreground/60 p-2 backdrop-blur-sm transition-all duration-200 "
              onClick={handleCopy}
              type="button"
            >
              {copied ? (
                <Check className="h-5 w-5 text-foreground/80" />
              ) : (
                <Copy className="h-5 w-5 text-foreground/80 hover:text-foreground/100" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
