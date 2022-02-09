import styled from 'styled-components';

export const OrderDetailsContainer = styled.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100%;
  width: 100%;
`;

export const OrderDetailsBoard = styled.div`
    width: 700px;
    height: 500px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

export const OrderDetailsBoardHeader = styled.div`
  display: flex;
  width: 700px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

export const OrderDetailsBoardHeaderSubContainers = styled.div`
  display: flex;
`;

export const OrderDetailsBoardHeaderButton = styled.button`
  display: flex;
`;

export const OrderDetailsBoardTable = styled.table`
  display: flex;
  flex-direction: column;
`;

export const OrderDetailsBoardTableHeader = styled.thead`
  display: flex;
`;

export const OrderDetailsBoardRow = styled.tr`
  display: flex;
  flex-direction: row;
`;

export const OrderDetailsBoardHeaderCell = styled.th`
  display: flex;
`;

export const OrderDetailsBoardTableBody = styled.tbody`
  display: flex;
`;

export const OrderDetailsBoardTableRow = styled.tr`
  display: flex;
`;

export const OrderDetailsBoardTableCell = styled.td`
  display: flex;
`;

export const OrderDetailsBoardTotalPrice = styled.div`
  display: flex'
`;
