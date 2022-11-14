import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();
    const handleSubmit=(e)=>{
      e.preventDefault();
      const blog ={title,body , author};
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('New Blog Added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
        
    }
    return ( 
        <div className="create">
            <h2>Add A new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <br></br>
                <input
                 type="text" 
                 required 
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                 />
                 <br></br>
                <label>Blog body: </label>
                <br></br>
                <textarea
                 required
                  value={body}
                  onChange={(e)=>setBody(e.target.value)}
                  >

                </textarea>
                <br></br>
                <label>Blog author: </label>
                <br></br>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Salam">Salam Ali</option>
                    <option value="Sara">Sara Ali</option>
                    <option value="Sumaya">Sumaya Ali</option>
                    <option value="Jalal">Jalal Ali</option>
                </select>
                <br></br>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog .....</button>}
                
            </form>
        </div>
     );
}
 
export default Create;