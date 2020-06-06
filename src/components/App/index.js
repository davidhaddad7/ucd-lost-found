import React, { Component } from 'react';
import './styles.css';
import { Colors, ThemeContext } from '../../lib';
import { AppRouter } from '../../containers';
import  GoogleLogin from 'react-google-login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      themeColor: Colors.white,
      changeThemeColor: this.changeThemeColor.bind(this)
    }
  }

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }

  changeThemeColor(newColor) {
    if (newColor !== this.state.themeColor)
      this.setState({ themeColor: newColor });
  }


  render() {

    return (
      <ThemeContext.Provider value={this.state}>
        <div>
          <GoogleLogin
          clientId="220859784478-t1e03moffc1dc3vb881nvqvdq9ih1445.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          >
          </GoogleLogin>
        </div>
        <div
          id="globalContainer"
          style={{ backgroundColor: this.state.themeColor }}
        >
          <div id="innerGlobalContainer">
            <AppRouter />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export { App };
