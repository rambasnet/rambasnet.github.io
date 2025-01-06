
import React from "react";
import Background from './components/background'
import Layout from './layout'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout {...this.props} currentPage="home">
        <div className="row" style={{margin: "50px"}}>
          <div className="col-sm-4">
            <h2>About Me</h2>
            <h5><a href="https://www.coloradomesa.edu/directory/computer-science-mathematics-statistics/ram-basnet.html" target="_blank" rel="noreferrer">CMU Profile</a></h5>
            <h5><a href="https://www.linkedin.com/in/rambasnet/" target="_blank" rel="noreferrer"> LinkedIn Profile</a></h5>
            <div id="profileImg">
              <img src={ "/assets/profile.png"} style={{"width":"100%"}} alt="Profile pic"/>
            </div>
            <p>I am a faculty of Computer Science and Cybersecurity at <a href="http://www.coloradomesa.edu" target="_blank" rel="noreferrer">Colorado Mesa University (CMU)</a>.</p>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <h2>CURRENT SCHEDULE</h2>
            <h5><a href="/teaching">This Semester's Schedule</a></h5>
            <br />
            <h2>BRIEF BACKGROUND</h2>
            <Background />
            <br />
            <h2>LEISURE</h2>
            <p>I follow the mantra: "work hard, play hard!"</p>
            <br />
            <h5>Everest Base Camp, Nepal, Spring 2018</h5>
            <div><img src={"/assets/EBC.JPG"} width="100%" alt="Everest Base Camp" /></div>
            <p>I love hiking mountains of Colorado.</p>
            <p>I did an epic trek to the Everest Base Camp, Kala Patthar, Chhola and Renjo Passes of Khumbu region of Nepal in 2018.</p>
            <p>I play soccer in recreational league.</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;