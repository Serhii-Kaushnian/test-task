import styled from "@emotion/styled";

export const CardWapper = styled.div`
  background-color: #471ca9;
  width: 380px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  position: relative;

  padding: 36px 0;

  box-sizing: border-box;
`;
export const ImgdWrapper = styled.div`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  z-index: 1;
`;
export const ImgdBackground = styled.div`
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #5736a3;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 0px -2.19582px 4.39163px #ae7be3,
    0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
export const DecorLine = styled.div`
  height: 10px;
  position: absolute;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  width: 100%;
`;
export const LogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const StatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 26px 0;
`;
export const StatsItem = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  margin: 0;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  color: #ebd8ff;
`;
export const CardButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;

  width: 196px;
  height: 50px;

  border: none;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const ButtonText = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;

  /* identical to box height */

  text-transform: uppercase;

  /* Landing/button text color */

  color: #373737;
`;
