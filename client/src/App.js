import './App.css';
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom' ;
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import ErrorPage from './ErrorPage';
import {lazy, Suspense} from 'react'
import Signup from './components/signup/SignUp';
import Signin from './components/signin/Signin';
import UserProfile from './components/userprofile/UserProfile';
import Article from './components/article/Article';
import Articles from './components/articles/Articles';
import AuthorProfile from './components/author-profile/AuthorProfile';
import ArticlesByAuthor from './components/articles-by-author/ArticlesByAuthor';
const AddArticle=lazy(()=>import('./components/add-article/AddArticle'))
function App() {
  const browserRouter=createBrowserRouter([{
    path:'',
    element:<RootLayout />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:"/user-profile",
        element:<UserProfile />,
        children:[
          {
            path:"articles",
            element:<Articles />
          },
          {
            path:"article/:articleId",
            element:<Article />
          },
          {
            path:'',
            element:<Navigate to='articles' />
          }
        ]
      },
      {
        path:"/author-profile",
        element:<AuthorProfile />,
        children:[
          {
            path:'new-article',
            element:<Suspense fallback="loading..."><AddArticle /></Suspense> 
          },
          {
            path:'articles-by-author/:author',
            element:<ArticlesByAuthor />,
           
          },
          {
            path:"article/:articleId",
            element:<Article />
          },
          {
            path:'',
            element:<Navigate to='articles-by-author/:author' />
          }
        ]
      }
    ]
  }])

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
