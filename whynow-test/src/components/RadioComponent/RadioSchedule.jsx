import React from "react";
import { Container, Table } from "react-bootstrap";
import styled from "styled-components";

export default function RadioSchedule() {
  return (
    <>
      <Container>
        <ul className="orange mx-1 px-3">
          <li>
            <h6 className="orange">Radio</h6>
          </li>
        </ul>

        <h1>Schedule</h1>
        <StyledTable responsive>
          <thead>
            <tr>
              <th className="d-flex w-30">
                <p>
                  <span className="text-white">Today,</span>10th March
                </p>
                <p className="pl-2">Earlier</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="showTitle">13:00 - 14:00</td>
              <td className="showTitle" colSpan="12">
                <h3>Jamie Rodigan's 'SoundSystem Show'</h3>
                <p>w/ Kabaka Pyramid + Kaylee Kay</p>
              </td>
            </tr>
            <tr>
              <td className="showTitle">15:00 - 16:00</td>
              <td className="showTitle" colSpan="12">
                <h3>Laurie's Liquid Hour</h3>
                <p>w/ Bryan Gee</p>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>
                <span className="text-white">Thursday,</span> 11th March
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="showTitle">17:00 - 18:30</td>
              <td className="showTitle" colSpan="12">
                <h3>The Jaguar Skills Show</h3>
                <p>w/ DJ Yoda</p>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>
                <span className="text-white">Friday,</span> 12th March
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="showTitle">20:00 - 21:00</td>
              <td className="showTitle" colSpan="12">
                <h3>Lester Lloyd 'The Morale Booster'</h3>
                <p>w/ Graham Sayle</p>
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </Container>
    </>
  );
}

const StyledTable = styled(Table)`
  & th {
    border: none !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & .showTitle {
    border-top: 2px solid white;
  }
`;

// const whyNowContainer = styled(Container)`
//   background-color: black;
// `;

// background-color: white;
// const Th = styled.table`
//   border: none;
// `;

// const Td = styled.td`
//   border: none;
// `;
