function ResumePreview({ data }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo.name}</h1>
          <div className="text-gray-600">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="section-title">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-6">
          <h2 className="section-title">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
            </div>
          ))}
        </div>
  
        <div className="mb-6">
          <h2 className="section-title">Projects</h2>
          {data.projects?.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <p className="text-gray-600">Technologies: {project.technologies}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  className="text-indigo-600 hover:text-indigo-800"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="section-title">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default ResumePreview;
  