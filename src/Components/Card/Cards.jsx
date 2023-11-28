import cardsData from './CardsData'
import ProjectCards from './ProjectCards'
const Cards = () => {
    console.log(cardsData)
  return (
    <>
    <h1>adotya bvadks</h1>
        <ProjectCards
       data={cardsData}

        />

    </>
  )
}
export default Cards