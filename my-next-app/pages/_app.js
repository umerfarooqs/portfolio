import "@/styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import store from "./redux/store";
import { Provider } from "react-redux";




export default function App({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </Provider>
  );
}

