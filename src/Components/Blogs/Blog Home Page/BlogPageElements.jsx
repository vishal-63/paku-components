import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogPageContainer = styled.section`
  width: 100%;
  margin: 3rem auto;

  @media (min-width: 900px) {
    margin: 6rem auto;
  }
`;

export const BlogLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
  flex-direction: column;

  @media (min-width: 900px) {
    padding: 0 2rem;
    flex-direction: row;
  }
`;

export const BlogPageMain = styled.article`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    max-width: 50vw;
  }
`;

export const BlogArticle = styled(Link)`
  text-align: center;
  border: 1px solid #e5e5e5;
  padding: 1.125rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #151515;
  overflow: hidden;

  &:nth-child(1) {
    margin-top: 0;
  }

  &:nth-child(3) {
    margin-bottom: 0;
  }

  @media (min-width: 540px) {
    padding: 2.5rem 1.5rem;
    margin: 2rem 0;
  }
`;

export const BlogArticleTitle = styled.h3`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #151515;
  line-height: 1;

  &:hover {
    color: #3a7bd5;
  }

  @media (min-width: 540px) {
    max-width: 85%;
  }

  @media (min-width: 900px) {
    font-size: 2.25rem;
    max-width: 70%;
  }
`;

export const BlogArticleInfo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  list-style: none;
`;

export const BlogInfoWrapper = styled.li`
  padding: 0 0.75rem;
  margin-bottom: 0.625rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    height: 6px;
    width: 6px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #3a7bd5;
    border-radius: 50%;
  }

  &:nth-child(3)::after {
    display: none;
  }

  @media (min-width: 540px) {
    padding: 0 1.25rem;
  }
`;

export const BlogInfoIcon = styled.span`
  font-size: 1rem;
  color: #9b9b9b;
  display: flex;
  align-items: center;
`;

export const BlogInfoText = styled.p`
  font-size: 1rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 0 0.5rem;
  color: #9b9b9b;

  &:hover {
    color: #3a7bd5;
  }
`;

export const BlogImg = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BlogPageAside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 900px) {
    width: 19rem;
    margin-top: 0;
    margin-left: 3rem;
  }

  @media (min-width: 1100px) {
    margin-left: 6rem;
  }
`;

export const AsideSearch = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  border: 1px solid #e5e5e5;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 1rem 3.75rem 1rem 1.25rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #9b9b9b;
  outline: none;
  border: none;
`;

export const SearchLabel = styled.label`
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 1.25rem;
  line-height: 1.5rem;
  transform: translateY(50%);
  color: #9b9b9b;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
`;

export const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  color: #000;
  position: absolute;
  right: 0;
  font-size: 1.75rem;
  padding-right: 0.5rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: #3a7bd5;
  }
`;

export const AsideBox = styled.div`
  width: 100%;
  padding: 1.5rem 1.375rem 1.75rem;
  margin-bottom: 2rem;
  border: 1px solid #e5e5e5;
`;

export const AsideBoxTitle = styled.p`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  width: 100%;
  margin: auto;
  text-align: center;
  color: #151515;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e5e5;
  position: relative;

  &::after {
    content: "";
    width: 4rem;
    height: 0.25rem;
    background-color: #3a7bd5;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CategoriesList = styled.ul`
  color: #151515;
  font-family: "Montserrat", sans-serif;
  font-size: 1.125rem;
  margin-top: 2.5rem;
  list-style-type: none;
`;

export const Category = styled.li`
  padding: 0.25rem 0 0.25rem 1.25rem;
  position: relative;
  margin-top: 0.5rem;
  cursor: pointer;

  &.active {
    color: #3a7bd5;
    margin: 0;
  }

  &::before {
    content: "";
    height: 100%;
    width: 1px;
    background-color: #e5e5e5;
    position: absolute;
    left: 0;
  }

  &.active::before {
    background-color: #3a7bd5;
  }

  &:hover {
    color: #3a7bd5;
  }
`;

export const CategoryNumber = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: #9b9b9b;
`;

export const PostList = styled.ul`
  list-style-type: none;
  margin-top: 2.5rem;
`;

export const PostDay = styled.time`
  padding: 0.25rem 0.675rem 0.25rem 0;
  position: relative;
  min-width: 3rem;
  display: block;
  text-align: left;
  letter-spacing: 0.05em;

  &::after {
    content: "";
    width: 3px;
    height: 90%;
    background-color: #04ccfc;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const PostDate = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  color: #151515;
  line-height: 1;
  display: block;
`;

export const PostMonth = styled.span`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  color: #9b9b9b;
  text-transform: uppercase;
  line-height: 1;
  display: block;
`;

export const PostTitle = styled(Link)`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  color: #151515;
  letter-spacing: 0.05em;
  padding: 0 1.25rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    color: #3a7bd5;
  }
`;
