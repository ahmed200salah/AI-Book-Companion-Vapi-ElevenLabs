'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Upload, ImageIcon, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  pdf: z.any().refine((file) => file instanceof File, 'PDF is required'),
  coverImage: z.any().optional(),
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  voice: z.string().min(1, 'Voice is required'),
});

const UploadForm = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '', author: '', voice: '' },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const maleVoices = ['Dave', 'Daniel', 'Chris'];
  const femaleVoices = ['Rachel', 'Sarah'];

  return (
    <div className="new-book-wrapper">
      {isLoading && (
        <div className="loading-wrapper">
          <div className="loading-shadow bg-white p-10 rounded-xl">
             <Loader2 className="loading-animation size-10" />
             <p className="loading-title">Synthesizing...</p>
          </div>
        </div>
      )}
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* PDF Upload */}
        <div className="space-y-2">
          <label className="form-label">Upload Book PDF</label>
          {pdfFile ? (
            <div className="upload-dropzone upload-dropzone-uploaded">
              <span className="upload-dropzone-text">{pdfFile.name}</span>
              <button type="button" className="upload-dropzone-remove" onClick={() => {setPdfFile(null); form.setValue('pdf', null)}}>
                <X className="size-5" />
              </button>
            </div>
          ) : (
            <div className="upload-dropzone border-2 border-dashed border-gray-200" onClick={() => document.getElementById('pdf-input')?.click()}>
              <Upload className="upload-dropzone-icon" />
              <span className="upload-dropzone-text">Click to upload PDF</span>
              <span className="upload-dropzone-hint">PDF file (max 50MB)</span>
              <input id="pdf-input" type="file" className="hidden" onChange={(e) => {setPdfFile(e.target.files?.[0] || null); form.setValue('pdf', e.target.files?.[0])}} />
            </div>
          )}
        </div>

        {/* Title */}
        <div className="space-y-2">
          <label className="form-label">Title</label>
          <input {...form.register('title')} className="form-input" placeholder="ex: Rich Dad Poor Dad" />
        </div>

        {/* Author */}
        <div className="space-y-2">
          <label className="form-label">Author Name</label>
          <input {...form.register('author')} className="form-input" placeholder="ex: Robert Kiyosaki" />
        </div>

        {/* Voice Selector */}
        <div className="space-y-2">
          <label className="form-label">Choose Assistant Voice</label>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold mb-2">Male Voices</p>
              <div className="grid grid-cols-3 gap-2">
                {maleVoices.map(v => (
                  <label key={v} className={`voice-selector-option ${form.watch('voice') === v ? 'voice-selector-option-selected' : 'voice-selector-option-default'}`}>
                    <input type="radio" {...form.register('voice')} value={v} className="hidden" />
                    {v}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2">Female Voices</p>
              <div className="grid grid-cols-2 gap-2">
                {femaleVoices.map(v => (
                  <label key={v} className={`voice-selector-option ${form.watch('voice') === v ? 'voice-selector-option-selected' : 'voice-selector-option-default'}`}>
                    <input type="radio" {...form.register('voice')} value={v} className="hidden" />
                    {v}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="space-y-2">
          <label className="form-label">Upload Book Cover Image</label>
          {coverFile ? (
            <div className="upload-dropzone upload-dropzone-uploaded">
              <span className="upload-dropzone-text">{coverFile.name}</span>
              <button type="button" className="upload-dropzone-remove" onClick={() => {setCoverFile(null); form.setValue('coverImage', null)}}>
                <X className="size-5" />
              </button>
            </div>
          ) : (
            <div className="upload-dropzone border-2 border-dashed border-gray-200" onClick={() => document.getElementById('cover-input')?.click()}>
              <ImageIcon className="upload-dropzone-icon" />
              <span className="upload-dropzone-text">Click to upload cover image</span>
              <span className="upload-dropzone-hint">Leave empty to auto-generate from PDF</span>
              <input id="cover-input" type="file" className="hidden" onChange={(e) => {setCoverFile(e.target.files?.[0] || null); form.setValue('coverImage', e.target.files?.[0])}} />
            </div>
          )}
        </div>

        <Button type="submit" className="form-btn">Begin Synthesis</Button>
      </form>
    </div>
  );
};

export default UploadForm;