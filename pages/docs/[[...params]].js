import React from "react";
import { useRouter } from "next/router";
function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log("params", params);
  if (params.length === 2) {
    return (
      <h3>
        view docs for {params[0]} and {params[0]}
      </h3>
    );
  }
  if (params.length === 1) {
    return <h3>view docs for {params[0]}</h3>;
  }
  return (
    <div>
      <h2>
        Docs home Page{" "}
        {params?.map((menu, id) => (
          <div key={id}>
            <h6>{menu}</h6>
          </div>
        ))}
      </h2>
    </div>
  );
}

export default Docs;
