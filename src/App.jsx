import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import ResumeForm from './components/ResumeForm';
import ModernTemplate from './components/templates/ModernTemplate';
import ClassicTemplate from './components/templates/ClassicTemplate';
import MinimalTemplate from './components/templates/MinimalTemplate';
import TemplateSelector from './components/TemplateSelector';
import ExportPDF from './components/ExportPDF';
import ProgressBar from './components/ProgressBar';

function App() {
  const [resumeData, setResumeData] = useLocalStorage('resumeData', {
    personalInfo: { name: '', email: '', phone: '' },
    experience: [],
    education: [],
    skills: [],
    projects: []
  });

  const [activeTemplate, setActiveTemplate] = useState('modern');

  const templates = [
    { id: 'modern', name: 'Modern Template' },
    { id: 'classic', name: 'Classic Template' },
    { id: 'minimal', name: 'Minimal Template' }
  ];

  const handleUpdateResume = (newData) => {
    setResumeData(newData);
  };

  const calculateProgress = () => {
    let progress = 0;
    if (resumeData.personalInfo.name) progress += 20;
    if (resumeData.personalInfo.email) progress += 10;
    if (resumeData.personalInfo.phone) progress += 10;
    if (resumeData.experience.length > 0) progress += 15;
    if (resumeData.education.length > 0) progress += 15;
    if (resumeData.skills.length > 0) progress += 15;
    if (resumeData.projects.length > 0) progress += 15;
    return Math.min(progress, 100);
  };

  const getTemplateComponent = () => {
    switch(activeTemplate) {
      case 'modern':
        return <ModernTemplate data={resumeData} />;
      case 'classic':
        return <ClassicTemplate data={resumeData} />;
      case 'minimal':
        return <MinimalTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white/90 backdrop-blur-sm shadow-xl p-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-600 tracking-tight hover:text-indigo-700 transition-colors duration-300">
         Resume Builder
          </h1>
        </div>
      </nav>

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 transform hover:scale-[1.01] transition-transform duration-300">
            <ProgressBar progress={calculateProgress()} />
          </div>

          <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <TemplateSelector 
              templates={templates} 
              activeTemplate={activeTemplate} 
              onSelect={setActiveTemplate}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <ResumeForm data={resumeData} onUpdate={handleUpdateResume} />
            </div>
            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <ExportPDF resumeContent={getTemplateComponent()} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
