import React, { useEffect, useState } from 'react';
import { Row, Col, Popconfirm, Button } from 'antd';
import { connect } from 'react-redux';
import Table from "antd/lib/table";

const UserTable = (props) => {
    const { list, onDelete, OnEdit } = props;
    const [data1, setData] = useState([])
    useEffect(() => {
        setData(list)
    }, [list])

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
            title: 'Action',
            dataIndex: 'id',
            render: (text, record, index) => (
                <div>

                    <Button className="btn btn-outline-primary btn-mini" onClick={() => { OnEdit(index) }}>Edit</Button>

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

export default connect(mapStateProps)(UserTable);
