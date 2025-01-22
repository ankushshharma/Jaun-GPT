import React from 'react';
import styled from 'styled-components';
import Loader from './ui/Loader';

const Button = ({ onClick, loading }) => {
  return (
    <StyledWrapper>
      {loading ? (
        <Loader />
      ) : (
        <button className="button" onClick={onClick} disabled={loading}>
          <>
            <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
            Go to GPT
          </>
        </button>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.8s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .loading-text {
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }

  .button {
    width: 135px;
    height: 45px;
    display: flex;
    padding: 10px;
    font-weight: 600;
    margin-top: 60px;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: white;
    border-radius: 30px;
    color: rgb(19, 19, 19);
    font-weight: 600;
    border: none;
    position: relative;
    cursor: pointer;
    transition-duration: .2s;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
    padding-left: 8px;
    transition-duration: .5s;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
  }

  .bell path {
    fill: rgb(19, 19, 19);
  }

  .button:hover {
    background-color: white;
    transition-duration: .5s;
  }

  .button:active {
    transform: scale(0.97);
    transition-duration: .2s;
  }

  .button:hover .svgIcon {
    transform: rotate(250deg);
    transition-duration: 1.5s;
  }`;

export default Button;
