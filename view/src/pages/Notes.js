import React, { Component } from 'react'

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            loading: true,
            notes: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const bodyData = {
            title: data.get('title'),
            body: data.get('body')
        }
        fetch(`/api/articles/${this.props.match.params.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        }).then(res => res.json())
        .then(data => this.grabArticle());
    }
    grabArticle() {
        fetch(`/api/articles/${this.props.match.params.id}`).then(res=>res.json())
        .then(data=>{
            if (data.note) {
                return this.setState({article: data, loading: false, notes: true})
            } else {
                return this.setState({article: data, loading: false})
            }
        })
    }
    componentDidMount() {
        this.grabArticle();
    };
    componentDidUpdate() {
        this.grabArticle();
    }
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

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '75%',
                    padding: '1em'
                }}>
                    <form style={{ margin: '1em'}} onSubmit={this.handleSubmit}>
                        <p>
                            Title
                        </p>
                        <input id="title" name="title" />
                        <p>
                            Message
                        </p>
                        <input id="body" name="body" />
                        <br />
                        <button>Update Note</button>
                    </form>
                    {this.state.notes ? 
                        <div style={{ margin: '1em'}} >
                            <h1>
                                {content.note.title}
                            </h1>
                            <p>
                                {content.note.body}
                            </p>
                        </div>
                    : <div style={{ margin: '1em'}}>There are no notes!</div>}
                </div>
            </div>
        )
    }
}

export default Notes