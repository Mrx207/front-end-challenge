import React from "react";
import styled from "styled-components";

function ProductDescription({ id, data }) {
  return (
    <Wrapper>
      {data
        .filter((item) => item.id === id)
        .map(
          ({
            name,
            version,
            license,
            created_at,
            description,
            dependencies,
            imports,
            authors,
          }) => (
            <div>
              <div className="top-section">
                <div className="title-section">
                  {" "}
                  <p>{name}</p>
                  <p>{license}</p>
                  <p>{created_at}</p>
                </div>
                <p>{version}</p>
              </div>

              <p>{description}</p>
              <p>{dependencies}</p>
            </div>
          )
        )}
    </Wrapper>
  );
}

export default ProductDescription;

const Wrapper = styled.section`
  .top-section {
    display: flex;
  }
  .title-section {
    width: 50%;
  }
`;
