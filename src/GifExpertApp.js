import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <Fragment>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp