import React from "react";
import styled from "styled-components";
import spirite from "../../assets/img/symbol/sprite.svg";

const BannerModal = ({ setOpen }) => {
  return (
    <>
      <BgofBanner />
      <Wrapper>
        <SvgWrapper>
          <svg
            className="svg-sprite-icon icon-fi_x w-16"
            onClick={() => setOpen(false)}
          >
            <use href={`${spirite}#fi_x`}></use>
          </svg>
        </SvgWrapper>
        <ImageWrapper>
          <img src="/images/new.jpeg" alt="" />
        </ImageWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  /* padding: 2rem 1rem; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40rem;
  z-index: 100;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const SvgWrapper = styled.div`
  display: flex;
  justify-content: end;

  svg {
    cursor: pointer;
  }
`;

const BgofBanner = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.6rem);
  z-index: 95;
`;

export default BannerModal;
