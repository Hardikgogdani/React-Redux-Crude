import React, { useState } from "react";
import { connect } from 'react-redux';
import { UserData } from '../redux';
import { Row, Col, Card, Form, Input, Radio, Button, InputNumber } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';

const UserContainer = (props) => {
    const { UserDatas } = props;
    const [userDetail, setUserDetail] = useState({});
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserDetail({ ...userDetail, [name]: value })
    }

    const onSubmit = () => {

        userDetail.id = data.length + 1;
        data.push(userDetail)
        setData(data)
        UserDatas(userDetail)
        setUserDetail({})

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

                            </Form.Item>

                            <Form.Item>
                                <Input placeholder="Enter Your lastname" name="lastName" value={userDetail.lastName}
                                    onChange={handleChange} addonBefore={(<UserOutlined />)} />

                            </Form.Item>

                            <Form.Item>
                                <Input placeholder="Enter Your EmailId" name="email" value={userDetail.email}
                                    onChange={handleChange} addonBefore={<MailOutlined />} />

                            </Form.Item>

                            <Form.Item>
                                Age : <InputNumber placeholder="age" name="age"
                                    onChange={value => handleChange({ target: { name: "age", value } })}
                                    value={userDetail.age} />

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

                            </Form.Item>

                            <Form.Item>

                                <Input.Password placeholder="Enter Your PassWord" name="password"
                                    value={userDetail.password} onChange={handleChange}
                                    addonBefore={(<LockOutlined />)} />

                            </Form.Item>

                            <Form.Item>
                                <Button className="btn-create-account" onClick={onSubmit}>
                                    Create Account
                                    </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={8} />
            </Row>
        </>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserDatas: (payload) => dispatch(UserData(payload))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);