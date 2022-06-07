import React from 'react';

const Profile = () => {
    return (
        <section className='flex flex-col px-20 py-5'>
            <div className='flex items-center'>
                <div className=''>
                    <img className='w-20 h-20 rounded-full' src="https://api.lorem.space/image/face?hash=40361" alt="" />
                </div>
                <div className='ml-5'>
                    <h2 className=' font-bold text-2xl'>Hi, Mike</h2>
                    <p className='text-gray-600'>Welcome Back!!</p>
                </div>
            </div>
            <div className='mt-5'>
                <h4 className='text-base font-semibold my-3'>Today</h4>
                <div>
                    <h1 className='font-extrabold text-gray-900 text-2xl'>$19,850</h1>
                    <p className='text-sm text-gray-500'>Account balance</p>
                </div>
                <div className='mt-2'>
                    <h3 className='font-bold text-gray-900 text-lg'>$4,000</h3>
                    <p className='text-sm text-gray-500'>Year-to-date Contribution</p>
                </div>
                <div className='mt-2'>
                    <h3 className='font-bold text-gray-900 text-lg'>$1,892</h3>
                    <p className='text-sm text-gray-500'>Total Interest</p>
                </div>
            </div>
            <select className='outline-none w-28 bg-indigo-700 px-2 py-2 font-semibold mt-2 text-white rounded-lg'>
                <option disabled selected> I Want to</option>
                <option>Option 1</option>
                <option>Option 2</option>
            </select>

            <div>
                <h4 className='text-base font-semibold mt-10'>Recent Transactions</h4>
                <div className='pt-5'>
                    <p className='text-sm text-gray-500'>2020-8-7</p>
                    <h4 className='text-sm font-semibold'>withdrawal transfer to Bank-xxx1</h4>
                </div>
                <div className='pt-5'>
                    <p className='text-sm text-gray-500'>2020-8-7</p>
                    <h4 className='text-sm font-semibold'>withdrawal transfer to Bank-xxx1</h4>
                </div>
                <div className='pt-5'>
                    <p className='text-sm text-gray-500'>2020-8-7</p>
                    <h4 className='text-sm font-semibold'>withdrawal transfer to Bank-xxx1</h4>
                </div>
            </div>
        </section>
    );
};

export default Profile;