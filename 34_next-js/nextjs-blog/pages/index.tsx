import Posts from '../components/templates/posts';

export default function Home() {
  return (
    <div>
      <Posts
        // PageHeader
        headerLeft="Brand"
        headerRightItems={['Home', 'Blog', 'About us']}
        // PageTitle
        pageTitle="Post"
        // Card
        timestamp="Jun 1, 2020"
        message="Laravel"
        titleText="Build Your New Idea with Laravel Freamwork."
        contentText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"
        text="Read more"
        imgPath=""
        userName="Alex John"
        // Pagination
        pageNumbers={['1', '2', '3']}
        // SideBar
        authorImgPath=""
        authorName="Alex John"
        authorPostCount={23}
        categoryItems={['AWS', 'Laravel', 'Vue', 'Design', 'Django', 'PHP']}
        recentPostTag="Laravel"
        recentPostContent="Build Your New Idea with Laravel Freamwork."
        recentPostImgPath=""
        recentPostAuthorName="Alex John"
        recentPostPostedAt="Jun 1, 2020"
      />
    </div>
  );
}
