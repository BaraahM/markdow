'use client';

import { useRouter } from 'next/navigation';
import { Template } from '@/components/molecules/TemplateGalleryList/TemplateGalleryList';

interface TemplatePreviewProps {
  selectedTemplate: Template | null;
}

const TemplatePreview = ({ selectedTemplate }: TemplatePreviewProps) => {
  const router = useRouter();

  const handleStartFromTemplate = () => {
    if (selectedTemplate) {
      const searchParams = new URLSearchParams({
        templateId: selectedTemplate.id?.toString() || '',
        templateName: selectedTemplate.name,
        templateContent: selectedTemplate.content
      });
      router.push(`/editor?${searchParams.toString()}`);
    }
  };

  if (!selectedTemplate) {
    return (
      <div className="flex-1 bg-gray-50 p-8 overflow-auto flex items-center justify-center">
        <p className="text-lg text-gray-500">
          Select a template to view its preview
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-50 p-8 overflow-auto">
      <div className="max-w-4xl mx-auto bg-white p-10 border border-gray-200 shadow-sm">
        <h1 className="text-2xl font-semibold mb-8 text-center text-gray-800">
          {selectedTemplate.name}
        </h1>

        <div className="text-base mb-8 leading-relaxed text-gray-700">
          {selectedTemplate.content}
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={handleStartFromTemplate}
            className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 font-medium"
          >
            Start from this template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;
//22