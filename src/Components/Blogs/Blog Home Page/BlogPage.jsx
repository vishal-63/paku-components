import React from "react";
import {
  BlogPageContainer,
  BlogLayout,
  BlogPageMain,
  BlogArticle,
  BlogArticleTitle,
  BlogArticleInfo,
  BlogInfoWrapper,
  BlogInfoIcon,
  BlogInfoText,
  BlogImg,
  BlogPageAside,
  AsideSearch,
  SearchLabel,
  SearchInput,
  SearchIcon,
  AsideBox,
  AsideBoxTitle,
  CategoriesList,
  Category,
  CategoryNumber,
  PostList,
  PostDay,
  PostDate,
  PostMonth,
  PostTitle,
} from "./BlogPageElements";
import { BiCalendarAlt, BiMessageAlt, BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import blogImg1 from "../../../Images/blog-1.jpg";
import blogImg2 from "../../../Images/blog-2.webp";
import blogImg3 from "../../../Images/blog-3.jpg";

const BlogPage = () => {
  const inputChange = () => {
    const searchLabel = document.getElementById("search-label");
    const searchInput = document.getElementById("search");
    searchInput.value !== ""
      ? (searchLabel.innerHTML = "")
      : (searchLabel.innerHTML = "Search the blog...");
  };

  return (
    <BlogPageContainer>
      <BlogLayout>
        <BlogPageMain>
          <BlogArticle to="/blog-1">
            <BlogArticleTitle>
              Market Reserch Tips For Small Business Owners
            </BlogArticleTitle>

            <BlogArticleInfo>
              <BlogInfoWrapper>
                <BlogInfoIcon>
                  <BiCalendarAlt />
                </BlogInfoIcon>
                <BlogInfoText>May 12, 2018</BlogInfoText>
              </BlogInfoWrapper>

              <BlogInfoWrapper>
                <BlogInfoIcon>
                  <BiMessageAlt />
                </BlogInfoIcon>
                <BlogInfoText>3 comments</BlogInfoText>
              </BlogInfoWrapper>

              <BlogInfoWrapper>
                <BlogInfoIcon>
                  <BsFillPersonFill />
                </BlogInfoIcon>
                <BlogInfoText>Jeet Shah</BlogInfoText>
              </BlogInfoWrapper>
            </BlogArticleInfo>
            <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
              <BlogImg src={blogImg1} alt="small-business-owners" />
            </div>
          </BlogArticle>

          <BlogArticle to="/blog-2">
            <BlogArticleTitle>
              Implementing Digital Transformation
            </BlogArticleTitle>

            <BlogArticleInfo>
              <BlogInfoWrapper>
                <BlogInfoIcon>
                  <BiCalendarAlt />
                </BlogInfoIcon>
                <BlogInfoText>May 12, 2018</BlogInfoText>
              </BlogInfoWrapper>

              <BlogInfoWrapper>
                <BlogInfoIcon>
                  <BiMessageAlt />
                </BlogInfoIcon>
                <BlogInfoText>3 comments</BlogInfoText>
              </BlogInfoWrapper>

              <BlogInfoWrapper>
                <BlogInfoIcon>
                  <BsFillPersonFill />
                </BlogInfoIcon>
                <BlogInfoText>Jeet Shah</BlogInfoText>
              </BlogInfoWrapper>
            </BlogArticleInfo>
            <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
              <BlogImg src={blogImg2} alt="small-business-owners" />
            </div>
          </BlogArticle>

          <BlogArticle to="/blog-3">
            <BlogArticleTitle>
              Acheiving Effective Brand Management
            </BlogArticleTitle>

            <BlogArticleInfo>
              <BlogInfoWrapper>
                <BlogInfoIcon>
                  <BiCalendarAlt />
                </BlogInfoIcon>
                <BlogInfoText>May 12, 2018</BlogInfoText>
              </BlogInfoWrapper>

              <BlogInfoWrapper>
                <BlogInfoIcon>
                  <BiMessageAlt />
                </BlogInfoIcon>
                <BlogInfoText>3 comments</BlogInfoText>
              </BlogInfoWrapper>

              <BlogInfoWrapper>
                <BlogInfoIcon>
                  <BsFillPersonFill />
                </BlogInfoIcon>
                <BlogInfoText>Jeet Shah</BlogInfoText>
              </BlogInfoWrapper>
            </BlogArticleInfo>
            <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
              <BlogImg src={blogImg3} alt="small-business-owners" />
            </div>
          </BlogArticle>
        </BlogPageMain>

        <BlogPageAside>
          <AsideSearch>
            <SearchLabel htmlFor="search" id="search-label">
              Search the blog...
            </SearchLabel>
            <SearchInput
              type="text"
              id="search"
              onChange={inputChange}
            ></SearchInput>
            <SearchIcon>
              <BiSearch />
            </SearchIcon>
          </AsideSearch>

          <AsideBox>
            <AsideBoxTitle>CATEGORIES</AsideBoxTitle>
            <CategoriesList>
              <Category className="active">
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  All Categories
                </p>
                <CategoryNumber style={{ color: "#151515" }}>64</CategoryNumber>
              </Category>
              <Category>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Consulting
                </p>
                <CategoryNumber>23</CategoryNumber>
              </Category>
              <Category>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Analytics
                </p>
                <CategoryNumber>10</CategoryNumber>
              </Category>
              <Category>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Management
                </p>
                <CategoryNumber>15</CategoryNumber>
              </Category>
            </CategoriesList>
          </AsideBox>
          <AsideBox>
            <AsideBoxTitle>LATEST POSTS</AsideBoxTitle>
            <PostList>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " 1rem 0",
                }}
              >
                <PostDay>
                  <PostDate>24</PostDate>
                  <PostMonth>MAY</PostMonth>
                </PostDay>
                <PostTitle to="/blog-1">
                  Market Research Tips For Small Business Owners
                </PostTitle>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " 1rem 0",
                }}
              >
                <PostDay>
                  <PostDate>12</PostDate>
                  <PostMonth>MAY</PostMonth>
                </PostDay>
                <PostTitle to="/blog-2">
                  Implementing Digital Transformation
                </PostTitle>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " 1rem 0",
                }}
              >
                <PostDay>
                  <PostDate>03</PostDate>
                  <PostMonth>MAY</PostMonth>
                </PostDay>
                <PostTitle to="/blog-3">
                  Achieving Effective Brand Management
                </PostTitle>
              </li>
            </PostList>
          </AsideBox>
        </BlogPageAside>
      </BlogLayout>
    </BlogPageContainer>
  );
};

export default BlogPage;
