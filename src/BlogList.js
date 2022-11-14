import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            { blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} className="link">
                    <h3>{blog.title}</h3>
                    <hr></hr>
                    <p>Written By {blog.author}</p>
                    </Link>
                    
                </div>
            ))}
             
           
        </div> 
     );
}
 
export default BlogList;