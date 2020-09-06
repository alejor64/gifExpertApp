import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useFetchGif } from '../hooks/useFetchGif'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGif(category)

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {
                loading && <p className="animate__animated animate__flash">Loading...</p>
            }
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                        ))
                    }
            </div>
        </Fragment>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
