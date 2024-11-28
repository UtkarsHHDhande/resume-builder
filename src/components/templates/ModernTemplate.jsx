function ModernTemplate({ data }) {
    return (
      <div className="p-8 bg-white shadow-lg">
        <header className="border-b-2 border-blue-500 pb-4 mb-6">
          <h1 className="text-4xl font-bold text-gray-800">{data.personalInfo.name}</h1>
          <div className="flex gap-4 text-gray-600 mt-2">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
          </div>
        </header>
  
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <div className="text-gray-600">{exp.company} | {exp.duration}</div>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Projects</h2>
          {data.projects?.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="text-gray-600 mt-1">Technologies: {project.technologies}</div>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 mt-1 inline-block"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <div className="text-gray-600">{edu.school} | {edu.year}</div>
              <div>GPA: {edu.gpa}</div>
            </div>
          ))}
        </section>
  
        <section>
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  export default ModernTemplate;
  