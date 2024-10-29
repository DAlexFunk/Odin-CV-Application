import Form from "./components/Form";
import CV from "./components/CV";
import { useState } from "react";

const baseInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  education: [
    { name: "", graduation: "", degree: "", id: crypto.randomUUID() },
  ],
  employment: [
    {
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      id: crypto.randomUUID(),
    },
  ],
};

export default function App() {
  const [formInfo, setFormInfo] = useState(baseInfo);

  return (
    <>
      <Form formInfo={formInfo} formChange={setFormInfo} />
      <CV formInfo={formInfo} />
    </>
  );
}
