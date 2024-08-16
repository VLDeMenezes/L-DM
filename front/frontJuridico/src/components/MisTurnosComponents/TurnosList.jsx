import React, { Suspense } from "react";

const LazyTurnosLoader = React.lazy(() =>
  import("../BasicComponents/LazyTurnosLoader")
);
const TurnosList = () => {
  return (
    <section>
      <Suspense callback={<div> Loading... </div>}>
        <LazyTurnosLoader />
      </Suspense>
    </section>
  );
};

export default TurnosList;
