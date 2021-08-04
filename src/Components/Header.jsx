import styled from "styled-components";
import { Link } from "react-router-dom";

const PageTitle = styled.div`
  width: 100%;
  padding: 2rem 20vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.bgImg}) center;
  background-size: cover;
  min-height: 100px;
  color: #fff;
  font-size: 1.5rem;
  font-family: Helvetica, sans-serif;

  @media (min-width: 900px) {
    min-height: 192px;
    font-size: 3rem;
  }
`;

const PageCrumb = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff1f7;
  height: 65px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;

  @media (min-width: 1100px) {
    font-size: 1rem;
  }
`;

const HomeLink = styled(Link)`
  color: #3a7bd5;
  text-decoration: none;
`;

const Header = ({ title, page, pages, bgImg }) => {
  return (
    <>
      <PageTitle bgImg={bgImg}>{title}</PageTitle>
      <PageCrumb>
        {pages.map((pages, index) => {
          return (
            <div key={index}>
              <HomeLink to={pages.link}>{pages.page}</HomeLink>
              &nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          );
        })}
        {page}
      </PageCrumb>
    </>
  );
};

export default Header;
