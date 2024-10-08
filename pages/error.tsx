export const PageWithError = () => {
  return <h1>Yes</h1>;
};

export const getServerSideProps = () => {
  // @ts-expect-error -- yes
  nonExistingMethod();

  return {
    props: {},
  };
};

export default PageWithError;
