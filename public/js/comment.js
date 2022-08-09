const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('textarea[name="comment-body"]').value.trim();
    const postID = 1; //TODO
  
    if (content) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content, postID }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); //TODO ?
      } else {
        alert('An error occured.');
      }
    }
  };