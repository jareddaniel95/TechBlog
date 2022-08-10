const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('textarea[name="comment"]').value.trim();
    const post_id = 1; //TODO
  
    if (comment_content) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_content, post_id }),
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

  document.querySelector('#submit-comment').addEventListener('click', commentFormHandler);