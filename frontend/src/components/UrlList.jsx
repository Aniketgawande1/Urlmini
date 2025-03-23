// src/components/UrlList.jsx
import React, { useState } from 'react';

const UrlList = ({ urls, onDelete }) => {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (urls.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-500">
        No URLs have been shortened yet. Enter a URL above to get started.
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {urls.map((url) => (
          <li key={url.id} className="p-4 hover:bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="mb-2 sm:mb-0 flex-1 mr-4">
                <p className="text-sm font-medium text-gray-900 truncate" title={url.originalUrl}>
                  {url.originalUrl}
                </p>
                <a 
  href={`${API_URL}/${url.shortUrl}`} 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-sm text-indigo-600 hover:text-indigo-900 font-medium"
>
  {`${API_URL}/${url.shortUrl}`}
</a>

              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">
                  {new Date(url.createdAt).toLocaleDateString()}
                </span>
                
                <button
                  onClick={() => copyToClipboard(url.shortUrl, url.id)}
                  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {copiedId === url.id ? 'Copied!' : 'Copy'}
                </button>
                
                <button
                  onClick={() => onDelete(url.id)}
                  className="inline-flex items-center px-2.5 py-1.5 border border-red-300 text-xs font-medium rounded text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
            
            {url.clicks !== undefined && (
              <div className="mt-2">
                <span className="text-xs text-gray-500">
                  {url.clicks} {url.clicks === 1 ? 'click' : 'clicks'}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;