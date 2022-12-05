import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {

    const serviceInfo = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'At our clinic, we offer professional fluoride treatments for children, who are often at higher risk for cavities. ',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Teeth are filled because of cavities, cracked old fillings, worn down teeth and eroded enamel.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'During the assessment, we map the condition of the teeth and gums for whitening and select the best suited whitening technique.',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-primary uppercase text-xl font-bold'>Our Services</h3>
                <h2 className='text-3xl font-bold'>Our Services</h2>
            </div>
            <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceInfo.map(service => <ServiceCard key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;