import React from 'react';
import Layout from './src/components/Layout';
import { makeServer } from "./src/graphql/server";

makeServer();

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>

