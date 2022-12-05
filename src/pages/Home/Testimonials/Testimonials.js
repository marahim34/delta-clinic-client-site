import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';


const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: "Cheryl Jansen",
            review: "Kelsey, who took my call and made the appointment for me, was both helpful and efficient. She explained exactly what would happen and put me at ease. Doctor Ayesha was very thorough with her examination. She was caring and offered me very good advice.",
            location: 'Texas',
            img: people1
        },
        {
            _id: 2,
            name: "Jackson Hights",
            review: "I had attended the Delta clinic and the service I received was superb. The staff was very helpful, efficient and professional. I would highly recommend to visit Delta Clinic.",
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: "Marie Kelly",
            review: "Excellent experience from reception to clinician. After a long period of time of avoiding dentists I had to attend with a cracked tooth. A thorough examination x rays and a temp filling all provided on the day. I was reassured and a full explanation of a treatment plan and costs was discussed in detail. I would highly recommend.",
            location: 'Texas',
            img: people3
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className=''>What Our Patients Say</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(reviewCard => <Review key={reviewCard._id} reviewCard={reviewCard}></Review>)
                }
            </div>

        </section>
    );
};

export default Testimonials;