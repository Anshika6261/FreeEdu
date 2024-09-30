import React from 'react';
import '../StyleSheet/Landing.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Math from "./math.png";
import Science from "./science.png";
import personalizedLearning from "./personalizedLearning.png";
import court from "./court.png";
import increse from "./increase.png";
import teacher from "./teacher.png";
import student from "./student.png";
import leaner from "./leaner.png";

export default function Landing(){
    return(
        <div style={{backgroundColor:"black", color:'white'}}>
            <div className="section-1">
                <div className="left">
                    <h3><img src={Math} style={{width:"30px",height:"30px",paddingRight:"5px"}}/>Math (NCERT)</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td>Class 1</td>
                            <td>Class 8</td>
                        </tr>
                        <tr>
                            <td>Class 2</td>
                            <td>Class 9</td>
                        </tr>
                        <tr>
                            <td>Class 3</td>
                            <td>Class 10</td>
                        </tr>
                        <tr>
                            <td>Class 4</td>
                            <td>Class 11</td>
                        </tr>
                        <tr>
                            <td>Class 5</td>
                            <td>Class 12</td>
                        </tr>
                        <tr>
                            <td>Class 6</td>
                            <td>Broad Prep</td>
                        </tr>
                        <tr>
                            <td>Class 7</td>

                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <h3><img src={Math} style={{width:"30px",height:"30px",paddingRight:"5px"}}/>Math Foundation</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td>Class 6</td>
                            <td>Class 9</td>
                        </tr>
                        <tr>
                            <td>Class 7</td>
                            <td>Class 10</td>
                        </tr>
                        <tr>
                            <td>Class 8</td>

                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <h3><img src={Math} style={{width:"30px",height:"30px",paddingRight:"5px"}}/>Math (Maharastra)</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td>Class 1</td>
                            <td>Class 6</td>
                        </tr>
                        <tr>
                            <td>Class 2</td>
                            <td>Class 7</td>
                        </tr>
                        <tr>
                            <td>Class 3</td>
                            <td>Class 8</td>
                        </tr>
                        <tr>
                            <td>Class 4</td>
                            <td>Class 9</td>
                        </tr>
                        <tr>
                            <td>Class 5</td>
                            <td>Class 10</td>
                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                </div>
                <div className="right">
                    <h3><img src={Science} style={{width:"30px",height:"30px",paddingRight:"5px"}}/>Science (NCERT)</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td>Class 9 Phy</td>
                            <td>Class 11 Phy - Hinglish</td>
                        </tr>
                        <tr>
                            <td>Class 9 Chem</td>
                            <td>Class 11 Chem</td>
                        </tr>
                        <tr>
                            <td>Class 9 Bio</td>
                            <td>Class 11 Bio</td>
                        </tr>
                        <tr>
                            <td>Class 10 Chem</td>
                            <td>Class 12 Chem</td>
                        </tr>
                        <tr>
                            <td>Class 10 Bio</td>
                            <td>Class 12 Phy</td>
                        </tr>
                        <tr>
                            <td>Class 10 Phy</td>
                            <td>class 12 Bio</td>
                        </tr>
                        <tr>
                            <td>Class 11 Phy</td>
                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <h3><img src={Math} style={{width:"30px",height:"30px",paddingRight:"5px"}}/>All State Board</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td>Punjab</td>
                            <td>Assam</td>
                        </tr>
                        <tr>
                            <td>Uttar Pradesh</td>
                            <td>Odisha</td>
                        </tr>
                        <tr>
                            <td>Maharastra</td>
                            <td>NCERT (Hinglish)</td>
                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                </div>
            </div>
            <h2 style={{marginLeft: "650px", marginTop: "100px"}}>Reasons For FreeEdu Works</h2>
            <div className="section-2">

                <div className="item">
                    <img src={personalizedLearning}/>
                    <h3>Personalized Learning</h3>
                    <p>Students practice at their own pace, first filling in gaps in their understanding and then
                        accelerating their learning.</p>
                </div>
                <div className="item">
                    <img src={court}/>
                    <h3>Trusted Content</h3>
                    <p>Created by experts, standards-aligned practice and lessons covers math K-12 through early
                        college, grammar, science, history, SAT®, and more. It’s all free for learners and teachers.</p>
                </div>
                <div className="item">
                    <img src={increse}/>
                    <h3>Tools To Empower Teachers</h3>
                    <p>Teachers can identify gaps in their students’ understanding, tailor instruction, and meet the
                        needs of every student.</p>
                </div>
            </div>

            <div className="section-3 sec">
                <div className="item-left">
                    <img src={teacher}/>
                </div>
                <div className="item-right">
                    <p>TEACHERS</p>
                    <h2>“I’m finally able to truly differentiate my classroom. This has been priceless for my students’
                        engagement.”</h2>
                    <p>UDAYA LAKSHMI PALAPALA/ Middle school Coordinator / Hyderabad</p>
                    <p style={{
                        fontSize: "25px",
                        marginTop: "20px"
                    }}>We empower teachers to support their entire classroom. 90% of US teachers who have used Khan
                        Academy have found us effective.
                    </p>
                    <button className="Teacher">Teachers, Start Here</button>
                </div>
            </div>
            <div className="section-4 sec">
                <div className="item-left">
                    <p>LEARNERS AND STUDENTS</p>
                    <h1>You can learn anything.</h1>
                    <p style={{marginTop: "20px"}}>Build a deep, solid understanding in math, science, grammar, history,
                        SAT®, and more.</p>
                    <button className="Teacher">Teachers, Start Here</button>
                </div>
                <div className="item-right">
                    <img src={leaner}/>
                </div>
            </div>
            <div className="section-3 sec">
                <div className="item-left">
                    <img src={student}/>
                </div>
                <div className="item-right">
                    <p>TOGETHER WE CAN MAKE A DIFFERENCE</p>
                    <h2>Every child deserves the chance to learn.</h2>
                    <p style={{
                        fontSize: "25px",
                        marginTop: "20px"
                    }}>Across the globe, 617 million children are missing basic math and reading skills. We’re a nonprofit delivering the education they need, and we need your help. You can change the course of a child’s life.
                    </p>
                    <button className="Teacher">Give them the chance</button>
                </div>
            </div>
        </div>
    )
}