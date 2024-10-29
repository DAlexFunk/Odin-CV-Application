export default function PersonalInfo({ formInfo, formChange }) {
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
