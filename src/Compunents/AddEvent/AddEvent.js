import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from "antd";
import LogoHeader from '../LogoHeader/LogoHeader';
import TextArea from 'antd/lib/input/TextArea';
import { Redirect } from 'react-router-dom';

const AddEvent = () => {

    const { control, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/addEvents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Event added successfully')
                }
            })

    };


    return (
        <div className="container">
            <LogoHeader></LogoHeader>
            <br />
            <br />
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 className='text-center text-uppercase'>Add Event</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='d-block'>Event Title</label>
                        <Controller
                            className='form-control'
                            as={AntdInput}
                            name="eventName"
                            control={control}
                            defaultValue=""
                        />
                        <label className='d-block'>Event Date</label>
                        <Controller
                            className='form-control'
                            type='Date'
                            as={AntdInput}
                            name="eventDate"
                            control={control}
                            defaultValue=""
                        />
                        <label className='d-block'>Description</label>
                        <Controller
                            className='form-control'
                            type='textArea'
                            as={TextArea}
                            name="description"
                            control={control}
                            defaultValue=""
                        />
                        <label className='d-block'>Banner</label>
                        <Controller
                            className='form-control'
                            type='link'
                            as={AntdInput}
                            name="image"
                            control={control}
                            defaultValue=""
                        />

                        <br />
                        <input className='btn btn-primary form-control' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;