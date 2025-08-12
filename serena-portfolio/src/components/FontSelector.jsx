import { useState, useEffect } from 'react'
import { Type } from 'lucide-react'

const fontOptions = [
  {
    id: 'font-option-1',
    name: 'Inter',
    description: 'Modern Professional (Current)',
    googleFont: 'Inter:wght@300;400;500;600;700&display=swap'
  },
  {
    id: 'font-option-2',
    name: 'Poppins',
    description: 'Clean & Minimal',
    googleFont: 'Poppins:wght@300;400;500;600;700&display=swap'
  },
  {
    id: 'font-option-3',
    name: 'Source Sans Pro',
    description: 'Technical & Readable',
    googleFont: 'Source+Sans+Pro:wght@300;400;600;700&display=swap'
  },
  {
    id: 'font-option-4',
    name: 'Outfit',
    description: 'Modern Geometric',
    googleFont: 'Outfit:wght@300;400;500;600;700&display=swap'
  },
  {
    id: 'font-option-5',
    name: 'Nunito Sans',
    description: 'Professional & Friendly',
    googleFont: 'Nunito+Sans:wght@300;400;600;700&display=swap'
  },
  {
    id: 'font-option-6',
    name: 'DM Sans',
    description: 'Clean & Modern',
    googleFont: 'DM+Sans:wght@300;400;500;600;700&display=swap'
  },
  {
    id: 'font-option-7',
    name: 'Inter + JetBrains Mono',
    description: 'Technical & Professional',
    googleFont: 'Inter:wght@300;400;500;600;700&display=swap'
  },
  {
    id: 'font-option-8',
    name: 'Playfair Display + Inter',
    description: 'Elegant & Modern',
    googleFont: 'Playfair+Display:wght@400;500;600;700&display=swap'
  },
  {
    id: 'font-option-9',
    name: 'IBM Plex Sans',
    description: 'Technical & Clean',
    googleFont: 'IBM+Plex+Sans:wght@300;400;500;600&display=swap'
  },
  {
    id: 'font-option-10',
    name: 'Albert Sans',
    description: 'Modern & Versatile',
    googleFont: 'Albert+Sans:wght@300;400;500;600;700&display=swap'
  }
];

export default function FontSelector() {
  const [selectedFont, setSelectedFont] = useState('font-option-9');
  const [isOpen, setIsOpen] = useState(false);

  const changeFont = (fontId) => {
    setSelectedFont(fontId);
    document.body.className = fontId;
    
    // Load Google Font if needed
    const fontOption = fontOptions.find(f => f.id === fontId);
    if (fontOption && fontOption.googleFont) {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${fontOption.googleFont}`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    
    setIsOpen(false);
  };

  // Set initial font on component mount
  useEffect(() => {
    document.body.className = 'font-option-9';
  }, []);

  const currentFont = fontOptions.find(f => f.id === selectedFont);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm border rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Type className="w-4 h-4" />
        <span>Font: {currentFont?.name}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-80 bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold mb-3">Choose Font</h3>
            <div className="space-y-2">
              {fontOptions.map((font) => (
                <button
                  key={font.id}
                  onClick={() => changeFont(font.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedFont === font.id
                      ? 'bg-blue-50 border-blue-200'
                      : 'hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="font-semibold">{font.name}</div>
                  <div className="text-sm text-gray-600">{font.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
