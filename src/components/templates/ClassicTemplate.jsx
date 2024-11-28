function ClassicTemplate({ data }) {
    return (
      <div className="p-8 bg-white">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-serif mb-2">{data.personalInfo.name}</h1>
          <div className="text-gray-600">
            <div>{data.personalInfo.email}</div>
            <div>{data.personalInfo.phone}</div>
          </div>
        </header>
  
        <section className="mb-6">
          <h2 className="text-xl font-serif border-b-2 border-gray-300 mb-4">Professional Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{exp.position}</h3>
                <span>{exp.duration}</span>
              </div>
              <div className="font-italic">{exp.company}</div>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-serif border-b-2 border-gray-300 mb-4">Notable Projects</h2>
          {data.projects?.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{project.title}</h3>
              </div>
              <p className="mt-2">{project.description}</p>
              <div className="text-gray-600 mt-1">
                <span className="font-semibold">Technologies:</span> {project.technologies}
              </div>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black mt-1 inline-block underline"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-serif border-b-2 border-gray-300 mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{edu.degree}</h3>
                <span>{edu.year}</span>
              </div>
              <div>{edu.school}</div>
              <div>GPA: {edu.gpa}</div>
            </div>
          ))}
        </section>
  
        <section>
          <h2 className="text-xl font-serif border-b-2 border-gray-300 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  export default ClassicTemplate;
  