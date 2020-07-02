import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


export default function GifGrid({ category }) {

    const { images, loading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {
                    images.map(({ id, title, url }) => (
                        <GifGridItem
                            key={id}
                            title={title}
                            url={url}
                        />)
                    )
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
