import React, { FC } from 'react';
import Header from '../organisms/header';
import PageHeader from '../organisms/page-header';
import Card from '../organisms/card';
import Pagination from '../organisms/pagination';
import Authors from '../organisms/authors';
import Categories from '../organisms/categories';
import RecentPost from '../organisms/recent-post';

const footerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  right: '0px',
  zIndex: '40',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 1)',
  backgroundColor: 'rgba(31, 41, 55, 1)',
};

const footerTextStyle: React.CSSProperties = {
  color: 'rgba(229, 231, 235, 1)',
  textDecoration: 'underline',
};

const outerStyle: React.CSSProperties = {
  overflowX: 'hidden',
  backgroundColor: 'rgba(243, 244, 246, 1)',
};

const innerStyle1: React.CSSProperties = {
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '2rem',
  paddingBottom: '2rem',
};

const innerStyle2: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const innerStyle3: React.CSSProperties = {
  width: '66.666666%',
};

const sidebarStyle: React.CSSProperties = {
  width: '33.333333%',
  marginLeft: '-2rem',
  marginRight: '-2rem',
};

const Posts: FC<{
  headerLeft: string;
  headerRightItems: string[];
  pageTitle: string;
  timestamp: string;
  message: string;
  titleText: string;
  contentText: string;
  text: string;
  imgPath: string;
  userName: string;
  pageNumbers: string[];
  authorImgPath: string;
  authorName: string;
  authorPostCount: number;
  categoryItems: string[];
  recentPostTag: string;
  recentPostContent: string;
  recentPostImgPath: string;
  recentPostAuthorName: string;
  recentPostPostedAt: string;
}> = (props) => {
  return (
    <div>
      <div style={outerStyle}>
        <Header
          headerLeft={props.headerLeft}
          headerRightItems={props.headerRightItems}
        />
        <div style={innerStyle1}>
          <div style={innerStyle2}>
            <div style={innerStyle3}>
              <PageHeader text={props.pageTitle} />
              <Card
                timestamp={props.timestamp}
                message={props.message}
                titleText={props.titleText}
                contentText={props.contentText}
                text={props.text}
                imgPath={props.imgPath}
                userName={props.userName}
              />
              <Card
                timestamp={props.timestamp}
                message={props.message}
                titleText={props.titleText}
                contentText={props.contentText}
                text={props.text}
                imgPath={props.imgPath}
                userName={props.userName}
              />
              <Card
                timestamp={props.timestamp}
                message={props.message}
                titleText={props.titleText}
                contentText={props.contentText}
                text={props.text}
                imgPath={props.imgPath}
                userName={props.userName}
              />
              <Pagination pageNumbers={props.pageNumbers} />
            </div>
            <div style={sidebarStyle}>
              <Authors
                cardTitle="Authors"
                imgPath={props.authorImgPath}
                authorName={props.authorName}
                authorPostCount={props.authorPostCount}
              />
              <Categories
                cardTitle="Categories"
                categoryItems={props.categoryItems}
              />
              <RecentPost
                cardTitle="Recent Post"
                recentPostTag={props.recentPostTag}
                recentPostContent={props.recentPostContent}
                imgPath={props.recentPostImgPath}
                recentPostAuthorName={props.recentPostAuthorName}
                recentPostPostedAt={props.recentPostPostedAt}
              />
            </div>
          </div>
        </div>
        <div style={footerStyle}>
          This a Blog Page by Shun Kondo.
          <a style={footerTextStyle}>Component details</a>
        </div>
      </div>
    </div>
  );
};

export default Posts;
