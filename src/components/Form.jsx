import PersonalInfo from "./FormPersonalInfo";
import EducationInfo from "./FormEducationInfo";

export default function Form({ formInfo, formChange }) {
  return (
    <form onSubmit={(evt) => evt.preventDefault()} className="inputForm">
      <PersonalInfo formInfo={formInfo} formChange={formChange} />
      <EducationInfo formInfo={formInfo} formChange={formChange} />
    </form>
  );
}
