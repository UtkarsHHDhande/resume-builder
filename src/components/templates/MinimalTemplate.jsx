function MinimalTemplate({ data }) {
    return (
      <div className="p-8 bg-white max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-light mb-2">{data.personalInfo.name}</h1>
          <div className="text-sm text-gray-600 flex gap-4">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
          </div>
        </header>
  
        <section className="mb-6">
          <h2 className="text-lg font-light uppercase tracking-wider mb-4">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{exp.position}</h3>
              <div className="text-sm text-gray-600">{exp.company} · {exp.duration}</div>
              <p className="mt-2 text-sm">{exp.description}</p>
            </div>
          ))}
        </section>
  
        <section className="mb-6">
          <h2 className="text-lg font-light uppercase tracking-wider mb-4">Projects</h2>
          {data.projects?.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{project.title}</h3>
              <p className="mt-2 text-sm">{project.description}</p>
              <div className="text-sm text-gray-600 mt-1">{project.technologies}</div>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 mt-1 inline-block"
                >
                  View →
                </a>
              )}
            </div>
          ))}
        </section>
  
        <section className="mb-6">
          <h2 className="text-lg font-light uppercase tracking-wider mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium">{edu.degree}</h3>
              <div className="text-sm text-gray-600">{edu.school} · {edu.year}</div>
              <div className="text-sm">GPA: {edu.gpa}</div>
            </div>
          ))}
        </section>
  
        <section>
          <h2 className="text-lg font-light uppercase tracking-wider mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="text-sm border border-gray-200 px-2 py-1">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  export default MinimalTemplate;
  