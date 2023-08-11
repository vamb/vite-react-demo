import React from 'react'
import axios from 'axios'

const widthFetch = (Component, url) =>{
  return class WidthFetchComponent extends React.Component {
    state = {
      list: []
    }

    async componentDidMount() {
      const {data: list} = await axios.get(url)
      this.setState({list: list})
    }
    render() {
      return <Component {...this.props} list={this.state.list} />
    }
  }
}

export default widthFetch