import React from "react";

function Carousel({image1, image2, image3, image4}) {
    console.log(image1)
    // const imageArray = [image1, image2, image3, image4]

    // const createImages = imageArray.map((image, index) => (
    //     <div key={`image ${index}`} className="carousel-item active relative float-left w-full">
    //         <img
    //             src={image}
    //             className="block w-full"
    //             alt={`image ${index}`}
    //         />
    //     </div>
    //     )
    // )

    return (
        <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full overflow-hidden">
               <img src={image1}/>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        )
}

export default Carousel