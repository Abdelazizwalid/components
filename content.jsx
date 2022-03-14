import React, { Component } from 'react';
import "./content.css"; 
import "./board.jpg";
import "./zizo.png";
class Content extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='info'>
                    <button className='slid'> &lt; </button> 
                    <span className='contentspan'>  B-est way to get your medicienes </span> 
                    <button className='slid' > &gt; </button> 

                    <p style={{color:"black",fontSize:"25px"}}>Who is BOND</p>
                    <p style={{color:"darkblue",fontSize:"20px"}}>We’re  an Egyptian company that want to rescue medical industry 
                        from exploitation and collapse </p>
                        <span style={{fontSize:"25px"}}>Why We Are Different</span>
                        <div className='row'>
                            <div className='column' >
                                <img src='https://thumbs.dreamstime.com/b/icon-board-member-board-229810956.jpg' className='contentimg'></img>
                                <p className='main_p'>In-board staff</p>
                                <p className='sub_p'>You are our client so you're progress is our responsability. </p>
                            </div>
                            <div className='column' >
                                <img src='https://static.thenounproject.com/png/970315-200.png' className='contentimg'></img>
                                <p className='main_p'> Reputation Management</p>
                                <p className='sub_p2'> reputation is everything. We enhance,
                                                        defend and protect the reputation 
                                                        of some of the most respected </p>
                            </div>
                            <div className='column'>
                                <img src='https://static.thenounproject.com/png/17426-200.png' className='contentimg'></img>
                                <p className='main_p'>Bundles</p>
                                <p>We offer you everything
                                    you need in one place. 
                                    Save your time and effort</p>
                                    
                            </div>
                            <hr className='hr_content'></hr>

                        </div>

                </div>




            </React.Fragment>
        );
    }
}

export default Content;