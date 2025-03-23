// src/App.jsx
import React, { useState, useEffect } from 'react';
import UrlForm from './components/UrlForm';
import UrlList from './components/URLList';
import { getShortenedUrls, deleteUrl } from './services/urlService';

function App() {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await getShortenedUrls();
      setUrls(data);
    } catch (error) {
      console.error('Error fetching URLs:', error.message); // Updated line
      setError('Failed to load URLs. Please refresh the page.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const addUrl = (newUrl) => {
    setUrls(prevUrls => [newUrl, ...prevUrls]);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUrl(id);
      setUrls(prevUrls => prevUrls.filter(url => url._id !== id));
    } catch (error) {
      console.error('Error deleting URL:', error.message); // Updated line
      alert('Failed to delete URL. Please try again.');
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">URL Shortener</h1>
          <p className="mt-2 text-sm text-gray-600">Shorten your long URLs with just one click</p>
        </div>
        
        <UrlForm onUrlAdded={addUrl} />
        
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your shortened URLs</h2>
          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
              {error}
            </div>
          ) : (
            <UrlList urls={urls} onDelete={handleDelete} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;