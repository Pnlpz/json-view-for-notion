
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface JsonSectionProps {
  title: string;
  children: React.ReactNode;
  level?: number;
  defaultOpen?: boolean;
}

const JsonSection: React.FC<JsonSectionProps> = ({ 
  title, 
  children, 
  level = 1,
  defaultOpen = true 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const levelClasses = {
    1: 'text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4',
    2: 'text-xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-3',
    3: 'text-lg font-medium text-gray-600 mb-2',
    4: 'text-base font-medium text-gray-600 mb-2'
  };

  const containerClasses = {
    1: 'mb-8',
    2: 'mb-6',
    3: 'mb-4',
    4: 'mb-3'
  };

  return (
    <div className={containerClasses[level as keyof typeof containerClasses] || 'mb-4'}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left focus:outline-none hover:opacity-80 transition-opacity"
      >
        {isOpen ? (
          <ChevronDown size={16} className="text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronRight size={16} className="text-gray-500 flex-shrink-0" />
        )}
        <h1 className={levelClasses[level as keyof typeof levelClasses] || levelClasses[4]}>
          {title}
        </h1>
      </button>
      {isOpen && (
        <div className="ml-6 mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default JsonSection;
