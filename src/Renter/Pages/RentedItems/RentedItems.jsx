import { useRentedItemsQuery } from "../../../Store/Api/Renter";
import { Header, Footer } from "../Home/Components";
import { EmptyRented } from "./components/EmptyRented";
import { RentedList } from "./components/RentedList";
import { useTitle } from "../../../Hook/useTitle";
export const RentedItems = () => {
    const { data : rentals =[] } = useRentedItemsQuery()

    useTitle("Rented Item")

  return (
    <>
    <Header />

    {
      rentals.length > 0 ? <RentedList /> : <EmptyRented />
    }

    <Footer />
    </>
  )
}
