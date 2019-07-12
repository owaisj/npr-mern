import React, {Component} from 'react'

const styles = {
    head: {
        backgroundColor: 'black',
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoA: {
        color: 'red'
    },
    logoB: {
        color: 'white'
    }
}


class Header extends Component {
    render() {
        return (
            <div style={styles.head}>
                <h1>
                    <span style={styles.logoA}>KUT</span> <span style={styles.logoB}>Scraper</span>
                </h1>
            </div>
        )
    }
}

export default Header