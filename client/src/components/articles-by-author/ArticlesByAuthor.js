import axios from "axios";
import { axiosWithToken } from "../axioswithToken";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ArticlesByAuthor.css";
import { useNavigate, redirect, Outlet } from "react-router-dom";

function ArticlesByAuthor() {
  const [articlesList, setArticlesList] = useState([]);
  let navigate = useNavigate();
  let { currentUser } = useSelector((state) => state.userAuthorLoginReducer);
  const getArticlesOfCurrentAuthor = async () => {
    let res = await axiosWithToken.get(
      `http://localhost:4000/author-api/articles/${currentUser.username}`
    );
    setArticlesList(res.data.payload);
  };

  const readArticleByArticleId = (articleObj) => {
    navigate(`../article/${articleObj.articleId}`, { state: articleObj });
  };

  useEffect(() => {
    getArticlesOfCurrentAuthor();
  }, []);

  return (
    <div className="articlesba">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
        {articlesList.map((article) => (
          <div className="col" key={article.articleId}>
            <div className="card h-100">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                >
                  {article.title}
                </h5>
                <p
                  className="card-text"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  {article.content.substring(0, 100) + "...."}
                </p>
                <button
                  className="rmbtn btn-4"
                  onClick={() => readArticleByArticleId(article)}
                >
                  <span>Read More</span>
                </button>
              </div>
              <div
                className="card-footer"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                <small className="text-body-secondary">
                  Modified on {article.dateOfModification}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default ArticlesByAuthor;
