import Header from '../components/templates/header';
import PageHeader from '../components/organisms/page-header';
import Card from '../components/organisms/card';
import UserIcon from '../components/atoms/user-icon';

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

const pageOuterStyle: React.CSSProperties = {
  marginTop: '2rem',
};

const pageInnerStyle: React.CSSProperties = {
  display: 'flex',
};

const sidebarStyle: React.CSSProperties = {
  width: '33.333333%',
  marginLeft: '-2rem',
  marginRight: '-2rem',
};

const usersStyle: React.CSSProperties = {
  paddingLeft: '2rem',
  paddingRight: '2rem',
};

const usersTitleStyle: React.CSSProperties = {
  marginBottom: '1rem',
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  fontWeight: '700',
  color: 'rgba(55, 65, 81, 1)',
};

const userCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '24rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
};

const userCardContentStyle: React.CSSProperties = {
  marginLeft: '-1rem',
  marginRight: '-1rem',
};

const userCardItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const userCardNameStyle: React.CSSProperties = {
  marginLeft: '0.25rem',
  marginRight: '0.25rem',
  fontWeight: '700',
  color: 'rgba(55, 65, 81, 1)',
};

const userPostCountStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: '300',
  color: 'rgba(55, 65, 81, 1)',
};

const categoryCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '24rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
};

const categoryListStyle: React.CSSProperties = {
  marginTop: '0.5rem',
};

const categoryItemStyle: React.CSSProperties = {
  marginLeft: '0.25rem',
  marginRight: '0.25rem',
  fontWeight: 'bold',
  color: 'rgba(55, 65, 81, 1)',
};

const postTagOuterStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const postTagInnerStyle: React.CSSProperties = {
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  color: 'rgba(209, 250, 229, 1)',
  backgroundColor: 'rgba(75, 85, 99, 1)',
  borderRadius: '0.25rem',
};

const recentPostContentOuterStyle: React.CSSProperties = {
  marginTop: '1rem',
};

const recentPostContentInnerStyle: React.CSSProperties = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fontWeight: '500',
  color: 'rgba(55, 65, 81, 1)',
};

const recentPostAuthorOuterStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1rem',
};

const recentPostAuthorInnerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const recentPostAuthorNameStyle: React.CSSProperties = {
  marginLeft: '0.75rem',
  marginRight: '0.75rem',
  fontSize: '0.75rem',
  lineHeight: '1.25rem',
  color: 'rgba(55, 65, 81, 1)',
};

const recentPostedAtStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  lineHeight: '1.25rem',
  color: 'rgba(75, 85, 99, 1)',
};

const pageElementStyle: React.CSSProperties = {
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  marginLeft: '0.25rem',
  marginRight: '0.25rem',
  fontWeight: '500',
  color: 'rgba(107, 114, 128, 1)',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '0.375rem',
  cursor: 'not-allowed',
};

export default function Home() {
  return (
    <div>
      <div style={outerStyle}>
        <Header />
        <div style={innerStyle1}>
          <div style={innerStyle2}>
            <div style={innerStyle3}>
              <PageHeader text="Post" />
              <Card
                timestamp="Jun 1, 2020"
                message="Laravel"
                titleText="Build Your New Idea with Laravel Freamwork."
                contentText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"
                text="Read more"
                imgPath=""
                userName="AlexJohn"
              />
              <Card
                timestamp="Jun 1, 2020"
                message="Laravel"
                titleText="Build Your New Idea with Laravel Freamwork."
                contentText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"
                text="Read more"
                imgPath=""
                userName="AlexJohn"
              />
              <Card
                timestamp="Jun 1, 2020"
                message="Laravel"
                titleText="Build Your New Idea with Laravel Freamwork."
                contentText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"
                text="Read more"
                imgPath=""
                userName="AlexJohn"
              />
              <div style={pageOuterStyle}>
                <div style={pageInnerStyle}>
                  <a href="#" style={pageElementStyle}>
                    Previous
                  </a>
                  <a href="#" style={pageElementStyle}>
                    1
                  </a>
                  <a href="#" style={pageElementStyle}>
                    2
                  </a>
                  <a href="#" style={pageElementStyle}>
                    3
                  </a>
                  <a href="#" style={pageElementStyle}>
                    Next
                  </a>
                </div>
              </div>
            </div>
            <div style={sidebarStyle}>
              <div style={usersStyle}>
                <h1 style={usersTitleStyle}>Authors</h1>
                <div style={userCardStyle}>
                  <ul style={userCardContentStyle}>
                    <li style={userCardItemStyle}>
                      <UserIcon imgPath="" />
                      <p>
                        <a href="#" style={userCardNameStyle}>
                          Alex John
                        </a>
                        <span style={userPostCountStyle}>Created 23 Posts</span>
                      </p>
                    </li>
                    <li style={userCardItemStyle}>
                      <UserIcon imgPath="" />
                      <p>
                        <a href="#" style={userCardNameStyle}>
                          Alex John
                        </a>
                        <span style={userPostCountStyle}>Created 23 Posts</span>
                      </p>
                    </li>
                    <li style={userCardItemStyle}>
                      <UserIcon imgPath="" />
                      <p>
                        <a href="#" style={userCardNameStyle}>
                          Alex John
                        </a>
                        <span style={userPostCountStyle}>Created 23 Posts</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <h1 style={usersTitleStyle}>Categories</h1>
              </div>
              <div style={usersStyle}>
                <div style={categoryCardStyle}>
                  <ul>
                    <li>
                      <a href="#" style={categoryItemStyle}>
                        - AWS
                      </a>
                    </li>
                    <li style={categoryListStyle}>
                      <a href="#" style={categoryItemStyle}>
                        - Laravel
                      </a>
                    </li>
                    <li style={categoryListStyle}>
                      <a href="#" style={categoryItemStyle}>
                        - Vue
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={usersStyle}>
                <h1 style={usersTitleStyle}>Recent Post</h1>
                <div style={categoryCardStyle}>
                  <div style={postTagOuterStyle}>
                    <a href="#" style={postTagInnerStyle}>
                      Laravel
                    </a>
                  </div>
                  <div style={recentPostContentOuterStyle}>
                    <a href="#" style={recentPostContentInnerStyle}>
                      Build Your New Idea with Laravel Freamwork.
                    </a>
                  </div>
                  <div style={recentPostAuthorOuterStyle}>
                    <div style={recentPostAuthorInnerStyle}>
                      <UserIcon imgPath="" />
                      <a href="#" style={recentPostAuthorNameStyle}>
                        Alex John
                      </a>
                    </div>
                    <span style={recentPostedAtStyle}>Jun 1, 2020</span>
                  </div>
                </div>
              </div>
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
}
