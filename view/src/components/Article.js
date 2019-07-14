import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

// const styles = {
//     wrapper: {},
//     title: {},
//     blurb: {},
//     image: {},
//     link: {}
// }

class Article extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            authorLink: '',
            authorName: '',
            blurb: '',
            link: '',
            loading: true
        }
    }
    componentDidMount() {
        fetch(`/api/articles/${this.props.id}`).then(res => res.json())
        .then(data => {
            const article = data;
            return this.setState({
                id: article._id,
                title: article.title,
                link: article.link,
                authorLink: article.authorLink,
                authorName: article.authorName,
                blurb: article.blurb,
                loading: false
            })
        })
    }
    render() {
        return (
            <Fragment>
                {this.state.loading ? <p>Loading Article #{this.props.num}</p> :
                    <div>
                        <h1>{this.state.title}</h1>
                        <p>{this.state.blurb}</p>
                        <p>
                            <a href={this.state.link} target="_blank" rel="noopener noreferrer">
                                View Article
                            </a>
                        </p>
                        <p>
                            <Link to={'/notes/' + this.state.id}>
                                View Notes
                            </Link>
                        </p>
                        <span>
                            Written by <a href={this.state.authorLink} target="_blank" rel="noopener noreferrer">{this.state.authorName}</a>
                        </span>
                    </div>
                }
            </Fragment>
        )
    }
}

export default Article