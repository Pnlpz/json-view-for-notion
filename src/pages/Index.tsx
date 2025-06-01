
import React, { useState } from 'react';
import JsonUploader from '@/components/JsonUploader';
import DynamicJsonRenderer from '@/components/DynamicJsonRenderer';

const Index = () => {
  const [jsonData, setJsonData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleJsonLoad = (data: any) => {
    setJsonData(data);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const resetView = () => {
    setJsonData(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {!jsonData ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">JSON Viewer</h1>
              <p className="text-xl text-gray-600">Upload or paste your JSON to see it beautifully formatted</p>
            </div>
            
            <JsonUploader onJsonLoad={handleJsonLoad} onError={handleError} />
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="mb-6 text-center">
              <button
                onClick={resetView}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Upload New JSON
              </button>
            </div>
            <DynamicJsonRenderer data={jsonData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
