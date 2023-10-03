import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Job = ({ jobs, company }) => {
  const companyJobs = jobs.filter((job) => {
    return job.company == company;
  });

  return (
    <article className="job-info">
      {companyJobs.map((job) => {
        return (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <span className="job-company">{job.company}</span>
            <p className="job-date">{job.dates}</p>

            {job.duties.map((duty) => {
              const id = uuidv4();
              return (
                <div key={id} className='job-desc'>
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </article>
  );
};

export default Job;
