import React, { Component } from 'react';
import './styles.css';
import { Colors } from '../../lib';
import { GoogleLogin } from 'react-google-login';
import Logo from '../../assets/Logo.png';
import shields from '../../assets/shields.jpg';
// import { MapContainer } from '../GoogleMap/index';


class LoginScreen extends Component {

  constructor(props) {
    super(props);
    props.setBgColor(Colors.medBlue);
  }

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }

  render() {
    return (
        <main>
          <section>
          <div className= "loginContainer">
            <div className="library-img-container">
                <img src={shields} alt="shields" ></img>
              </div>

            <div className="logo-img-container">
                <img src={Logo} alt="Logo" ></img>
              </div>

              <div className="google-login">
                {/* Credit to this source code to help me get it set up
                https://github.com/adavijit/AVDOJO-TUTORIALS/tree/master/google-oauth 
                */}
                <GoogleLogin
                clientId="220859784478-t1e03moffc1dc3vb881nvqvdq9ih1445.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
                />
              </div>

              {/* <div className="container-map">
                <MapContainer/>
              </div> */}
            </div>
          </section>
        </main>
    );
  }
}

export { LoginScreen };
