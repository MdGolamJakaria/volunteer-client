import React from 'react';
import { useForm, Controller } from "react-hook-form";
import MaterialUIInput from "@material-ui/core/Input";
import { Input as AntdInput } from "antd";
import LogoHeader from '../LogoHeader/LogoHeader';

const Register = () => {

    const { control, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };



    return (
        <div className="container">
            <LogoHeader></LogoHeader>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 className='text-center'>Register as a volunteer</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='d-block'>First Name</label>
                        <Controller
                            className='form-control'
                            as={AntdInput}
                            name="fastName"
                            control={control}
                            defaultValue=""
                        />
                        <label className='d-block'>Email</label>
                        <Controller
                            className='form-control'
                            as={AntdInput}
                            name="email"
                            control={control}
                            defaultValue=""
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

export default Register;