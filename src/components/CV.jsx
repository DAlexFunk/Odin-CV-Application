export default function CV({ formInfo }) {
  const { firstName, lastName, email, phoneNumber, education, employment } = formInfo;

  return (
    <section className="CV">
      <div className="personalInfo">
        <h1>{`${firstName} ${lastName}`}</h1>
        <p>
          {email && phoneNumber ? `${email} | ${phoneNumber}` : (email ? email : phoneNumber)}
        </p>
      </div>

      <div className="educationInfo">
        <h1>Education</h1>
        <hr />
        {education.map((educationItem) => {
          return (
            <div className="educationItem">
              <h2>{educationItem.name}</h2>
              <p>{educationItem.graduation}</p>
              <p>{educationItem.degree}</p>
            </div>
          );
        })}
      </div>

      <div className="experienceInfo">
        <h1>Experience</h1>
        <hr />
        {employment.map((employmentItem) => {
          return (
            <div className="employmentItem">
              <h2>
                {employmentItem.company && employmentItem.title
                  ? `${employmentItem.company} | ${employmentItem.title}`
                  : (employmentItem.company ? employmentItem.company : employmentItem.title)}
              </h2>
              <p>
                {employmentItem.endDate && employmentItem.startDate
                  ? `${employmentItem.startDate} - ${employmentItem.endDate}`
                  : employmentItem.endDate}
              </p>
              <p>{employmentItem.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
