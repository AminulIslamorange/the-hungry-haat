import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{

        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <section>
        <SectionTitle heading={'TESTIMONIALS'} subHeading={'---What Our Clients Say---'}></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


{reviews.map(review=><SwiperSlide key={review._id} review={review}>
    <div className="flex flex-col items-center mx-24 my-16">
    <Rating
style={{ maxWidth: 180 }}
value={review.rating}
readOnly
/>
        <p className="py-8">{review.details}</p>
        <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
    </div>


</SwiperSlide>)}

</Swiper>
    </section>
    );
};

export default Testimonials;