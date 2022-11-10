export default function ProductList() {
  let result = [];
  productData.forEach((i) => {
    result.push(<ProductInfo item={i} key={i.id} />);
  });
  return <ul>{result}</ul>;
}
