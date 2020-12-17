import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import UserTable from './UserTable';
import { Row, Col, Card, Form, Input, Radio, Button, InputNumber } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';

const UserContainer = (props) => {
    const { list, dispatch } = props;

    const [userDetail, setUserDetail] = useState({});
    const [editableIndex, setIndex] = useState(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState({});

    useEffect(() => {
        setData(list)
    }, [list])

    const onDelete = (id) => {
        dispatch({ type: "User_Delete", payload: id })
    }

    const OnEdit = (index) => {
        setUserDetail(data[index])
        setIndex(index)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetail({ ...userDetail, [name]: value })
    }

    const validate = (name, value) => {
        const emailRegx = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/ig;
        const numRegx = /^\d{1,6}(?:\.\d{0,2})?$/g;
        switch (name) {
            case 'firstName':
                if (!value) return "First Name is required";
                return null;
            case 'lastName':
                if (!value) return "Last Name is required";
                return null;
            case 'email':
                if (!emailRegx.test(value)) return "Email is required";
                return null;
            case 'age':
                if (!numRegx.test(value)) return "Age is required";
                return null;
            case 'gender':
                if (!value) return "Gender is required";
                return null;
            case 'password':
                if (!value) return "Password is required";
                return null;
            default:
                return null;
        }
    };
    const onSubmit = () => {
        let errorObj = {}
        const newsUerDetail = {
            firstName: userDetail.firstName,
            lastName: userDetail.lastName,
            email: userDetail.email,
            age: userDetail.age,
            gender: userDetail.gender,
            password: userDetail.password
        }

        Object.keys(newsUerDetail).forEach((key) => {
            const error = validate(key, newsUerDetail[key]);
            if (error && error.length) {
                errorObj[key] = error;
            }
        });
        if (Object.keys(errorObj).length) {
            return setError(errorObj);
        } else {
            if (editableIndex !== null) {
                dispatch({ type: "User_Update", payload: userDetail })
                setIndex(null)
                setUserDetail({}) 
            } else {
                userDetail.id = data.length + 1;
                dispatch({ type: "User_Data", payload: userDetail })
                setIndex(null)
                setUserDetail({})
            }

        }
    }


    return (
        <>
            <Row style={{ marginTop: 100 }}>
                <Col span={8} />
                <Col span={8}>
                    <Card>
                        <h2 style={{ textAlign: "center" }}>Registration Form</h2>
                        <p style={{ textAlign: "center" }}>Creat Your Account</p><br />
                        <Form>
                            <Form.Item>
                                <Input placeholder="Enter Your firstname" name="firstName"
                                    value={userDetail.firstName}
                                    onChange={handleChange} addonBefore={(<UserOutlined />)} />
                                <span className="danger">{error.firstName || ""}</span>
                            </Form.Item>

                            <Form.Item>
                                <Input placeholder="Enter Your lastname" name="lastName" value={userDetail.lastName}
                                    onChange={handleChange} addonBefore={(<UserOutlined />)} />
                                <span className="danger">{error.lastName || ""}</span>
                            </Form.Item>

                            <Form.Item>
                                <Input placeholder="Enter Your EmailId" name="email" value={userDetail.email}
                                    onChange={handleChange} addonBefore={<MailOutlined />} />
                                <span className="danger">{error.email || ""}</span>
                            </Form.Item>

                            <Form.Item>
                                Age : <InputNumber placeholder="age" name="age"
                                    onChange={value => handleChange({ target: { name: "age", value } })}
                                    value={userDetail.age} />
                                <span className="danger">{error.age || ""}</span>
                            </Form.Item>

                            <Form.Item>

                                Gender: <Radio.Group name="gender" onChange={e => handleChange({
                                target: {
                                    name: "gender",
                                    value: e.target.value
                                }
                            })} value={userDetail.gender}>
                                    <Radio value="Male">Male</Radio>
                                    <Radio value="Female">Female</Radio>
                                    <Radio value="Other">Other</Radio>
                                </Radio.Group>
                                <span className="danger">{error.gender || ""}</span>
                            </Form.Item>

                            {
                                editableIndex !== null || (
                                    <Form.Item>
                                        <Input.Password placeholder="Enter Your PassWord" name="password"
                                            value={userDetail.password} onChange={handleChange}
                                            addonBefore={(<LockOutlined />)} />
                                        <span className="danger">{error.password || ""}</span>
                                    </Form.Item>
                                )
                            }
                            {
                                editableIndex !== null ? (
                                    <Form.Item>

                                        <Button className="btn-create-account" onClick={onSubmit}>
                                            Edit
                                    </Button>
                                    </Form.Item>
                                ) : (<Form.Item>

                                    <Button className="btn-create-account" onClick={onSubmit}>
                                        Submit
                                </Button>
                                </Form.Item>)
                            }

                        </Form>
                    </Card>
                </Col>
                <Col span={8} />
            </Row>
            <UserTable OnEdit={OnEdit} onDelete={onDelete} />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        list: state.data
    }

}

export default connect(mapStateToProps)(UserContainer);