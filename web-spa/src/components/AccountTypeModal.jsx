import React from 'react'
import styled from 'styled-components'
import Modal from '../molecules/Modal'
import ShoppingCartManImg from '../images/ShoppingCartManImg'
import StorefrontImg from '../images/StorefrontImg'

const AccountTypeModal = props =>
  <StyledModal width="65%" height="65%" show={props.show} close={props.close} className={props.className}>
    <Content>
      <Heading>Sei un cliente o un negozio?</Heading>
      <Selector>
        <CustomerBox>
          <ShoppingCartManImg width="12.5vw" height="12.5vw" />
          <p>Cliente</p>
        </CustomerBox>

        <ShopOwnerBox>
          <StorefrontImg width="12.5vw" height="12.5vw" />
          <p>Negozio</p>
        </ShopOwnerBox>
      </Selector>
    </Content>
  </StyledModal>

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const Heading = styled.p`
  font-size: 2vw;
  margin: 0;
`

const Selector = styled.div`
  display: flex;
  gap: 0;
  cursor: pointer;
`

const SelectionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;
  transition: all .8s ease;

  & > p {
    font-size: 1.7vw;
    font-weight: bold;
    margin: 1rem 0 0 0;
    color: #fff;
  }

  &:hover {
    transition: all .8s ease;
  }

  &:hover > * {
    transition: transform 150ms ease;
    transform: translateY(-5px);
  }
`

const CustomerBox = styled(SelectionBox)`
  background-color: #f3c8c5;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  &:hover {
    background-color: #eeafaa;
  }
`

const ShopOwnerBox = styled(SelectionBox)`
  background-color: #abdee6;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  &:hover {
    background-color: #89d1dc;
  }
`

export default AccountTypeModal
