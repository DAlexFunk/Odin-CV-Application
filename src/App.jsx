import "./styles.css";
import { StrictMode } from "react";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    education: [{name: "", graduation: "", degree: "", id: 0}]
  });

  return (
    <StrictMode>
      <h1>
        {formInfo.firstName} {formInfo.lastName} {formInfo.phoneNumber} {formInfo.email}
      </h1>
      <h1>{formInfo.education[0].name}</h1>
      <Form formInfo={formInfo} formChange={setFormInfo} />
    </StrictMode>
  );
}

export default App;
