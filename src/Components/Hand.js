import React from 'react';
import Card from "./Card"
import { Column, Row } from 'simple-flexbox';
class Hand extends React.Component{

    render(){
        const handStyle = { //Absolute position of hand for now maybe later make it everything relative for smaller or larger screens
            position: 'absolute', //Also find out what flexGrow{1} is
            top : 550,
            left: 200
        }
        return(
        <>
            <Column style = {{...handStyle, ...this.props.style}}>
                <Row>
                    <Card onMouseEnter = {this.props.onMouseEnter} onDragStart = {this.props.onDragStart} onDragEnd = {this.props.onDragEnd} cardInfo = {this.props.handCardInfo[0]}
                     onDrop = {this.props.onDrop} onDragOver = {this.props.onDragOver} index={"H0"}/>
                    <Card onMouseEnter = {this.props.onMouseEnter} onDragStart = {this.props.onDragStart} onDragEnd = {this.props.onDragEnd} cardInfo = {this.props.handCardInfo[1]} 
                     onDrop = {this.props.onDrop} onDragOver = {this.props.onDragOver} index={"H1"}/>
                </Row>
                <Row>
                    <Card onMouseEnter = {this.props.onMouseEnter} onDragStart = {this.props.onDragStart} onDragEnd = {this.props.onDragEnd} cardInfo = {this.props.handCardInfo[2]} 
                     onDrop = {this.props.onDrop} onDragOver = {this.props.onDragOver} index={"H2"}/>
                    <Card onMouseEnter = {this.props.onMouseEnter} onDragStart = {this.props.onDragStart} onDragEnd = {this.props.onDragEnd} cardInfo = {this.props.handCardInfo[3]}
                     onDrop = {this.props.onDrop} onDragOver = {this.props.onDragOver} index={"H3"}/>
                </Row>
                <Row>
                    <Card onMouseEnter = {this.props.onMouseEnter} onDragStart = {this.props.onDragStart} onDragEnd = {this.props.onDragEnd} cardInfo = {this.props.handCardInfo[4]} 
                     onDrop = {this.props.onDrop} onDragOver = {this.props.onDragOver} index={"H4"}/>
                    <Card onMouseEnter = {this.props.onMouseEnter} onDragStart = {this.props.onDragStart} onDragEnd = {this.props.onDragEnd} cardInfo = {this.props.handCardInfo[5]}
                     onDrop = {this.props.onDrop} onDragOver = {this.props.onDragOver} index={"H5"}/>
                </Row>
            </Column>
        </>
        )
    }
}
export default Hand;