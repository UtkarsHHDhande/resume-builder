function TemplateSelector({ templates, activeTemplate, onSelect }) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Choose Template</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search templates..."
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => onSelect(template.id)}
              className={`cursor-pointer rounded-lg border-2 p-4 transition-all hover:shadow-lg ${
                activeTemplate === template.id
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              <div className="aspect-w-16 aspect-h-9 mb-2">
                <div className={`w-full h-full bg-white rounded shadow-sm p-4 ${template.id}-preview`}>
                  <div className="h-2 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-center">{template.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default TemplateSelector;
  