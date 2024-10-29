import PersonalInfo from "./FormPersonalInfo";
import EducationInfo from "./FormEducationInfo";
import EmploymentInfo from "./FormEmploymentInfo";

export default function Form({ formInfo, formChange }) {
  return (
    <form onSubmit={(evt) => evt.preventDefault()} className="inputForm">
      <h1>Information</h1>
      <PersonalInfo formInfo={formInfo} formChange={formChange} />
      <EducationInfo formInfo={formInfo} formChange={formChange} />
      <EmploymentInfo formInfo={formInfo} formChange={formChange} />
    </form>
  );
}
