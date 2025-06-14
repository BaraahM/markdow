'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  CodePlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  BlockquotePlugin,
  HeadingPlugin,
  ParagraphPlugin
} from '@platejs/basic-nodes/react';
import { Plate, usePlateEditor } from 'platejs/react';
import { PlateContent } from 'platejs/react';

interface TemplateData {
  id: string;
  name: string;
  content: string;
  category?: string;
}

function EditorContent() {
  const searchParams = useSearchParams();
  const [initialValue, setInitialValue] = useState<any[]>([
    {
      type: 'p',
      children: [{ text: 'Start editing your document...' }],
    },
  ]);

  const editor = usePlateEditor({
    plugins: [
      // Basic text formatting
      BoldPlugin,
      ItalicPlugin,
      UnderlinePlugin,
      StrikethroughPlugin,
      CodePlugin,
      SubscriptPlugin,
      SuperscriptPlugin,
      
      // Block elements
      ParagraphPlugin,
      HeadingPlugin,
      BlockquotePlugin,
    ],
    value: initialValue,
  });

  useEffect(() => {
    const templateParam = searchParams.get('template');
    if (templateParam) {
      try {
        const templateData: TemplateData = JSON.parse(decodeURIComponent(templateParam));
        const plateValue = [
          {
            type: 'h1',
            children: [{ text: templateData.name }],
          },
          {
            type: 'p',
            children: [{ text: templateData.content }],
          },
        ];
        setInitialValue(plateValue);
      } catch (error) {
        console.error('Error parsing template data:', error);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Plate editor={editor}>
            <PlateContent 
              className="min-h-[500px] p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Start editing your document..."
            />
          </Plate>
        </div>
      </div>
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}


//22