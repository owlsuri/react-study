import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="시선으로부터" numOfPage={300} />
      <Book name="피프티 피플" numOfPage={400} />
      <Book name="지구에서 한아뿐" numOfPage={200} />
    </div>
  );
}

export default Library;
