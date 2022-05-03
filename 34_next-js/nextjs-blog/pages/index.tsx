import Header from '../components/templates/header';
import PageHeader from '../components/organisms/page-header';
import Card from '../components/organisms/card';

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
  width: '100%',
};

export default function Home() {
  return (
    <div>
      <div style={footerStyle}>
        This a Blog Page by Shun Kondo.
        <a style={footerTextStyle}>Component details</a>
      </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
