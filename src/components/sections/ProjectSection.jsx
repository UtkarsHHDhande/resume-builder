function ProjectsSection({ projects, onUpdate }) {
    return (
      <div className="space-y-4">
        <h2 className="section-title">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <input
              className="form-input mb-2"
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => onUpdate(index, 'name', e.target.value)}
            />
            <textarea
              className="form-input"
              placeholder="Description"
              value={project.description}
              onChange={(e) => onUpdate(index, 'description', e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  }
export default ProjectsSection;