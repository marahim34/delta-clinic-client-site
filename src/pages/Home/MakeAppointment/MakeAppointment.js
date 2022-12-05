import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="-mt-32 hidden sm:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl font-bold text-white">Make and Appointment Today</h1>
                        <p className="py-6 text-white">You can book an appointment at the dental clinic or for dental x-rays by calling 00-094850857 Mon–Fri, 9–17. The urgency of your need for treatment is assessed during the call.
                            <br />
                            <br />
                            In non-urgent matters, you can leave a call-back request Mon–Fri, 9–12. Call-back requests will be returned as soon as possible.
                            <br />
                            <br />
                            Notice! Delta clinic clients over 18 years of age can book an appointment by calling 0900 0990 Mon–Thu, 9–16 and Fri, 8–15. You can leave a call-back request at this number.</p>
                        <PrimaryButton>Make an Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;