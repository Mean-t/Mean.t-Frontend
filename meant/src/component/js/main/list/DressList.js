import React, {Component} from 'react';
import '../../../scss/css/dresslist.css'
import { leftArrow, rightArrow } from '../../../image/img';

class DressList extends Component { 
    render() { 
        const { list_prev, list_next } = this.props;
        return (
            <div className="fund-list">
                <ul className="fund-ul">
                    {this.renderList()}
                </ul>
            <img className="list_arrow_left" onClick={list_prev} src={leftArrow} alt="왼쪽 화살표"/>
            <img className="list_arrow_right" onClick={list_next} src={rightArrow} alt="오른쪽 화살표"/>
        </div>
        );
    }
    renderList(){
        const { dresslist } = this.props;
        return dresslist.map(item => (
            <li className="fund-li">
                <div className="fund-li-img_div">
                    <img className="fund-li-img" src={this.props.image} alt={item.image_alt}/>
                </div>
                <span className="fund-text">{item.text}</span>
            </li>
        ))
    }
}
 
export default DressList;