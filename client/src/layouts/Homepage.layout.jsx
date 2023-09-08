import React from "react";


const HomepageLayout =
  (Components) =>
  ({ ...props }) => {
    return (
      <>
        {/* Navbar         */}
        <p>This is navebar in Homapage layout(component will render below )</p>
        <div >
          <Components {...props} />
        </div>
        <p>This is footer in Homapage layout</p>
      </>
    );
  };

export default HomepageLayout;