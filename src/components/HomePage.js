import React, { useEffect, useState } from "react";
import { fetchData } from "../redux/actions";
import { connect } from "react-redux";
import styled from "styled-components";
import ProductDescription from "./ProductDescription";

function HomePage({ data, fetchData }) {
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

          {data
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(({ name, id, headline }) => (
              <button key={id} onClick={() => setSelectedId(id)}>
                <p>{name}</p>
                <p>{headline}</p>
              </button>
            ))}
        </div>
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
  }
  .container {
    display: flex;
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
`;
