import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchFilteredData } from "../redux/actions";
import { useDispatch } from "react-redux";

function Navbar({ fetchFilteredData }) {
  const [searchParam, setSearchParam] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    // Pass in a callback function!
    fetchFilteredData(searchParam);
  }, [searchParam]);
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <input
            name="search"
            placeholder="search here"
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </div>
      </div>
    </NavContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilteredData: (input) => dispatch(fetchFilteredData(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
  }
`;
