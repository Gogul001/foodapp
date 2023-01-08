import React from 'react'
import Layout from '../../components/layout'

export default function Pizza({pizza}) {
  return (
    <Layout>
      </Layout>
  )
};


export const getServerSideProps = async () => {
  const query = '*[_type == "Pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas
    }
  }
}