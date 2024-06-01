import { useState, useEffect } from "react";
import { axiosWithToken } from "../axioswithToken";
import { useNavigate, Outlet } from "react-router-dom";
import "./Articles.css";
function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  let navigate = useNavigate();
  const getArticlesOfCurrentAuthor = async () => {
    let res = await axiosWithToken.get(
      `http://localhost:4000/user-api/articles`
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
    <div className="articles">
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
                  {article.content.substring(0, 80) + "...."}
                </p>
                <button
                  className="rmbtn btn-4"
                  onClick={() => readArticleByArticleId(article)}
                >
                  <span>Read More</span>
                </button>
              </div>
              <div
                className="card-footer bg-light"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                <small className="text-body-secondary">
                  Updated on {article.dateOfModification}
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

export default Articles;
