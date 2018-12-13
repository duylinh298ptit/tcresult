import React from "react";
import { Link } from "gatsby";
import { Button, Table } from "antd";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

const columns = [
  { title: "tc_id", dataIndex: "tc_id", key: "tc_id" },
  {
    title: "test_viewpoint",
    dataIndex: "test_viewpoint",
    key: "test_viewpoint"
  },
  { title: "username", dataIndex: "username", key: "username" },
  { title: "password", dataIndex: "password", key: "password" },
  {
    title: "expected_result",
    dataIndex: "expected_result",
    key: "expected_result"
  },
  { title: "actual_result", dataIndex: "actual_result", key: "actual_result" },
  { title: "tester", dataIndex: "tester", key: "tester" },
  { title: "date", dataIndex: "date", key: "date" },
  { title: "Attachment", dataIndex: "Attachment", key: "Attachment" }
  // {
  //   title: "Name",
  //   dataIndex: "username",
  //   key: "name"
  // },
  // {
  //   title: "Age",
  //   dataIndex: "age",
  //   key: "age"
  // },
  // {
  //   title: "Address",
  //   dataIndex: "address",
  //   key: "address"
  // }
];

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allTcResultCsv {
          edges {
            node {
              tc_id
              test_viewpoint
              username
              password
              expected_result
              actual_result
              tester
              date
              Attachment
            }
          }
        }
      }
    `}
    render={({ allTcResultCsv }) => {
      const data = allTcResultCsv.edges;
      const dataS = data.map(e => ({
        ...e.node,
        key: e.node.tc_id
      }));

      return (
        <Layout>
          <Table
            size="small"
            style={{ width: 1000 }}
            dataSource={dataS}
            columns={columns}
          />
        </Layout>
      );
    }}
  />
);

export default IndexPage;
