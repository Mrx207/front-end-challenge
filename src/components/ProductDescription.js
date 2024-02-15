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
                <div>{version}</div>
              </div>
              <p>{description}</p>
              <div className="para-section">
                <span className="sub-title">Dependencies:</span>
                <p>{dependencies}</p>
              </div>
              <div className="para-section">
                <span className="sub-title">Imports:</span>
                <p> {imports}</p>
              </div>
              <div className="para-section">
                <span className="sub-title">Authors:</span>
                <p>{authors}</p>
              </div>
            </div>
          )
        )}
    </Wrapper>
  );
}

export default ProductDescription;

const Wrapper = styled.section`
  .para-section p {
    margin-top: 0;
  }
  .para-section {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 5px;
  }
  .title-section {
    width: 50%;
  }
  .title-section p {
    margin-top: 0;
  }
  .sub-title {
    font-weight: bold;
  }
`;
