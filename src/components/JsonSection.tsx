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
    1: 'text-2xl font-bold text-gray-800 border-b-2 border-indigo-500 pb-2 mb-4 hover:text-indigo-700 transition-colors',
    2: 'text-xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-3 hover:text-indigo-600 transition-colors',
    3: 'text-lg font-medium text-gray-600 mb-2 hover:text-gray-800 transition-colors',
    4: 'text-base font-medium text-gray-600 mb-2 hover:text-gray-800 transition-colors'
  };

  const containerClasses = {
    1: 'mb-8 bg-white rounded-lg',
    2: 'mb-6 bg-gray-50/50 rounded-lg',
    3: 'mb-4',
    4: 'mb-3'
  };

  return (
    <div className={`${containerClasses[level as keyof typeof containerClasses] || 'mb-4'} hover:bg-gray-50/80 transition-colors`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left focus:outline-none hover:opacity-80 transition-opacity p-2 rounded-lg"
      >
        {isOpen ? (
          <ChevronDown size={16} className="text-indigo-500 flex-shrink-0" />
        ) : (
          <ChevronRight size={16} className="text-indigo-500 flex-shrink-0" />
        )}
        <h1 className={levelClasses[level as keyof typeof levelClasses] || levelClasses[4]}>
          {title}
        </h1>
      </button>
      {isOpen && (
        <div className="ml-6 mt-2 pl-2 border-l-2 border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
};

export default JsonSection;
