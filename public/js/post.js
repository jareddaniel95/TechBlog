const postFormHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('textarea[name="title"]').value.trim();
    const post_content = document.querySelector('textarea[name="content"]').value.trim();
    const user_id = 1; //TODO
  
    if (post_title && post_content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ post_title, post_content, user_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // document.location.replace('/'); //TODO ?
        console.log(response);
      } else {
        alert('An error occured.');
      }
    }
  };

  document.querySelector('#submit-post').addEventListener('click', postFormHandler);