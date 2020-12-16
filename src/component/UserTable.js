import React, { useEffect, useState } from 'react';
import { UserDelete } from '../redux';
import { Row, Col, Popconfirm, Button } from 'antd';
import { connect } from 'react-redux';
import Table from "antd/lib/table";

const UserTable = (props) => {
    const { list, userDelete } = props;
    const [data1, setData1] = useState()
    useEffect(() => {
        setData1(list)
    }, [list, userDelete])

    const onDelete = (id) => {
        userDelete(id);
    }

    const onEdit =(redord)=>{

    }
    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',

        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',

        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',

        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Action',
            dataIndex: 'id',
            render: (text, record) => (
                <div>

                    <Button className="btn btn-outline-primary btn-mini" onConfirm={() => { OnEdit(record.id) }}>Edit</Button>

                    &nbsp;&nbsp;
                    <Popconfirm title="Are you sure to Delete？" onConfirm={() => { onDelete(record.id) }} >
                        <Button className="btn btn-outline-danger btn-mini"  >Delete</Button>
                    </Popconfirm>
                </div>
            )
        },
    ]


    return (
        <>
            <h3 id="user-id">Users Detail</h3>

            <Row>
                <Col span={4} />
                <Col span={16} className="mt-3">
                    <Table
                        columns={columns}
                        dataSource={data1 || []}
                        pagination={{ pageSize: 5 }}
                    />
                </Col>
            </Row>

        </>
    );
}

const mapStateProps = (state) => {
    return {
        list: state.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userDelete: (payload) => dispatch(UserDelete(payload))
    }
}

export default connect(mapStateProps, mapDispatchToProps)(UserTable);
