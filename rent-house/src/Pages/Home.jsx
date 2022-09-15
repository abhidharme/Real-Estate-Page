import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/Navbar'
import { ProductsList } from '../Components/ProductsList/ProductsList'
import { fetch_house_data } from '../Redux/action'

export const Home = () => {

  const { Houses } = useSelector((state) => state.rentsHouses)

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (Houses?.length == 0) {
      let params = {
        Country: searchParams.getAll("Country"),
        price_gte: searchParams.getAll("price_gte"),
        price_lte: searchParams.getAll("price_lte"),
        Property_type: searchParams.getAll("Property_type")
      }
      dispatch(fetch_house_data(params))
    }
  }, [dispatch, Houses?.length, searchParams]);

  return (
    <>
      <div><Navbar /></div>
      <div><ProductsList /></div>
    </>
  )
}
