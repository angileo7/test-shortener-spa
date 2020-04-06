import React from "react";
import { GeneralContainer } from "../style/style";

const UrlItem = ({ short_url, visit_count, title }) => {
  return (
    <GeneralContainer color="#a9a9ec">
      <strong>{`Title: ${title}`}</strong>
      <div>
        <strong>{`URL: ${short_url}`}</strong>
      </div>
      <strong>{`Visits count: ${visit_count}`}</strong>
    </GeneralContainer>
  );
}

export default UrlItem;
