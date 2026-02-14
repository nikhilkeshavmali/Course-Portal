import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  return <div>Product ID: {id}</div>;
}