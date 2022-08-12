const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('textarea[name="comment"]').value.trim();
    const location = window.location.toString().split('/');
    const post_id = location[location.length - 1];
  
    if (comment_content) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_content, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
        console.log(response);
      } else {
        alert('An error occured.');
      }
    }
  };

  document.querySelector('#submit-comment').addEventListener('click', commentFormHandler);