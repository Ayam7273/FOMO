const GetDate = () => {
  const getDate = new Date();

  return (
    <h2>
      {getDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
    </h2>
  );
};

export default GetDate;
