import React from "react";
import { Container, Table } from "react-bootstrap";
import styled from "styled-components";

// const handleClick => () {

// }
export default class RadioSchedule extends React.Component {
  state = {
    rowNum: "",
  };

  handleClick = (e) => {
    if (this.state.rowNum !== e.currentTarget.id) {
      this.setState({
        rowNum: parseInt(e.currentTarget.id),
      });
    }
  };

  render() {
    console.log(this.state.activeToggle, this.state.rowNum);

    return (
      <>
        <CustomContainer>
          <ul className="orange mx-1 px-3">
            <li>
              <h6 className="orange">Radio</h6>
            </li>
          </ul>

          <h1>Schedule</h1>
          <div className="table-responsive-sm">
            <StyledTable responsive>
              <thead>
                <tr>
                  <th className="d-flex">
                    <p className="dayDateHeading">
                      <span className="text-white">TODAY,</span> 10 MARCH
                    </p>
                    <p className="pl-2">EARLIER</p>
                  </th>
                </tr>
              </thead>
              <tbody className="tableBodyBorder">
                <tr>
                  <td>
                    <div
                      className={this.state.rowNum === 1 ? "showTime" : null}
                    >
                      13:00 - 14:00
                    </div>
                  </td>
                  <td className="showTitle" colSpan="12">
                    <div className="show-info-box">
                      <div className="image-container">
                        <img
                          src="https://whynow.co.uk/wp-content/uploads/2021/03/Jamie-Rodigan-Kabaka-Pyramid-Kaylee-Kay-site-720x720.jpg"
                          alt="show profile"
                        />
                        <button
                          id="1"
                          className="playBtnCircle"
                          onClick={(e) => this.handleClick(e)}
                        >
                          <div className="playBtnArrow"></div>
                        </button>
                      </div>
                      <div className="line-clamp">
                        <h3>Jamie Rodigan's 'SoundSystem Show'</h3>
                        <p>w/ Kabaka Pyramid + Kaylee Kay</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={this.state.rowNum === 2 ? "showTime" : null}>
                    15:00 - 16:00
                  </td>
                  <td className="showTitle" colSpan="12">
                    <div className="show-info-box">
                      <div className="image-container">
                        <img
                          src="https://whynow.co.uk/wp-content/uploads/2021/03/Laurie-Bryan-SQ-site-720x720.jpg"
                          alt="show profile"
                        />
                        <button
                          id="2"
                          className="playBtnCircle"
                          onClick={this.handleClick}
                        >
                          <div className="playBtnArrow"></div>
                        </button>
                      </div>
                      <div className="line-clamp">
                        <h3>Laurie's Liquid Hour</h3>
                        <p>w/ Bryan Gee</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th className="d-flex">
                    <p className="dayDateHeading">
                      <span className="text-white">THURSDAY,</span> 11 MARCH
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody className="tableBodyBorder">
                <tr>
                  <td className={this.state.rowNum === 3 ? "showTime" : null}>
                    17:00 - 18:30
                  </td>
                  <td className="showTitle" colSpan="12">
                    <div className="show-info-box">
                      <div className="image-container">
                        <img
                          src="https://whynow.co.uk/wp-content/uploads/2021/03/Screenshot-2021-03-01-at-12.12.55-720x720.png"
                          alt="show profile"
                        />
                        <button
                          id="3"
                          className="playBtnCircle"
                          onClick={this.handleClick}
                        >
                          <div className="playBtnArrow"></div>
                        </button>
                      </div>
                      <div className="line-clamp">
                        <h3>The Jaguar Skills Show</h3>
                        <p>w/ DJ Yoda</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th className="d-flex">
                    <p className="dayDateHeading">
                      <span className="text-white">FRIDAY,</span> 12 MARCH
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody className="tableBodyBorder">
                <tr>
                  <td className={this.state.rowNum === 4 ? "showTime" : null}>
                    20:00 - 21:00
                  </td>
                  <td className="showTitle" colSpan="12">
                    <div className="show-info-box">
                      <div className="image-container">
                        <img
                          src="https://whynow.co.uk/wp-content/uploads/2021/03/lester-Lloyd-SQ-site-720x720.jpg"
                          alt="show profile"
                        />
                        <button
                          id="4"
                          className="playBtnCircle"
                          onClick={this.handleClick}
                        >
                          <div className="playBtnArrow"></div>
                        </button>
                      </div>
                      <div className="line-clamp">
                        <h3>Lester Lloyd 'The Morale Booster'</h3>
                        <p>w/ Graham Sayle</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </StyledTable>
          </div>
        </CustomContainer>
      </>
    );
  }
}

const CustomContainer = styled(Container)`
  & ul {
    margin-top: 3rem;
    margin-bottom: 0;
  }

  & h1 {
    font-size: 52px;
  }

  & h1,
  h3 {
    color: white;
    font-weight: 600;
  }

  & h3 {
    font-size: 24px;
    margin-bottom: 0;
  }

  & li {
    font-size: 28px;
    vertical-align: middle;
  }

  & li h6 {
    vertical-align: middle;
  }

  .orange {
    color: #ea602b !important;
  }
`;
const StyledTable = styled(Table)`
  & th {
    border: none !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .tableBodyBorder {
    border-top: 2px solid white;
  }

  & .showTitle {
    min-width: 320px;
  }

  & td {
    padding: 2rem 0 0.5rem 0;
    color: #b2b2b2;
    font-weight: 600;
    border: none;
    border-top: 1px solid rgb(51, 51, 51);
    font-size: 18px;
    p {
      font-weight: 400;
    }
    .show-info-box {
      display: flex;
      min-width: 320px;
    }

    .line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  & .showTime {
    color: white;
  }

  & .image-container {
    width: 60px;
    min-width: 60px;
    max-height: 70px;
    margin-right: 1rem;
    position: relative;

    :hover .playBtnCircle {
      z-index: 9;
      opacity: 1;
    }

    img {
      object-fit: contain;
      border-radius: 50%;
      width: 60px;
      min-width: 50px;
    }

    .playBtnCircle {
      position: absolute;
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 50%;
      background-color: #ea602b;
      left: 25%;
      bottom: 35%;
      z-index: -1;
      opacity: 0;
      transition: 0.3s ease-in;
    }

    .playBtnCircle::before {
      content: "";
      position: absolute;
      margin: auto;
      width: 0px;
      top: 32%;
      left: 41%;
      height: 0;
      border-style: solid;
      border-width: 5.5px 0 5.5px 8px;
      border-color: transparent transparent transparent white;
    }
  }

  & .dayDateHeading {
    border-bottom: 1px solid #ea602b;
  }
  & p {
    color: #b2b2b2;
  }
`;
