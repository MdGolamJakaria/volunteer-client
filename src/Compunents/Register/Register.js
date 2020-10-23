import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import MaterialUIInput from "@material-ui/core/Input";
import { Input as AntdInput } from "antd";
import LogoHeader from '../LogoHeader/LogoHeader';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { control, handleSubmit } = useForm();
    const { id } = useParams()

    const [eventByKey, setEventByKey] = useState(null)

    console.log(eventByKey)

    useEffect(() => {
        fetch("http://localhost:5000/event/" + id)
            .then(res => res.json())
            .then(data => {
                setEventByKey(data)
            })
    }, [])

    const onSubmit = data => {
        fetch('http://localhost:5000/addUsers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Registation Complete Successfully')
                }
            })
    };



    return (
        <div className="container">
            <LogoHeader></LogoHeader>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 className='text-center'>Register as a volunteer</h2>
                    {
                        eventByKey &&
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className='d-block'>First Name</label>
                            <Controller
                                className='form-control'
                                as={AntdInput}
                                name="fastName"
                                control={control}
                                defaultValue={loggedInUser.name}
                            />
                            <label className='d-block'>Email</label>
                            <Controller
                                className='form-control'
                                as={AntdInput}
                                name="email"
                                control={control}
                                defaultValue={loggedInUser.email}
                            />
                            <label className='d-block'>Date</label>
                            <Controller
                                className='form-control'
                                type='date'
                                as={AntdInput}
                                name="date"
                                control={control}
                                defaultValue=""
                            />
                            <label className='d-block'>Description</label>
                            <Controller
                                className='form-control'
                                as={AntdInput}
                                name="description"
                                control={control}
                                defaultValue=""
                            />
                            <label className='d-block '>Organize books at the library </label>
                            <Controller
                                className='d-block form-control'
                                as={AntdInput}
                                name="library"
                                control={control}
                                defaultValue={eventByKey.eventName}
                            />
                            <br />
                            <input className='btn btn-primary form-control' type="submit" />
                        </form>
                    }

                </div>
            </div>
        </div>
    );
};

export default Register;