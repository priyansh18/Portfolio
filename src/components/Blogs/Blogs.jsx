import React, { Component } from "react";
import "./Blogs.scss";
import ModernWeb from "../../assets/blogs/modernweb.png";
import APIImage from "../../assets/blogs/API.gif";
import DjangoImage from "../../assets/blogs/djangoheroku.jpeg";

class Blogs extends Component {
    state = {
        blogs: [
          {
            photo: DjangoImage,
            published : "Django Framework",
            publication: "https://medium.com/django-framework-real-world-projects",
            title: "Deploy Django Project on Heroku",
            website: "https://medium.com/django-framework-real-world-projects/deploy-django-project-on-heroku-13b191e311b6",

          },
          {
            photo: APIImage,
            published : "Javarevisited",
            publication: "https://medium.com/javarevisited",
            title: "API & Its types",
            website: "https://medium.com/javarevisited/api-its-types-2f810409626",
          },
          {
            photo: ModernWeb,
            published : "Javarevisited",
            publication: "https://medium.com/javarevisited",
            title: "Introduction to Modern Web Development",
            website: "https://medium.com/javarevisited/intro-to-modern-web-development-d714563c87e",
          },
        ],
      };
    
      render() {
        return (
          <div className="blogs-section" id="blogs">
            <section>
              <h4>blogs</h4>
            </section>
            <div className="container">
              {this.state.blogs.map((blog, i) => (
                <div className="blog-card" key={100 + i}>
                  <div className="pic">
                    <img src={blog.photo} alt="blogpic" />
                    <div className="name">
                        <a
                        href={blog.publication}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {blog.published}
                        </a>
                    </div>
                  </div>
                  <div className="title">
                        <a
                        href={blog.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {blog.title}
                        </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
}
 
export default Blogs;
