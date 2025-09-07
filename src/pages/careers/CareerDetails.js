import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Labore in exercitation consequat non enim sunt mollit. Laborum duis
          nostrud amet voluptate deserunt in duis enim commodo esse ipsum
          labore. Fugiat consequat ut amet minim tempor ad nisi aliquip.
          Pariatur amet velit ut proident id in non officia est. Commodo eu
          labore reprehenderit ad Lorem veniam est deserunt pariatur adipisicing
          laborum voluptate adipisicing ut. Id elit ad ut elit aliquip
          incididunt deserunt cillum. Ut occaecat duis in cillum labore enim est
          pariatur eiusmod voluptate aute.
        </p>
      </div>
    </div>
  );
}

//loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
