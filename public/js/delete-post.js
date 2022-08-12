const deletePostFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = document.querySelector('input[name="post-id"]').value;
  
    const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE',
    body: JSON.stringify({ post_id }),
    headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('An error occured.');
    }
  };

  document.querySelector('#delete-post').addEventListener('click', deletePostFormHandler);