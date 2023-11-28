


const ProjectCards = (data) => {

 console.log(data.data[0])
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={data.data[0].image} alt="" />

                    <div className=" card-info">
                        <h2>{data.data[0].title}</h2>
                        <p>{data.data[0].description}</p>
                        <button>View</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectCards
