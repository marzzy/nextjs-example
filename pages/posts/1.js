import { useState, useEffect } from 'react';

async function fetchMarzzyData(setMarzzyData) {
  await fetch('https://api.github.com/users/marzzy')
    .then(response => response.json())
    .then(data => {
      const { name, avatar_url, bio, html_url } = data;
      setMarzzyData({ name, avatar_url, bio, html_url });
    });
}

function Post() {
  const [marzzyData, setMarzzyData] = useState({});
  
  useEffect(() => {
    fetchMarzzyData(setMarzzyData);
  }, []);
  console.log('state', marzzyData);
  
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

export default Post;
