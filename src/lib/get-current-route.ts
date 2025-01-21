import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const currentRoute = req.url || '';

    return {
        props: {
            currentRoute,
        },
    };
};
