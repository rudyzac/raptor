import React from 'react'
import styled from 'styled-components'
import CloseButton from '../components/CloseButton'

const Modal = props => {
  if (!props.show) {
    return null
  }

  return (
    <Overlay className={props.className} onClick={() => props.close()}>
      <Content 
        className={props.className} 
        width={props.width} 
        height={props.height} 
        onClick={e => e.stopPropagation()}
      >
        <StyledCloseButton onClick={() => props.close()} color="#000000" size={48} />
        {props.children}
      </Content>
    </Overlay>
  )
}

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const Content = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  width: ${props => props.width ? props.width : "auto" };
  height: ${props => props.height ? props.height : "auto" };
  border: 2px solid;
  background-color: #f2f2f2;
  border-radius: 8px;
`

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
`

export default Modal
