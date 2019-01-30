import React, { Component } from 'react'

import { API } from '../../config'
import Header from '../header/Header'
import Exhibitions from '../exhibitions/Exhibitions'

class App extends Component {
  constructor(){
    super()

    this.handleLoadExhibitions = this.handleLoadExhibitions.bind(this)

    this.state = {
      exhibits: [],
      exhibitions: []
    }
  }


  handleLoadExhibitions = (exhibition) => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${exhibition.id}&page=1&per_page=100`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // this.setState({ exhibits: data.objects })
      })
      .catch(err => console.log(err))
  }

  componentDidMount = () => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=${API.apiKey}&page=1&per_page=100`)
      .then(res => res.json())
      .then(data => {
        this.setState({ exhibitions: data.exhibitions })
      })
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.exhibits)
    const exhibitions = this.state.exhibitions
    let exhibitionsWithProps =
      this.state.exhibitions.length !== 0 ?
        <Exhibitions
          exhibitions={exhibitions}
          onLoadExhibitions={this.handleLoadExhibitions}
        />
      :
        null

    return (
      <div>
        <Header />
        {exhibitionsWithProps}
      </div>
    )
  }
}

export default App
