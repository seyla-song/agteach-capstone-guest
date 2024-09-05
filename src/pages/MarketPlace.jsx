import { Link } from "react-router-dom";

const PRODUCT_DATA = [
  { id: "p1", title: "product 1" },
  { id: "p2", title: "product 2" },
  { id: "p3", title: "product 3" },
];

function MarketPlacePage() {
  return (
    <>
      <h1>Market place page</h1>
      <ul>
        {PRODUCT_DATA.map((pd) => (
          <li key={pd.id}>
            <Link to={`/marketplace/${pd.id}`}>{pd.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MarketPlacePage;