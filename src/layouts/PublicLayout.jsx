import PublicPageWrapper from "./PublicPageWrapper";

const PublicLayout = ({component, pageTitle}) => {
  return (
    <PublicPageWrapper pageTitle={pageTitle}>
        {component}
    </PublicPageWrapper>
  );
}

export default PublicLayout;