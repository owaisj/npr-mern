import React, { Component, Fragment } from 'react'
import Article from '../components/Article'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true
        }
    }
    componentDidMount() {
        fetch('/api/articles').then(res=>res.json())
        .then(data=>this.setState({ articles: data, loading: false }))
    };
    render() {
        return (
            <Fragment>
                {this.state.loading ? 
                    <h1>Loading...</h1> :
                    this.state.articles.map((item, index) => {
                        return <Article 
                            key={index}
                            num={index+1}
                            id={item._id}
                        />
                    })
                }
            </Fragment>
        )
    }

}

export default Main