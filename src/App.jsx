import "./styles.css";
import { StrictMode } from "react";
import Form from "./components/Form";
import { useState } from "react";

const baseInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  education: [
    { name: "", graduation: "", degree: "", id: crypto.randomUUID() },
  ],
};

function App() {
  const [formInfo, setFormInfo] = useState(baseInfo);

  return (
    <StrictMode>
      <h1>
        {formInfo.firstName} {formInfo.lastName} {formInfo.phoneNumber} {formInfo.email}
      </h1>
      <>
        {formInfo.education.map((educationItem) => (
          <h1>
            {educationItem.name} {educationItem.graduation} {educationItem.degree}
          </h1>
        ))}
      </>
      <Form formInfo={formInfo} formChange={setFormInfo} />
    </StrictMode>
  );
}

export default App;
