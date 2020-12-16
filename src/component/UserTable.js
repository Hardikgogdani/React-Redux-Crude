import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import Table from "antd/lib/table";

const UserTable = (props) => {
    const { data } = props;

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
        }
    ]


    return (
        <>
            <h3 id="user-id">Users Detail</h3>

            <Row>
                <Col span={4} />
                <Col span={16} className="mt-3">
                    <Table
                        columns={columns}
                        dataSource={data || []}
                        pagination={{ pageSize: 5 }}
                    />
                </Col>
            </Row>

        </>
    );
}

const mapStateProps = (state) => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateProps, mapDispatchToProps)(UserTable);
