import React, { useState } from 'react'
import useAxios from '../../hook/useAxios';
import { useQuery } from '@tanstack/react-query';
import ServiceCard from './ServiceCard';

const Services = () => {
    // const [services, setservices] = useState([]);
    const axios = useAxios();

    const getservices = async () => {
        const res = await axios.get('/services');
        return res;
    }
    // Queries
    const { data: services, isLoading, isError, error } = useQuery({
        queryKey: ['service'],
        queryFn: getservices
    })

    console.log(services)
    if (isLoading) {
        return <p>loading.......</p>
    }
    if (isError) {
        return <p>something went wrong:{error}</p>
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
            <div className='my-9'>
                <div className="grid grid-cols-3 gap-10">
                    {/* Service Cards goes here */}
                    {
                        services?.data?.map(item => (
                            <ServiceCard key={item.id} service={item}>{item.name}</ServiceCard>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Services
