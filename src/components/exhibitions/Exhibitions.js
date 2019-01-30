import React, { Component } from 'react'

import './Exhibitions.css'
import preloaderImage from './cooperhewitt.jpg'

class Exhibitions extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.exhibitions)

        this.state = {
            images: []
        }
    }


    // fetchData = () => {
    //     fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getRandom&access_token=21313fcea367520d564f1b69b4b0b6cf&has_image=1`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.object)
    //     })
    //     .catch(err => console.log(err))
    // }

    // componentDidMount = () => {
    //     this.fetchData()
    // }

    render() {

        // const exhibitions = this.props.exhibitions.map(exhibition => {
        //     return (
        //         <ExhibitionCard
        //           key={exhibition.id}
        //           id={exhibition.id}
        //           title={exhibition.title}
        //           text={exhibition.text}
        //           start={exhibition.date_start}
        //           end={exhibition.date_end}
        //           onDetailsClick={() => this.props.onDetailsClick(exhibition)}
        //         />
        //     )
        //   })

        return (
            <div className="row">
                <div className="col m4">
                    <div className="card small">
                        <div className="card-image">
                            <img src={preloaderImage} alt="" onLoad={() => console.log('loaded')} />
                        </div>
                        <div className="card-content">
                            <h1>Hello Sucka</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exhibitions
