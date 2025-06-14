'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Template {
  id: string;
  name: string;
  content: string;
  category?: string;
}

interface TemplatePreviewProps {
  selectedTemplate: Template | null;
  templates: Template[];
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ 
  selectedTemplate, 
  templates 
}) => {
  const router = useRouter();

  const handleStartFromTemplate = (template: Template) => {
    // Navigate to editor with template data
    const templateData = encodeURIComponent(JSON.stringify({
      id: template.id,
      name: template.name,
      content: template.content,
      category: template.category
    }));
    
    router.push(`/editor?template=${templateData}`);
  };

  if (!selectedTemplate) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        Select a template to view its preview
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedTemplate.name}
        </h2>
      </div>
      
      <div className="mb-6">
        <div className="prose prose-sm max-w-none">
          {selectedTemplate.content}
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={() => handleStartFromTemplate(selectedTemplate)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
        >
          Start from this template
        </button>
      </div>
    </div>
  );
};

export default TemplatePreview;
//22