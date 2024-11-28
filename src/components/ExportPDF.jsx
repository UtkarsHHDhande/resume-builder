import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

function ExportPDF({ resumeContent }) {
  const resumeRef = useRef();

  const generatePDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: [0.5, 0.5],
      filename: 'my-resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
        backgroundColor: '#FFFFFF',
        useCORS: true
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait',
        putTotalPages: true
      },
      pagebreak: { mode: 'avoid-all' }
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save();
  };

  return (
    <div>
      <button
        onClick={generatePDF}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Export PDF
      </button>
      <div ref={resumeRef} className="bg-white print-wrapper">
        {resumeContent}
      </div>
    </div>
  );
}
export default ExportPDF;