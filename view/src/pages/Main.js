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
    grabArticles() {
        fetch('/api/articles').then(res=>res.json())
        .then(data=>this.setState({ articles: data, loading: false }))
    }
    componentDidMount() {
        this.grabArticles();
    };
    componentDidUpdate() {
        this.grabArticles();
    }
    render() {
        return (
            <Fragment>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '968px'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '1em'
                    }}>
                        <button onClick={() => fetch('/grab').then(response => response.text())
                        .then(data => this.setState({ loading: true}))}>Grab New Articles</button>
                    </div>
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
                </div>
            </Fragment>
        )
    }

}

export default Main