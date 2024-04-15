import React, { useEffect, useState } from 'react';


function AdminPanel() {
  console.log("ENVV", process.env.BUCKET_NAME)
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [project, setProject] = useState({
    id: '',
    title: '',
    description: '',
    technologies: [],
    year: '',
    demoUrl: ''
  });

  async function loadProjects() {
    const response = await fetch('/api/projects');
    const data = await response.json();
    setProjects(data);
    if (data.length > 0) {
      setSelectedProjectId(data[0].id);
      setProject(data[0]);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject(prev => ({ ...prev, [name]: value }));
  };

  const handleTechnologyChange = (index, value) => {
    const updatedTechnologies = [...project.technologies];
    updatedTechnologies[index] = value;
    setProject({ ...project, technologies: updatedTechnologies });
  };

  const handleAddTechnology = () => {
    setProject(prev => ({ ...prev, technologies: [...prev.technologies, ''] }));
  };

  const handleRemoveTechnology = (index) => {
    const updatedTechnologies = [...project.technologies];
    updatedTechnologies.splice(index, 1);
    setProject(prev => ({ ...prev, technologies: updatedTechnologies }));
  };

  const handleSelectProject = (e) => {
    const projectId = e.target.value;
    const selectedProject = projects.find(proj => proj.id.toString() === projectId);
    setSelectedProjectId(projectId);
    setProject(selectedProject);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/projects`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });

    if (!response.ok) {
      alert('Failed to update the project');
    } else {
      alert('Project updated successfully');
    }
  };


  // Continuación del código existente...

  const handleAddNewProject = async () => {
    const newProject = {
      title: 'New Project', // Configura valores predeterminados o usa un formulario para obtener estos valores
      description: '',
      technologies: [],
      year: '2022',
      demoUrl: ''
    };
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject)
    });
    if (!response.ok) {
      alert('Failed to add the project');
    } else {
      alert('Project added successfully');
      loadProjects();  // Reload projects after adding new one
    }
  };

  const handleDeleteProject = async () => {
    if (!selectedProjectId) return;
    if (window.confirm("Are you sure you want to delete this project?")) {
      const response = await fetch(`/api/projects`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: selectedProjectId })
      });

      if (!response.ok) {
        alert('Failed to delete the project');
      } else {
        alert('Project deleted successfully');
        loadProjects();  // Reload projects after deletion
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-lg p-8 space-y-6  shadow-sm mb-40">
        <h2 className="text-2xl font-bold text-center text-gray-100">Edit Project</h2>
        <button onClick={handleAddNewProject} className="w-full p-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition duration-300">
          Add New Project
        </button>
        <div className="space-y-4">
          <label htmlFor="projectSelect" className="block text-sm font-semibold text-gray-300">Select Project</label>
          <select
            id="projectSelect"
            value={selectedProjectId}
            onChange={handleSelectProject}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          >
            {projects.map(proj => (
              <option key={proj.id} value={proj.id}>
                {proj.title}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="title" className="block text-sm font-semibold text-gray-300">Title</label>
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            value={project.title || ''}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          />
          <label htmlFor="description" className="block text-sm font-semibold text-gray-300">Description</label>
          <textarea
            name="description"
            value={project.description || ''}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded h-32"
          />
        </div>
        <label htmlFor="techs" className="block text-sm font-semibold text-gray-300">Technologies</label>
        {project.technologies.map((tech, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={tech}
              onChange={(e) => handleTechnologyChange(index, e.target.value)}
              placeholder={`Technology #${index + 1}`}
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
            />
            <button
              type="button"
              onClick={() => handleRemoveTechnology(index)}
              className="p-2 bg-red-600 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddTechnology}
          className="p-2 bg-green-600 text-white rounded"
        >
          Add Technology
        </button>
        <label htmlFor="year" className="block text-sm font-semibold text-gray-300">Year</label>
        <input
          type="text"
          name="year"
          value={project.year || ''}
          onChange={handleChange}
          placeholder="Year"
          className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
        />
        <label htmlFor="url" className="block text-sm font-semibold text-gray-300">Demo URL</label>
        <input
          type="text"
          name="demoUrl"
          value={project.demoUrl || ''}
          onChange={handleChange}
          placeholder="Demo URL"
          className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
        />

        <button onClick={handleSubmit} className="w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
          Update Project
        </button>
        <button onClick={handleDeleteProject} className="w-full p-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300">
          Delete Project
        </button>
      </form>
    </div>
  );
}

export default AdminPanel;
