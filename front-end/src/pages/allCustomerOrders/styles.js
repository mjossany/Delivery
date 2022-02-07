import styled from 'styled-components';

export const AllOrdersContainer = styled.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const OrderContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 100px;
  margin: 1rem;
  width: 200px;
`;

export const IdContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const IdContainerText = styled.h6`
  align-items: center;
  display: flex;
`;

export const IdContainerOrderNumber = styled.p`
  align-items: center;
  display: flex;
  font-size: 0.6rem;
`;

export const OrderStatusContainer = styled.div`
  display: flex;
`;

export const OrderStatusText = styled.h5`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const OrderDateContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const OrderDateDate = styled.p` 
  display: flex;
  font-size: 0.6rem;
`;

export const OrderDatePrice = styled.p`
  display: flex;
  font-size: 0.6rem;
`;
