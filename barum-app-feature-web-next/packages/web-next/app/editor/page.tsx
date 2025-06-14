'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Plate, usePlateEditor } from '@platejs/react';
import { Editor, EditorContainer } from '@/components/ui/editor';

interface TemplateData {
  id: string;
  name: string;
  content: string;
  category?: string;
}

function EditorContent() {
  const searchParams = useSearchParams();
  const [initialValue, setInitialValue] = useState<any[]>([]);
  
  const editor = usePlateEditor({
    plugins: [
      // 22
    ],
    value: initialValue,
  });

  useEffect(() => {
    const templateParam = searchParams.get('template');
    if (templateParam) {
      try {
        const templateData: TemplateData = JSON.parse(decodeURIComponent(templateParam));
        // Convert template content to PlateJS format
        const plateValue = [
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
      <div className="container mx-auto py-8">
        <Plate editor={editor}>
          <EditorContainer>
            <Editor placeholder="Start editing your document..." />
          </EditorContainer>
        </Plate>
      </div>
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}

//22