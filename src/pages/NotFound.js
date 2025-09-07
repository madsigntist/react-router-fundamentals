import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Sunt veniam nisi irure in irure culpa consectetur magna ad veniam nulla.
        Amet deserunt elit velit eu Lorem occaecat mollit nisi nisi. Qui
        cupidatat culpa culpa laborum exercitation. Deserunt ipsum dolore non
        consectetur id nisi excepteur nostrud id magna amet cupidatat pariatur.
        Laborum esse esse fugiat irure voluptate nisi aliquip eiusmod aute sunt
        voluptate nostrud.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
