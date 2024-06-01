import "./AddArticle.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { axiosWithToken } from "../axioswithToken";
function AddArticle() {
  const { register, handleSubmit } = useForm();
  const { currentUser } = useSelector((state) => state.userAuthorLoginReducer);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const postNewArticle = async (article) => {
    article.dateOfCreation = new Date();
    article.dateOfModification = new Date();
    article.articleId = Date.now();
    article.username = currentUser.username;
    article.comments = [];
    article.status = true;

    // Make HTTP post request
    const res = await axiosWithToken.post(
      "http://localhost:4000/author-api/article",
      article
    );
    console.log(res);
    if (res.data.message === "New article created") {
      navigate(`/author-profile/articles-by-author/${currentUser.username}`);
    } else {
      setErr(res.data.message);
    }
  };

  return (
    <div className="addarticle container rounded rounded-3">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 col-md-8 col-sm-10">
          <div className="card rounded rounded-5">
            <div className="card-title text-center border-bottom">
              <h2
                className="p-3"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Write Your Article
              </h2>
            </div>
            <div className="card-body bg-light">
              {err.length !== 0 && <p className="text-danger fs-5">{err}</p>}
              <form onSubmit={handleSubmit(postNewArticle)}>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="form-label"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    {...register("title")}
                  />
                </div>

                <div
                  className="mb-4"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  <label htmlFor="category" className="form-label">
                    Select a category
                  </label>
                  <select
                    {...register("category")}
                    id="category"
                    className="form-select"
                  >
                    <option value="select" disabled selected>
                      Select Option
                    </option>
                    <option value="programming">Programming</option>
                    <option value="AI&ML">AI & ML</option>
                    <option value="database">Database</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <textarea
                    {...register("content")}
                    className="form-control"
                    id="content"
                    rows="10"
                  ></textarea>
                </div>

                <div className="submitbtn text-center">
                  <button
                    type="submit"
                    className="text-light"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddArticle;
