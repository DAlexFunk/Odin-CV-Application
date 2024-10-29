import PersonalInfo from "./FormPersonalInfo";
import EducationInfo from "./FormEducationInfo";
import EmploymentInfo from "./FormEmploymentInfo";

export default function Form({ formInfo, formChange }) {
  return (
    <form onSubmit={(evt) => evt.preventDefault()} className="inputForm">
      <PersonalInfo formInfo={formInfo} formChange={formChange} />
      <EducationInfo formInfo={formInfo} formChange={formChange} />
      <EmploymentInfo formInfo={formInfo} formChange={formChange} />
    </form>
  );
}
