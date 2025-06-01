
import React, { useState } from 'react';
import { Upload, FileJson } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface JsonUploaderProps {
  onJsonLoad: (data: any) => void;
  onError: (error: string) => void;
}

const JsonUploader: React.FC<JsonUploaderProps> = ({ onJsonLoad, onError }) => {
  const [jsonText, setJsonText] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const validateAndParseJson = (text: string) => {
    try {
      const parsed = JSON.parse(text);
      onJsonLoad(parsed);
      onError('');
      return true;
    } catch (err) {
      onError('Invalid JSON format. Please check your JSON syntax.');
      return false;
    }
  };

  const handleFileUpload = (file: File) => {
    if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
      onError('Please upload a valid JSON file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setJsonText(text);
      validateAndParseJson(text);
    };
    reader.readAsText(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleTextSubmit = () => {
    if (jsonText.trim()) {
      validateAndParseJson(jsonText);
    } else {
      onError('Please enter some JSON content.');
    }
  };

  return (
    <div className="space-y-6">
      {/* File Upload Area */}
      <Card 
        className={`p-8 border-2 border-dashed transition-colors ${
          isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload JSON File</h3>
          <p className="text-gray-600 mb-4">Drag and drop your JSON file here, or click to browse</p>
          <Input
            type="file"
            accept=".json,application/json"
            onChange={handleFileInputChange}
            className="max-w-xs mx-auto"
          />
        </div>
      </Card>

      <div className="text-center text-gray-500 font-medium">OR</div>

      {/* Text Input Area */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FileJson className="h-5 w-5 text-blue-600" />
            <Label htmlFor="json-input" className="text-lg font-medium">Paste JSON Content</Label>
          </div>
          <Textarea
            id="json-input"
            placeholder="Paste your JSON content here..."
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
          />
          <Button onClick={handleTextSubmit} className="w-full">
            Generate View
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default JsonUploader;
