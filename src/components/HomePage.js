import React, { useEffect, useState } from "react";
import { fetchData } from "../redux/actions";
import { connect } from "react-redux";
import styled from "styled-components";
import ProductDescription from "./ProductDescription";

function HomePage({ data, fetchData, filteredData }) {
  const [selectedId, setSelectedId] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Wrapper>
      {" "}
      <div className="container">
        <div className="left-container">
          <div className="upper-container">
            <h3 className="title">Latest 10 Packages</h3>
            <p className="sub-text">
              Find an R package, find package documentation, findR
              documentation, find R functions, search R source code
            </p>
          </div>

          {filteredData
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(({ name, id, headline }) => (
              <button
                key={id}
                className="btn"
                onClick={() => setSelectedId(id)}
              >
                <p className="name-text">{name}</p>
                <p className="headline-text">{headline}</p>
              </button>
            ))}
        </div>
        <div className="vertical-line"></div>
        <div className="right-container">
          <h3 className="right-title">Packages</h3>
          <ProductDescription id={selectedId} data={data} />
        </div>
      </div>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    filteredData: state.filteredData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const Wrapper = styled.section`
  button {
    display: block;
    border: 0;
    background: transparent;
    text-align: left;
    cursor: pointer;
    line-height: 1.5;
  }
  .vertical-line {
    border-left: 1px solid lightgray;
  }
  .container {
    display: flex;
    gap: 20px;
  }
  .left-container {
    width: 50%;
  }
  .right-container {
    width: 50%;
  }
  .right-title {
    margin: 0;
    color: blue;
  }
  .title {
    margin: 0;
  }
  .name-text {
    margin-bottom: 0;
    font-weight: bold;
  }
  .headline-text {
    margin-top: 0;
  }
`;
