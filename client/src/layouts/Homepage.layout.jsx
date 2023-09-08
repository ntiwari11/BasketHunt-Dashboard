import React from "react";

const HomepageLayout =
  (Components) =>
  ({ ...props }) => {
    return (
      <>
       
        {/* <div className="relative w-full overflow-x-hidden" > */}
        <div className="" >
          <Components {...props} />
        </div>
        
      </>
    );
  };

export default HomepageLayout;