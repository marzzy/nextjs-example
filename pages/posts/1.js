// we needed a fetch lib that node get it
import fetch from 'node-fetch';

function Post({ marzzyData }) {
  return (
    <div>
      <img
        src={marzzyData.avatar_url}
        alt={marzzyData.name}
        width="120"
      />
      <br />
      <span>name: {marzzyData.name}</span>
      <p>bio status: {marzzyData.bio}</p>
      <br />
      <a href={marzzyData.html_url}>go to page</a>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/marzzy');
  const allMarzzyData = await response.json();
  const marzzyData = {
    name: allMarzzyData.name,
    avatar_url: allMarzzyData.avatar_url,
    bio: allMarzzyData.bio,
    html_url: allMarzzyData.html_url
  };
  return {
    props: { marzzyData }
  }
}

export default Post;
