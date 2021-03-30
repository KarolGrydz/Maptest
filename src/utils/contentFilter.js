const contentFilter = (res) => {
  const dataContent = res.response.content.rendered;
  const data = {
    ...res.response,
    content: dataContent.slice(
      dataContent.search('<p>'),
      dataContent.search('</p>') + 4
    ),
  };
  return data;
};

export default contentFilter;
