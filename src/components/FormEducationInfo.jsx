export default function EducationInfo({ formInfo, formChange }) {
  return (
    <fieldset className="educationInfo">
      {formInfo.education.map((education) => (
        <EducationItem
          formInfo={formInfo}
          formChange={formChange}
          id={education.id}
        />
      ))}

      <button
        className="newEducation"
        onClick={() => {
          const newEducation = [...formInfo.education];
          newEducation.push({
            name: "",
            graduation: "",
            degree: "",
            id: crypto.randomUUID(),
          });
          formChange({ ...formInfo, education: newEducation });
        }}
      >Add Education</button>
    </fieldset>
  );
}

function EducationItem({ formInfo, formChange, id }) {
  let index = null;
  for (let i = 0; i < formInfo.education.length; i++) {
    if (formInfo.education[i].id === id) {
      index = i;
      break;
    }
  }

  return (
    <div className="education">
      <input
        className="educationName"
        type="text"
        placeholder="Name of Institution"
        value={formInfo.education[index].name}
        onChange={(evt) => {
          const newEducation = [...formInfo.education];
          newEducation[index] = {
            ...newEducation[index],
            name: evt.target.value,
          };
          formChange({ ...formInfo, education: newEducation });
        }}
      />

      <input
        className="graduationDate"
        type="text"
        placeholder="Date of Graduation"
        value={formInfo.education[index].graduation}
        onChange={(evt) => {
          const newEducation = [...formInfo.education];
          newEducation[index] = {
            ...newEducation[index],
            graduation: evt.target.value,
          };
          formChange({ ...formInfo, education: newEducation });
        }}
      />

      <input
        className="degree"
        type="text"
        placeholder="Degree Type"
        value={formInfo.education[index].degree}
        onChange={(evt) => {
          const newEducation = [...formInfo.education];
          newEducation[index] = {
            ...newEducation[index],
            degree: evt.target.value,
          };
          formChange({ ...formInfo, education: newEducation });
        }}
      />

      <button
        className="deleteEducation"
        onClick={(evt) => {
          if (formInfo.education.length > 1) {
            const newEducation = [...formInfo.education];
            newEducation.splice(index, 1);
            formChange({ ...formInfo, education: newEducation });
          }
        }}
      >Delete Education</button>
    </div>
  );
}
