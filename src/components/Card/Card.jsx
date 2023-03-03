import React, { useEffect, useState } from "react";
import {
  CardWapper,
  DecorLine,
  ImgdBackground,
  ImgdWrapper,
  LogoWrapper,
  Wrapper,
  StatsWrapper,
  StatsItem,
  CardButton,
  ButtonText,
} from "./Card.styled";
import avatar from "../../img/avatar.png";
import logo from "../../img/goit.png";
import chat from "../../img/chat.png";

function Card() {
  const [followers, setFollowers] = useState(100500);
  const [subscription, setsSbscription] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("follow");
    const parsedUser = JSON.parse(user);

    if (!user) {
      return;
    }

    if (parsedUser.follow) {
      setFollowers(parsedUser.amount);
      setsSbscription(parsedUser.follow);
    }
  }, []);

  function followersMeter(amount) {
    setsSbscription((state) => !state);
    if (!subscription) {
      amount = amount + 1;

      const user = { amount, follow: true };

      localStorage.setItem("follow", JSON.stringify(user));

      setFollowers(amount);
    }
    if (subscription) {
      amount = amount - 1;

      const user = { amount, follow: false };

      localStorage.setItem("follow", JSON.stringify(user));

      setFollowers(amount);
    }
  }

  return (
    <CardWapper>
      <LogoWrapper>
        <img src={logo} alt='logo' />
      </LogoWrapper>
      <img src={chat} alt='logo' />

      <Wrapper>
        <DecorLine />
        <ImgdWrapper>
          <ImgdBackground>
            <img style={{ width: "60px", height: "60px" }} src={avatar} alt='avatar' />
          </ImgdBackground>
        </ImgdWrapper>
      </Wrapper>

      <StatsWrapper>
        <StatsItem>777 tweest</StatsItem>
        <StatsItem>{followers.toLocaleString("en")} follwers</StatsItem>
      </StatsWrapper>
      <CardButton
        style={{ backgroundColor: subscription ? "#5CD3A8" : "#EBD8FF" }}
        onClick={() => followersMeter(followers)}
      >
        <ButtonText>{subscription ? "following" : "follow"}</ButtonText>
      </CardButton>
    </CardWapper>
  );
}

export default Card;
