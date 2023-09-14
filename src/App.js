import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import MemoHook from "./components/MemoHook";
import UseRefHook from "./components/UseRefHook";


// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, faMagnifyingGlass)




/**
 * 
 *  Header
 *  Body
 *    Sidebar
 *        MenuItems
 *    maincontainer
 *        ButtonList
 *        VideoConatiner
 *            VideoCard
 *    
 */

const appRouter = createBrowserRouter([{
  Path: "/",
  element: <Body/>,
  children: [{
    path: "/",
    element: <MainContainer/> 
  },
  {
    path: "watch",
    element: <WatchPage/>
  },
  {
    path: "memohook",
    element: <><MemoHook/> <UseRefHook/></>
  }
]
}]);



//Provider is used to provide stiore to our app
function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
