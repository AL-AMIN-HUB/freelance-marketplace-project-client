import "antd/dist/antd.css";
import AuthProvider from "../Context/AuthProvider/AuthProvider";
import "../styles/custom.css";
import "../styles/globals.css";
import "../styles/profile.css";
import "../styles/SellerFooter.css";
import "../styles/SellerLearningPath.css";
import "../styles/global.sidebar.css";
import "../styles/pages/_totalGigs.css";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
