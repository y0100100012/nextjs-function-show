'use strict'

import React from 'react'
import styles from './index.module.css'

class Index extends React.Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.setState({count: 5});
    }
    render() {
        return (
            <div className={styles.lineVenTitleLine}>
                <div className={styles.lineVenName}>
                    {this.state.count}
                </div>
                <button className={styles.lineAddButton} onClick={() => this.setState({count: this.state.count + 1})}>点击+1</button>
            </div>
            
        )
    }
}

export default Index