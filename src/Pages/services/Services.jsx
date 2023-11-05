import React, { useState } from 'react';
import useAxios from '../../hook/useAxios';
import { useQuery } from '@tanstack/react-query';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [price, setprice] = useState(''); // Initialize the "price" state
    console.log(price)
    const axios = useAxios();

    const getservices = async () => {
        const res = await axios.get(`/services/?sortfield=price&sortorder=${price}`);

        return res;

    }

    // Queries
    const { data: services, isLoading, isError, error } = useQuery({
        queryKey: ['service', price],
        queryFn: getservices
    });

    if (isLoading) {
        return <p>loading.......</p>
    }
    if (isError) {
        return <p>something went wrong: {error}</p>
    }

    return (
        <div className="w-full m-auto max-w-[1200px]">
            <div className="text-center">
                <h1 className="text-5xl font-bold mt-9 mb-4">Services</h1>
                <p>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
                    nobis excepturi delectus, ab id provident, voluptas iste ullam
                    repellendus animi eos perspiciatis cumque. Quod sit laboriosam deleniti
                    atque explicabo esse.</p>
            </div>
            <div className="my-9">
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <select
                        className="input input-bordered"
                        onChange={(e) => setprice(e.target.value)}
                        value={price} // Set the selected value of the dropdown to "price"
                    >
                        <option disabled value="">choose</option>
                        <option value="asc">low to high</option>
                        <option value="desc">high to low</option>
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    {/* Service Cards go here */}
                    {services?.data?.result?.map(item => (
                        <ServiceCard key={item._id} service={item}>{item.name}</ServiceCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
