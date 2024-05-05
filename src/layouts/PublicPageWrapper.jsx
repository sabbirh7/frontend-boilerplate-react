import { Helmet, HelmetProvider } from "react-helmet-async";
import TopBar from '../components/TopBar/TopBar';
import { PAGES, SETTINGS } from "../utils/constants/TopBarConstant";

const PublicPageWrapper = ({children, pageTitle}) => {
  return (
    <HelmetProvider>
        {
          pageTitle && (
            <Helmet defer={false}>
              <title>My App || {pageTitle}</title>
            </Helmet>
          )
        }
        <TopBar pages={PAGES} settings={SETTINGS}></TopBar>
        <main>
            {children}
        </main>
    </HelmetProvider>
  )
}

export default PublicPageWrapper