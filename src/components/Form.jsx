function PersonalInfo({ formInfo, formChange }) {
  return (
    <>
      <input
        className="firstName"
        type="text"
        value={formInfo.firstName}
        onChange={(evt) =>
          formChange({ ...formInfo, firstName: evt.target.value })
        }
      />

      <input
        className="lastName"
        type="text"
        value={formInfo.lastName}
        onChange={(evt) =>
          formChange({ ...formInfo, lastName: evt.target.value })
        }
      />

      <input
        className="phoneNumber"
        type="tel"
        value={formInfo.phoneNumber}
        onChange={(evt) =>
          formChange({ ...formInfo, phoneNumber: evt.target.value })
        }
      />

      <input
        className="email"
        type="email"
        value={formInfo.email}
        onChange={(evt) =>
          formChange({ ...formInfo, email: evt.target.value })
        }
      />
    </>
  );
}

function Form({ formInfo, formChange }) {
  return (
    <form onSubmit={(evt) => evt.preventDefault()} className="CVInfo">
      <PersonalInfo formInfo={formInfo} formChange={formChange} />
    </form>
  );
}

export default Form;
