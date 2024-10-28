import { isEqual } from "lodash";

function PersonalInfo({ formInfo, formChange }) {
  return (
    <fieldset className="personalInfo">
      <input
        className="firstName"
        type="text"
        value={formInfo.firstName}
        placeholder="First Name"
        onChange={(evt) =>
          formChange({ ...formInfo, firstName: evt.target.value })
        }
      />

      <input
        className="lastName"
        type="text"
        value={formInfo.lastName}
        placeholder="Last Name"
        onChange={(evt) =>
          formChange({ ...formInfo, lastName: evt.target.value })
        }
      />

      <input
        className="phoneNumber"
        type="tel"
        value={formInfo.phoneNumber}
        placeholder="Phone Number"
        onChange={(evt) =>
          formChange({ ...formInfo, phoneNumber: evt.target.value })
        }
      />

      <input
        className="email"
        type="email"
        value={formInfo.email}
        placeholder="Email Address"
        onChange={(evt) => formChange({ ...formInfo, email: evt.target.value })}
      />
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
        value={formInfo.name}
        onChange={(evt) => {
          const newEducation = [...formInfo.education];
          newEducation[index] = {
            ...newEducation[index],
            name: evt.target.value,
          };
          formChange({ ...formInfo, education: newEducation });
        }}
      />
    </div>
  );
}

function EducationInfo({ formInfo, formChange }) {
  return (
    <fieldset>
      <EducationItem
        formInfo={formInfo}
        formChange={formChange}
        id={formInfo.education[0].id}
      />
    </fieldset>
  );
}

function Form({ formInfo, formChange }) {
  return (
    <form onSubmit={(evt) => evt.preventDefault()} className="CVInfo">
      <PersonalInfo formInfo={formInfo} formChange={formChange} />
      <EducationInfo formInfo={formInfo} formChange={formChange} />
    </form>
  );
}

export default Form;
