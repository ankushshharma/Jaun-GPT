import React from 'react';
import styled from 'styled-components';

const Input = () => {
  const handleSend = () => {
    console.log('Message sent!');
  };

  return (
    <StyledWrapper>
      <div className="messageBox">
        <div className="fileUploadWrapper">
          <label htmlFor="file" className="disabled">
            <svg viewBox="0 0 337 337" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="168.5" cy="168.5" r="158.5" fill="none" stroke="#6c6c6c" strokeWidth={20} />
              <path d="M167.759 79V259" stroke="#6c6c6c" strokeWidth={25} strokeLinecap="round" />
              <path d="M79 167.138H259" stroke="#6c6c6c" strokeWidth={25} strokeLinecap="round" />
            </svg>
            <span className="tooltip">Upcoming</span>
          </label>
        </div>
        <input id="messageInput" type="text" placeholder="Want to send your shayri?" required />
        <button id="sendButton" onClick={handleSend}>
          <svg viewBox="0 0 664 663" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" fill="none" />
            <path d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" stroke="#6c6c6c" strokeWidth="33.67" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .messageBox {
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e1e1e;
    padding: 0 15px;
    border-radius: 10px;
    border: 1px solid rgb(63, 63, 63);
  }
  .messageBox:focus-within {
    border: 1px solid #606060;
  }
  .fileUploadWrapper {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  #file {
    display: none;
  }
  .fileUploadWrapper label {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .fileUploadWrapper label svg {
    height: 18px;
  }
  .fileUploadWrapper label svg path {
    transition: all 0.3s;
  }
  .fileUploadWrapper label svg circle {
    transition: all 0.3s;
  }
  .fileUploadWrapper label:hover svg path {
    stroke: #fff;
  }
  .fileUploadWrapper label:hover svg circle {
    stroke: #fff;
    fill: #3c3c3c;
  }
  .fileUploadWrapper label:hover .tooltip {
    display: block;
    opacity: 1;
  }
  .tooltip {
    position: absolute;
    top: -40px;
    display: none;
    opacity: 0;
    color: white;
    font-size: 10px;
    text-wrap: nowrap;
    background-color: #000;
    padding: 6px 10px;
    border: 1px solid #3c3c3c;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.596);
    transition: all 0.3s;
  }
  #messageInput {
    width: 200px;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    padding-left: 10px;
    color: #f5f5f5;
  }
  #messageInput:focus ~ #sendButton svg path,
  #messageInput:valid ~ #sendButton svg path {
    fill: #3c3c3c;
    stroke: white;
  }

  #sendButton {
    width: fit-content;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
  }
  #sendButton svg {
    height: 18px;
    transition: all 0.3s;
  }
  #sendButton svg path {
    transition: all 0.3s;
  }
  #sendButton:hover svg path {
    fill: #3682f4;
    stroke: white;
  }
  .fileUploadWrapper label.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .fileUploadWrapper label.disabled:hover svg path {
    stroke: #6c6c6c;
  }
  .fileUploadWrapper label.disabled:hover svg circle {
    stroke: #6c6c6c;
    fill: none;
  }
`;

export default Input;
