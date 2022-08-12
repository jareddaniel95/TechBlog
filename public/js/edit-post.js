const postFormHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('input[name="title"]').value.trim();
    const post_content = document.querySelector('textarea[name="content"]').value.trim();
    const location = window.location.toString().split('/');
    const post_id = location[location.length - 1];
  
    if (post_title && post_content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ post_title, post_content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('An error occured.');
      }
    }
  };

  document.querySelector('#submit-post').addEventListener('click', postFormHandler);