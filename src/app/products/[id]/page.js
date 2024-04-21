import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  //   console.log(params);
  //   console.log(searchParams);
  return (
    <div>
      <h1>This is dynamic page: {params.id}</h1>
      <h1>This is dynamic page: {searchParams.category}</h1>
    </div>
  );
};

export default DynamicPage;
