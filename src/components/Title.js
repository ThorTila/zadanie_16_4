import React from 'react';
import style from './components.css';

class Title extends React.Component {
    render() {
        return (
            <h1 className={style.TodoTitle}>To Do: {this.props.data.length}</h1>
        );
    }
}

export default Title;