
'use client';

import React, { Suspense } from 'react';
import { PlateEditor } from '@/components/editor/plate-editor';

function EditorContent() {
  return (
    <div className="h-screen">
      <PlateEditor />
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
