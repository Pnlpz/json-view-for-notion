
import React from 'react';
import { Card } from '@/components/ui/card';
import JsonSection from './JsonSection';

interface DynamicJsonRendererProps {
  data: any;
  title?: string;
}

const DynamicJsonRenderer: React.FC<DynamicJsonRendererProps> = ({ data, title = "JSON Data" }) => {
  const renderValue = (value: any, key?: string, level: number = 1): React.ReactNode => {
    if (value === null) {
      return <span className="text-gray-400 italic">null</span>;
    }

    if (typeof value === 'boolean') {
      return <span className={`font-medium ${value ? 'text-green-600' : 'text-red-600'}`}>{String(value)}</span>;
    }

    if (typeof value === 'number') {
      return <span className="text-blue-600 font-medium">{value}</span>;
    }

    if (typeof value === 'string') {
      // Check if it's a URL
      if (value.startsWith('http://') || value.startsWith('https://')) {
        return (
          <a 
            href={value} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all"
          >
            {value}
          </a>
        );
      }
      return <span className="text-gray-700">{value}</span>;
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return <span className="text-gray-400 italic">Empty array</span>;
      }

      // Check if all items are strings (for simple lists)
      if (value.every(item => typeof item === 'string')) {
        return (
          <ul className="space-y-1 ml-4">
            {value.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      }

      // For complex arrays
      return (
        <div className="space-y-3">
          {value.map((item, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <h4 className="font-medium text-gray-600 mb-2">Item {index + 1}</h4>
              {renderValue(item, undefined, level + 1)}
            </div>
          ))}
        </div>
      );
    }

    if (typeof value === 'object') {
      const entries = Object.entries(value);
      if (entries.length === 0) {
        return <span className="text-gray-400 italic">Empty object</span>;
      }

      return (
        <div className="space-y-4">
          {entries.map(([objKey, objValue]) => {
            const formattedKey = objKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            
            if (typeof objValue === 'object' && objValue !== null && !Array.isArray(objValue)) {
              return (
                <JsonSection key={objKey} title={formattedKey} level={Math.min(level + 1, 4)}>
                  {renderValue(objValue, objKey, level + 1)}
                </JsonSection>
              );
            }

            return (
              <div key={objKey} className="space-y-2">
                <h4 className="font-medium text-gray-700">{formattedKey}</h4>
                <div className="ml-4">
                  {renderValue(objValue, objKey, level + 1)}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return <span className="text-gray-600">{String(value)}</span>;
  };

  return (
    <Card className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>
      
      <div className="space-y-6">
        {renderValue(data)}
      </div>
    </Card>
  );
};

export default DynamicJsonRenderer;
