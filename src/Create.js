import { useState } from "react"

const Create = () => {
  const [title, setTitle] = useState(``);
  const [body, setBody] = useState(``);
  const [author, setAuthor] = useState(`ed`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    console.log(blog)
    fetch(`http://localhost:8000/blogs`, {
      method: `POST`,
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log(`new blog added`);
    })
  }

  return (
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            type=""
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="ed">ed</option>
            <option value="baste">baste</option>
          </select>
          <button>Add Blog</button>
        </form>
    </div>
  )
}

export default Create