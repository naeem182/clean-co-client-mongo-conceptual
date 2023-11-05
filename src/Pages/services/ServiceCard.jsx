import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
    const { _id, name, description, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title text-center">{name}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <div className=" justify-end w-full">
                    <Link to={`/booking/${_id}`}>
                        <button className="w-full btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
