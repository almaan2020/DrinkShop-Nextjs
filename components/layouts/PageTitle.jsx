const PageTitle = (props) => {
  const { title } = props;
  return (
    <div className="row justify-content-center">
      <h4>{title}</h4>
    </div>
  );
};

export default PageTitle;
