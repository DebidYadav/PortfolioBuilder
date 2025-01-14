import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "./action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewProjectForm = ({ onCreatePressed }) => {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    image: "",
    techStack: "",
    websiteLink: "",
    githubLink: "",
    timeline: "",
    guidedByProfessor: false,
    professorName: "", // New field for professor's name
    isClubProject: false, // New field for club project
    clubName: "", // New field for club name
    isSelfProject: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectData({
      ...projectData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    // Create a new project object and dispatch the action
    const newProject = { project: projectData };
    onCreatePressed(newProject);

    // Clear the form fields
    setProjectData({
      name: "",
      description: "",
      image: "",
      techStack: "",
      websiteLink: "",
      githubLink: "",
      timeline: "",
      guidedByProfessor: false,
      professorName: "", // New field for professor's name
      isClubProject: false, // New field for club project
      clubName: "", // New field for club name
      isSelfProject: false,
    });
  };

  return (
    <div className="border rounded p-3 m-2">
      <input
        type="text"
        className="form-control mb-2"
        name="name"
        placeholder="Project Name"
        value={projectData.name}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        name="description"
        placeholder="Project Description"
        value={projectData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="image"
        placeholder="Project Image URL"
        value={projectData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="techStack"
        placeholder="Tech Stack"
        value={projectData.techStack}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="websiteLink"
        placeholder="Website Link"
        value={projectData.websiteLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="githubLink"
        placeholder="GitHub Link"
        value={projectData.githubLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="timeline"
        placeholder="Project Timeline"
        value={projectData.timeline}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="guidedByProfessor"
          checked={projectData.guidedByProfessor}
          onChange={handleChange}
        />
        <label className="form-check-label">Guided by Professor</label>
      </div>
      {projectData.guidedByProfessor && (
       <input
       type="text"
       className="form-control mb-2"
       name="professorName"
       placeholder="Professor's Name"
       value={projectData.professorName}
       onChange={handleChange}
     />
      )}
      
      {/* Club Project Checkbox */}
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="isClubProject"
          checked={projectData.isClubProject}
          onChange={handleChange}
        />
        <label className="form-check-label">Club Project</label>
      </div>
      {/* Club Name */}
      {projectData.isClubProject && (
        <input
          type="text"
          className="form-control mb-2"
          name="clubName"
          placeholder="Club Name"
          value={projectData.clubName}
          onChange={handleChange}
        />
      )}
      {/* Self-Project Checkbox */}
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="isSelfProject"
          checked={projectData.isSelfProject}
          onChange={handleChange}
        />
        <label className="form-check-label">Self-Project</label>
      </div>
      <div className="text-right">
      <button class="btn btn-success btn-sm rounded-circle rounded-full w-7 h-7 bg-green-400 text-white" disabled="">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        ::before
        <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
          //className="btn btn-success btn-sm rounded-circle"
          onClick={handleSubmit}
          disabled={!projectData.name || !projectData.description}
          <FontAwesomeIcon icon={faPlus} />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (project) => dispatch(createProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);
