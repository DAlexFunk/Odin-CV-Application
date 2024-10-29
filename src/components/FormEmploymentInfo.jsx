export default function EmploymentInfo({ formInfo, formChange }) {
  return (
    <section>
      <label htmlFor="employmentInfo">Employment Info</label>
      <fieldset id="employmentInfo">
        {formInfo.employment.map((employment) => (
          <EmploymentItem
            formInfo={formInfo}
            formChange={formChange}
            id={employment.id}
          />
        ))}
  
        <button
          className="newEmployment"
          onClick={() => {
            const newEmployment = [...formInfo.employment];
            newEmployment.push({
              company: "",
              title: "",
              startDate: "",
              endDate: "",
              description: "",
              id: crypto.randomUUID(),
            });
            formChange({ ...formInfo, employment: newEmployment });
          }}
        >Add Employment</button>
      </fieldset>
    </section>
  );
}

function EmploymentItem({ formInfo, formChange, id }) {
  let index = null;
  for (let i = 0; i < formInfo.employment.length; i++) {
    if (formInfo.employment[i].id === id) {
      index = i;
      break;
    }
  }

  return (
    <div className="employment">
      <input
        className="companyName"
        type="text"
        placeholder="Company Name"
        value={formInfo.employment[index].company}
        onChange={(evt) => {
          const newEmployment = [...formInfo.employment];
          newEmployment[index] = {
            ...newEmployment[index],
            company: evt.target.value,
          };
          formChange({ ...formInfo, employment: newEmployment });
        }}
      />

      <input
        className="jobTitle"
        type="text"
        placeholder="Job Title"
        value={formInfo.employment[index].title}
        onChange={(evt) => {
          const newEmployment = [...formInfo.employment];
          newEmployment[index] = {
            ...newEmployment[index],
            title: evt.target.value,
          };
          formChange({ ...formInfo, employment: newEmployment });
        }}
      />

      <input
        className="jobStartDate"
        type="text"
        placeholder="Start Date"
        value={formInfo.employment[index].startDate}
        onChange={(evt) => {
          const newEmployment = [...formInfo.employment];
          newEmployment[index] = {
            ...newEmployment[index],
            startDate: evt.target.value,
          };
          formChange({ ...formInfo, employment: newEmployment });
        }}
      />

      <input
        className="jobEndDate"
        type="text"
        placeholder="End Date (Present if current)"
        value={formInfo.employment[index].endDate}
        onChange={(evt) => {
          const newEmployment = [...formInfo.employment];
          newEmployment[index] = {
            ...newEmployment[index],
            endDate: evt.target.value,
          };
          formChange({ ...formInfo, employment: newEmployment });
        }}
      />

      <textarea
        className="desc"
        type="text"
        placeholder="Description of Role"
        value={formInfo.employment[index].description}
        onChange={(evt) => {
          const newEmployment = [...formInfo.employment];
          newEmployment[index] = {
            ...newEmployment[index],
            description: evt.target.value,
          };
          formChange({ ...formInfo, employment: newEmployment });
        }}
      />

      <button
        className="deleteEmployment"
        onClick={(evt) => {
          if (formInfo.employment.length > 1) {
            const newEmployment = [...formInfo.employment];
            newEmployment.splice(index, 1);
            formChange({ ...formInfo, employment: newEmployment });
          }
        }}
      >Delete Employment</button>
    </div>
  );
}
