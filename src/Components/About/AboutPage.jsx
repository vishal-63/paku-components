import { useState } from "react";
import {
  Container,
  InfoImg,
  InfoWrapper,
  InfoSectionButton,
  ButtonContainer,
  InfoHeading,
  InfoText,
  TeamTitle,
  TeamWrapper,
  MemberCard,
  MemberDiv,
  MemberImage,
  MemberName,
  MemberPosition,
  SocialLinkWrapper,
  SocialLink,
  ClientWrapper,
  ClientCard,
  ClientContent,
  ClientHeader,
  ClientImg,
  ClientInfo,
  ClientName,
  ClientSubtitle,
  ClientIcon,
  ClientText,
} from "./AboutElements";
import infoImg from "../../Images/about-1.jpg";
import team1 from "../../Images/team1.jpg";
import team2 from "../../Images/team2.jpg";
import team3 from "../../Images/team3.jpg";
import client1 from "../../Images/client1.jpg";
import client2 from "../../Images/client2.jpg";
import "./AboutPage.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import Parallax from "./Parallax/Parallax";

const AboutPage = () => {
  const [current, setCurrent] = useState(0);

  // General Info
  const changeText = (index) => {
    setCurrent(index);
  };

  // Button background
  const changeBackground = (id) => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => button.classList.remove("active"));
    const activeButton = document.getElementById(id);
    activeButton.classList.add("active");
    changeText(parseInt(id) - 1);
  };

  const InfoData = [
    {
      heading: "High-Quality Business Solutions",
      para1:
        "Generic is a business consulting company with more than 10 years of experience in the industry offering reliable and affordable services.",
      para2:
        "We serve clients at every level of their organization, in whatever capacity we can be most useful, whether as a trusted advisor to top management or as a hands-on coach for front line employees. For every engagement, we assemble a team with the most appropriate experience and expertise.",
    },
    {
      heading: "Providing Full Business Support",
      para1:
        "Generic offers advice and support to leading companies in various industries across the USA. We staff and manage your projects with our experts.",
      para2:
        "We are successful because of our people, the quality of our expert network and our flexibility to anticipate market changes and adapt to your needs. That is why we continuously invest in the education and coaching of our consultants and our team of recruiters and account managers.",
    },
    {
      heading: "Building Business Relationships",
      para1:
        "We aim to build a strong mutual business relationship with our clients and contribute to their success by responding to their needs.",
      para2:
        "Our goal is not to become the largest consultancy agency but to be the agency known for the outstanding and lasting results we achieve with our clients. We work to support you on all stages of your business’s development and to help you avoid unpleasant management experiences.",
    },
  ];

  if (!Array.isArray(InfoData) || InfoData.length <= 0) {
    return null;
  }

  return (
    <>
      <section>
        {/* General Info */}
        <Container>
          <InfoImg src={infoImg} alt="about-info" />
          <InfoWrapper>
            <ButtonContainer>
              <InfoSectionButton
                id="1"
                className="button active"
                onClick={() => changeBackground("1")}
              >
                What We Do
              </InfoSectionButton>
              <InfoSectionButton
                id="2"
                className="button"
                onClick={() => changeBackground("2")}
              >
                Our Mission
              </InfoSectionButton>
              <InfoSectionButton
                id="3"
                className="button"
                onClick={() => changeBackground("3")}
              >
                Our Goal
              </InfoSectionButton>
            </ButtonContainer>

            {InfoData.map((section, index) => {
              return (
                <div
                  key={index}
                  className={index === current ? "text active" : "text"}
                >
                  {index === current && (
                    <InfoText key={index}>
                      <InfoHeading>{section.heading}</InfoHeading>
                      <p style={{ marginBottom: "10px" }}>{section.para1}</p>
                      <p>{section.para2}</p>
                    </InfoText>
                  )}
                </div>
              );
            })}
          </InfoWrapper>
        </Container>

        {/* Team */}
        <Container
          style={{
            background: "#eff1f7",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TeamTitle>Meet Our Team</TeamTitle>
          <TeamWrapper>
            <MemberCard>
              <MemberDiv>
                <MemberImage src={team1} alt="team-member-1"></MemberImage>
                <MemberName>Jeet Shah</MemberName>
                <MemberPosition>Director</MemberPosition>
                <SocialLinkWrapper>
                  <SocialLink>
                    <FaFacebookF />
                  </SocialLink>
                  <SocialLink>
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink>
                    <FaGooglePlusG />
                  </SocialLink>
                  <SocialLink>
                    <FaPinterestP />
                  </SocialLink>
                </SocialLinkWrapper>
              </MemberDiv>
            </MemberCard>
            <MemberCard>
              <MemberDiv>
                <MemberImage src={team2} alt="team-member-2"></MemberImage>
                <MemberName>Lalit Shah</MemberName>
                <MemberPosition>CEO & Founder</MemberPosition>
                <SocialLinkWrapper>
                  <SocialLink>
                    <FaFacebookF />
                  </SocialLink>
                  <SocialLink>
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink>
                    <FaGooglePlusG />
                  </SocialLink>
                  <SocialLink>
                    <FaPinterestP />
                  </SocialLink>
                </SocialLinkWrapper>
              </MemberDiv>
            </MemberCard>
            <MemberCard>
              <MemberDiv>
                <MemberImage src={team3} alt="team-member-3"></MemberImage>
                <MemberName>Vishal Shah</MemberName>
                <MemberPosition>Director</MemberPosition>
                <SocialLinkWrapper>
                  <SocialLink>
                    <FaFacebookF />
                  </SocialLink>
                  <SocialLink>
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink>
                    <FaGooglePlusG />
                  </SocialLink>
                  <SocialLink>
                    <FaPinterestP />
                  </SocialLink>
                </SocialLinkWrapper>
              </MemberDiv>
            </MemberCard>
          </TeamWrapper>
        </Container>

        {/* Parallax */}
        <Parallax />

        {/* Clients */}
        <Container
          style={{
            background: "#eff1f7",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TeamTitle>Our Clients</TeamTitle>
          <ClientWrapper>
            <ClientCard>
              <ClientHeader>
                <ClientImg src={client1} alt="client-img-1" />
                <ClientInfo>
                  <ClientName>Sam Wilson</ClientName>
                  <ClientSubtitle>CEO "Manstep"</ClientSubtitle>
                </ClientInfo>
              </ClientHeader>
              <ClientContent>
                <ClientIcon>
                  <IoMdQuote />
                </ClientIcon>
                <ClientText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </ClientText>
              </ClientContent>
            </ClientCard>

            <ClientCard>
              <ClientHeader>
                <ClientImg src={client2} alt="client-img-1" />
                <ClientInfo>
                  <ClientName>Michelle Johnson</ClientName>
                  <ClientSubtitle>CEO "WorkForce"</ClientSubtitle>
                </ClientInfo>
              </ClientHeader>
              <ClientContent>
                <ClientIcon>
                  <IoMdQuote />
                </ClientIcon>
                <ClientText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </ClientText>
              </ClientContent>
            </ClientCard>
          </ClientWrapper>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
