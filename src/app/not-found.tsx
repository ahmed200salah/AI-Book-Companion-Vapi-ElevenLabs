import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Home, Plus } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[85vh] px-5 py-12 bg- bg-('--bg-primary')">
      <div className="max-w-xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
        
        {/* Floating book / icon layout */}
        <div className="relative mx-auto w-40 h-40 flex items-center justify-center bg-[#f3e4c7] rounded-full shadow-soft-lg border-2 border-[var(--border-subtle)]">
          <Image
            src="/assets/book-cover.svg"
            alt="Lost book illustration"
            width={80}
            height={80}
            className="object-contain animate-bounce duration-[3000ms] ease-in-out"
          />
          <span className="absolute text-5xl font-extrabold font-serif text-[#663820] tracking-widest bg-white/90 px-3 py-1 rounded-md shadow-soft border-2 border-[#663820]">
            404
          </span>
        </div>

        {/* Text Section with Warm Literary Theme */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif text-[#212a3b] leading-tight">
            Lost in the Stacks
          </h1>
          <p className="text-lg md:text-xl text-[#3d485e] max-w-md mx-auto leading-relaxed">
            This page seems to have slipped out of the binding, or perhaps it was never written in the first place.
          </p>
        </div>

        {/* Action Buttons to guide user back */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/" className="btn-primary w-full sm:w-auto flex items-center gap-2.5">
            <Home className="w-5 h-5 text-white" />
            <span>Return to Library</span>
          </Link>
          <Link href="/books/new" className="btn-secondary w-full sm:w-auto flex items-center gap-2.5 border border-gray-200">
            <Plus className="w-5 h-5 text-[var(--text-secondary)]" />
            <span>Add a New Book</span>
          </Link>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 pt-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[var(--border-subtle)]" />
          <BookOpen className="w-5 h-5 text-[#663820]/40" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[var(--border-subtle)]" />
        </div>
      </div>
    </div>
  );
}
