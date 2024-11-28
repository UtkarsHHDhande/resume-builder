import { useState } from 'react';

function ResumeForm({ data, onUpdate }) {
  const [activeSection, setActiveSection] = useState('personal');

  const inputClassName = "w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all";
  const buttonClassName = "px-4 py-2 rounded-lg transition-all";
  const activeButtonClassName = "bg-indigo-600 text-white";
  const inactiveButtonClassName = "bg-gray-200 hover:bg-gray-300";

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    onUpdate({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [name]: value
      }
    });
  };

  const handleExperienceAdd = () => {
    onUpdate({
      ...data,
      experience: [...data.experience, {
        company: '',
        position: '',
        duration: '',
        description: ''
      }]
    });
  };

  const handleEducationAdd = () => {
    onUpdate({
      ...data,
      education: [...data.education, {
        school: '',
        degree: '',
        year: '',
        gpa: ''
      }]
    });
  };

  const handleProjectAdd = () => {
    onUpdate({
      ...data,
      projects: [...data.projects, {
        title: '',
        description: '',
        technologies: '',
        link: ''
      }]
    });
  };

  const handleSkillAdd = (skill) => {
    onUpdate({
      ...data,
      skills: [...data.skills, skill]
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button 
            onClick={() => setActiveSection('personal')}
            className={`${buttonClassName} ${activeSection === 'personal' ? activeButtonClassName : inactiveButtonClassName}`}
          >
            Personal
          </button>
          <button 
            onClick={() => setActiveSection('experience')}
            className={`${buttonClassName} ${activeSection === 'experience' ? activeButtonClassName : inactiveButtonClassName}`}
          >
            Experience
          </button>
          <button 
            onClick={() => setActiveSection('education')}
            className={`${buttonClassName} ${activeSection === 'education' ? activeButtonClassName : inactiveButtonClassName}`}
          >
            Education
          </button>
          <button 
  onClick={() => setActiveSection('projects')}
  className={`${buttonClassName} ${activeSection === 'projects' ? activeButtonClassName : inactiveButtonClassName}`}
>
  Projects
           </button>


          <button 
            onClick={() => setActiveSection('skills')}
            className={`${buttonClassName} ${activeSection === 'skills' ? activeButtonClassName : inactiveButtonClassName}`}
          >
            Skills
          </button>
        </div>

{activeSection === 'personal' && (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input
        type="text"
        name="name"
        value={data.personalInfo.name}
        onChange={handlePersonalInfoChange}
        className={inputClassName}
        placeholder="Enter your full name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        name="email"
        value={data.personalInfo.email}
        onChange={handlePersonalInfoChange}
        className={inputClassName}
        placeholder="Enter your email"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
      <input
        type="tel"
        name="phone"
        value={data.personalInfo.phone}
        onChange={handlePersonalInfoChange}
        className={inputClassName}
        placeholder="Enter your phone number"
      />
    </div>
    <div className="flex justify-end gap-2 mt-4">
      <button
        onClick={() => {/* Edit logic */}}
        className="text-indigo-600 hover:text-indigo-800"
      >
        Edit
      </button>
      <button
        onClick={() => {
          onUpdate({
            ...data,
            personalInfo: {
              name: '',
              email: '',
              phone: ''
            }
          });
        }}
        className="text-red-600 hover:text-red-800"
      >
        Delete
      </button>
    </div>
  </div>
)}


{activeSection === 'experience' && (
  <div>
    {data.experience.map((exp, index) => (
      <div key={index} className="mb-4 p-4 border rounded-lg">
        <input
          placeholder="Company"
          value={exp.company}
          onChange={(e) => {
            const newExp = [...data.experience];
            newExp[index].company = e.target.value;
            onUpdate({ ...data, experience: newExp });
          }}
          className={`${inputClassName} mb-2`}
        />
        <input
          placeholder="Position"
          value={exp.position}
          onChange={(e) => {
            const newExp = [...data.experience];
            newExp[index].position = e.target.value;
            onUpdate({ ...data, experience: newExp });
          }}
          className={`${inputClassName} mb-2`}
        />
        <input
          placeholder="Duration"
          value={exp.duration}
          onChange={(e) => {
            const newExp = [...data.experience];
            newExp[index].duration = e.target.value;
            onUpdate({ ...data, experience: newExp });
          }}
          className={`${inputClassName} mb-2`}
        />
        <textarea
          placeholder="Description"
          value={exp.description}
          onChange={(e) => {
            const newExp = [...data.experience];
            newExp[index].description = e.target.value;
            onUpdate({ ...data, experience: newExp });
          }}
          className={inputClassName}
          rows="3"
        />
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() => {/* Edit logic */}}
            className="text-indigo-600 hover:text-indigo-800"
          >
            Edit
          </button>
          <button
            onClick={() => {
              const newExp = [...data.experience];
              newExp.splice(index, 1);
              onUpdate({ ...data, experience: newExp });
            }}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
    <button 
      onClick={handleExperienceAdd}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
    >
      Add Experience
    </button>
  </div>
)}

{activeSection === 'education' && (
  <div>
    {data.education.map((edu, index) => (
      <div key={index} className="mb-4 p-4 border rounded-lg">
        <input
          placeholder="School"
          value={edu.school}
          onChange={(e) => {
            const newEdu = [...data.education];
            newEdu[index].school = e.target.value;
            onUpdate({ ...data, education: newEdu });
          }}
          className={`${inputClassName} mb-2`}
        />
        <input
          placeholder="Degree"
          value={edu.degree}
          onChange={(e) => {
            const newEdu = [...data.education];
            newEdu[index].degree = e.target.value;
            onUpdate({ ...data, education: newEdu });
          }}
          className={`${inputClassName} mb-2`}
        />
        <input
          placeholder="Year"
          value={edu.year}
          onChange={(e) => {
            const newEdu = [...data.education];
            newEdu[index].year = e.target.value;
            onUpdate({ ...data, education: newEdu });
          }}
          className={`${inputClassName} mb-2`}
        />
        <input
          placeholder="GPA"
          value={edu.gpa}
          onChange={(e) => {
            const newEdu = [...data.education];
            newEdu[index].gpa = e.target.value;
            onUpdate({ ...data, education: newEdu });
          }}
          className={inputClassName}
        />
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() => {/* Edit logic */}}
            className="text-indigo-600 hover:text-indigo-800"
          >
            Edit
          </button>
          <button
            onClick={() => {
              const newEdu = [...data.education];
              newEdu.splice(index, 1);
              onUpdate({ ...data, education: newEdu });
            }}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
    <button 
      onClick={handleEducationAdd}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
    >
      Add Education
    </button>
  </div>
)}


{activeSection === 'projects' && (
  <div>
    {data.projects.map((project, index) => (
      <div key={index} className="mb-4 p-4 border rounded-lg">
        <input
          placeholder="Project Title"
          value={project.title}
          onChange={(e) => {
            const newProjects = [...data.projects];
            newProjects[index].title = e.target.value;
            onUpdate({ ...data, projects: newProjects });
          }}
          className={`${inputClassName} mb-2`}
        />
        <textarea
          placeholder="Project Description"
          value={project.description}
          onChange={(e) => {
            const newProjects = [...data.projects];
            newProjects[index].description = e.target.value;
            onUpdate({ ...data, projects: newProjects });
          }}
          className={`${inputClassName} mb-2`}
          rows="3"
        />
        <input
          placeholder="Technologies Used"
          value={project.technologies}
          onChange={(e) => {
            const newProjects = [...data.projects];
            newProjects[index].technologies = e.target.value;
            onUpdate({ ...data, projects: newProjects });
          }}
          className={`${inputClassName} mb-2`}
        />
        <input
          placeholder="Project Link"
          value={project.link}
          onChange={(e) => {
            const newProjects = [...data.projects];
            newProjects[index].link = e.target.value;
            onUpdate({ ...data, projects: newProjects });
          }}
          className={inputClassName}
        />
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() => {/* Edit logic */}}
            className="text-indigo-600 hover:text-indigo-800"
          >
            Edit
          </button>
          <button
            onClick={() => {
              const newProjects = [...data.projects];
              newProjects.splice(index, 1);
              onUpdate({ ...data, projects: newProjects });
            }}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
    <button 
      onClick={handleProjectAdd}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
    >
      Add Project
    </button>
  </div>
)}


{activeSection === 'skills' && (
<div>
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        placeholder="Add a skill and press Enter"
        className={inputClassName}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSkillAdd(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
    <div className="flex flex-wrap gap-2">
      {data.skills.map((skill, index) => (
        <div key={index} className="group relative">
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
            {skill}
            <button
              onClick={() => {
                const newSkills = [...data.skills];
                newSkills.splice(index, 1);
                onUpdate({ ...data, skills: newSkills });
              }}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              ×
            </button>
          </span>
          <div className="absolute top-0 right-0 mt-8 bg-white shadow-lg rounded-lg p-2 hidden group-hover:block">
            <button
              onClick={() => {/* Edit logic */}}
              className="text-indigo-600 hover:text-indigo-800 text-sm"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
</div>
)}

    </div>
    </div>
);
}

export default ResumeForm;
