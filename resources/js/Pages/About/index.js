import React from 'react';

import Layout from './../Layout';

const About = ({title}) => {
    return (
        <Layout title={title}>
            <h1>About Page</h1>

            <p>Esta é a página falando sobre a empresa.</p>
        </Layout>
    );
}

export default About;
