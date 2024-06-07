import React from 'react';
import { useFormik } from 'formik';

function MainForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            course: 1
        },
        onSubmit: async (values) => {
            console.log(values);
            try {
                const response = await fetch('https://albacademy.liara.run/api/prereg/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                    
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                alert(`Success: ${JSON.stringify(result, null, 2)}`);
            } catch (error) {
                alert(`Error: ${error}`);
            }
        },
    });

    return (
        <section className='parallax-img shadow-custom1'>
            <div className='container mx-auto mt-10 xl:mt-20 py-10'>
                <h2 className='mb-5 xl:mb-[50px] text-center font-MorabbaMedium text-white'>
                    برای مشاوره رایگان فرم زیر را پر کنید یا زنگ بزنید.
                </h2>
                <div className='flex flex-col xl:flex-row gap-5'>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />

                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />

                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default MainForm;
