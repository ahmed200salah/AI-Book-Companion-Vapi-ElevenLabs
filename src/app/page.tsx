import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function LibraryPage() {
  return (
    <main className="container wrapper">
      <div className="library-hero-card mb-12">
        <div className="library-hero-content gap-8 lg:gap-12">
          {/* Left part: Title, Description, and CTA Button */}
          <div className="library-hero-text">
            <h1 className="library-hero-title">Your Library</h1>
            <p className="library-hero-description">
              Convert your books into interactive AI conversations. Listen, learn, and discuss your favorite reads.
            </p>
            <Link href="/books/new" className="library-cta-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>Add new book</span>
            </Link>
          </div>

          {/* Middle part: Illustration (hidden on mobile, flex on desktop) */}
          <div className="library-hero-illustration-desktop">
            <Image
              src="/assets/hero-illustration.png"
              alt="Library illustration"
              width={350}
              height={233}
              priority
              className="object-contain"
            />
          </div>

          {/* Mobile Illustration */}
          <div className="library-hero-illustration">
            <Image
              src="/assets/hero-illustration.png"
              alt="Library illustration"
              width={250}
              height={166}
              priority
              className="object-contain"
            />
          </div>

          {/* Right part: Steps */}
          <div className="library-steps-card flex-1 max-w-full lg:max-w-xs shadow-soft-sm">
            <ul className="flex flex-col gap-6">
              <li className="library-step-item">
                <span className="library-step-number">1</span>
                <div>
                  <h3 className="library-step-title">Upload PDF</h3>
                  <p className="library-step-description">Add your book file</p>
                </div>
              </li>
              <li className="library-step-item">
                <span className="library-step-number">2</span>
                <div>
                  <h3 className="library-step-title">AI Processing</h3>
                  <p className="library-step-description">We analyze the content</p>
                </div>
              </li>
              <li className="library-step-item">
                <span className="library-step-number">3</span>
                <div>
                  <h3 className="library-step-title">Voice Chat</h3>
                  <p className="library-step-description">Discuss with AI</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
