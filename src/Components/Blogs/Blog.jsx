import {
  BlogPageContainer,
  BlogLayout,
  BlogPageMain,
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
} from "./Blog Home Page/BlogPageElements";
import {
  ArticleContainer,
  ArticleDate,
  ArticleDateContainer,
  ArticleFooter,
  ArticleFooterIcons,
  ArticleFooterText,
  ArticleHeader,
  ArticleMonth,
  ArticlePara,
  ArticleTitle,
  HeaderList,
  Icon,
  Quote,
  QuoteContainer,
  QuoteIcon,
  RecentPostsContainer,
  RecentPost,
  RecentPostTitle,
  RecentPostWrapper,
} from "./BlogItems";
import { BiComment, BiSearch } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";

const Blog = (props) => {
  const inputChange = () => {
    const searchLabel = document.getElementById("search-label");
    const searchInput = document.getElementById("search");
    searchInput.value != ""
      ? (searchLabel.innerHTML = "")
      : (searchLabel.innerHTML = "Search the blog...");
  };
  return (
    <BlogPageContainer>
      <BlogLayout>
        <BlogPageMain>
          <ArticleContainer>
            <ArticleHeader>
              <div style={{ display: "flex", margin: "0 -1rem" }}>
                <HeaderList>
                  <Icon>
                    <BiComment />
                  </Icon>
                  {props.comments}
                </HeaderList>
                <HeaderList>
                  <Icon>
                    <FaRegThumbsUp />
                  </Icon>
                  {props.likes}
                </HeaderList>
              </div>
              <div style={{ display: "flex" }}>
                <Icon>
                  <BsFillPersonFill />
                </Icon>
                by {props.author}
              </div>
            </ArticleHeader>
            <ArticleDateContainer>
              <ArticleDate>{props.date}</ArticleDate>
              <ArticleMonth>{props.month}</ArticleMonth>
            </ArticleDateContainer>
            <ArticleTitle>{props.title}</ArticleTitle>
            <ArticlePara>{props.para1}</ArticlePara>
            <img
              src={props.img}
              alt="small business"
              style={{ marginTop: "2.25rem", width: "100%" }}
            />
            <ArticlePara>{props.para2}</ArticlePara>
            <QuoteContainer>
              <QuoteIcon>
                <svg
                  style={{ display: "block", position: "relative" }}
                  fill="none"
                  viewBox="0 0 18 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.54 11.74c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45L6.65.94C3.45 2.46.31 5.96.85 10.37 1.19 13.16 2.8 15 5.08 15c1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38zm9.43 0c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45L16.08.94c-3.2 1.52-6.34 5.02-5.8 9.43.34 2.79 1.95 4.63 4.23 4.63 1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38z"
                    fill="url(#a)"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      gradientUnits="userSpaceOnUse"
                      x1="9.38"
                      x2="9.38"
                      y1=".94"
                      y2="15"
                    >
                      <stop stopColor="#16C7F8" />
                      <stop offset="1" stopColor="#367ED9" />
                    </linearGradient>
                  </defs>
                </svg>
              </QuoteIcon>
              <Quote>{props.quote}</Quote>
            </QuoteContainer>
            <ArticlePara>{props.para3}</ArticlePara>
            <ArticleFooter>
              <ArticleFooterText>Share this post</ArticleFooterText>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ArticleFooterIcons>
                  <FaFacebookF />
                </ArticleFooterIcons>
                <ArticleFooterIcons>
                  <FaTwitter />
                </ArticleFooterIcons>
                <ArticleFooterIcons>
                  <FaGooglePlusG />
                </ArticleFooterIcons>
                <ArticleFooterIcons>
                  <FaPinterestP />
                </ArticleFooterIcons>
              </div>
            </ArticleFooter>
          </ArticleContainer>
          <RecentPostsContainer>
            <AsideBoxTitle>Recent Posts</AsideBoxTitle>
            <RecentPostWrapper>
              <RecentPost to={props.recentPost1}>
                <img
                  src={props.recentPost1Img}
                  alt="blog-1"
                  style={{ maxWidth: "100%" }}
                />
                <RecentPostTitle>{props.recentPost1Title}</RecentPostTitle>
                <ArticleHeader>
                  <div style={{ display: "flex", margin: "0 -1rem" }}>
                    <HeaderList>
                      <Icon>
                        <BiComment />
                      </Icon>
                      {props.comments}
                    </HeaderList>
                    <HeaderList>
                      <Icon>
                        <FaRegThumbsUp />
                      </Icon>
                      {props.likes}
                    </HeaderList>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Icon>
                      <BsFillPersonFill />
                    </Icon>
                    by {props.author}
                  </div>
                </ArticleHeader>
              </RecentPost>
              <RecentPost to={props.recentPost2}>
                <img
                  src={props.recentPost2Img}
                  alt="blog-2"
                  style={{ maxWidth: "100%" }}
                />
                <RecentPostTitle>{props.recentPost2Title}</RecentPostTitle>
                <ArticleHeader>
                  <div style={{ display: "flex", margin: "0 -1rem" }}>
                    <HeaderList>
                      <Icon>
                        <BiComment />
                      </Icon>
                      {props.comments}
                    </HeaderList>
                    <HeaderList>
                      <Icon>
                        <FaRegThumbsUp />
                      </Icon>
                      {props.likes}
                    </HeaderList>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Icon>
                      <BsFillPersonFill />
                    </Icon>
                    by {props.author}
                  </div>
                </ArticleHeader>
              </RecentPost>
            </RecentPostWrapper>
          </RecentPostsContainer>
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
                    fontFamily:
                      'Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  All Categories
                </p>
                <CategoryNumber style={{ color: "#151515" }}>64</CategoryNumber>
              </Category>
              <Category>
                <p
                  style={{
                    fontFamily:
                      'Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  Consulting
                </p>
                <CategoryNumber>23</CategoryNumber>
              </Category>
              <Category>
                <p
                  style={{
                    fontFamily:
                      'Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  Analytics
                </p>
                <CategoryNumber>10</CategoryNumber>
              </Category>
              <Category>
                <p
                  style={{
                    fontFamily:
                      'Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif',
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

export default Blog;
