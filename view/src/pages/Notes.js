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
        .then(data=>{
            console.log(data);
            return this.setState({article: data, loading: false})
        })
    };
    render() {
        const content = this.state.article;
        return (
            this.state.loading ? 'Loading Article and Notes' : 
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '968px'
            }}>
                <h1>{content.title}</h1>
                <p>{content.blurb}</p>
                <div>
                    <img src={content.image} alt="From KUT" />
                </div>
                <form></form>
            </div>
        )
    }
}

export default Notes