import React, { Component } from 'react'

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            loading: true
        }
    }
    componentDidMount() {
        fetch(`/api/articles/${this.props.match.params.id}`).then(res=>res.json())
        .then(data=>this.setState({article: data, loading: false}))
    };
    render() {
        const content = this.state.article;
        return (
            this.state.loading ? 'Loading Article and Notes' : 
            <div>
                <h1>{content.title}</h1>
                <p>{content.blurb}</p>
            </div>
        )
    }
}

export default Notes