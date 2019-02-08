import React, { Component } from 'react';
import '../../styles/css/section-4.css';

class SectionFour extends Component {
  state = {
    subscriptionScreen: 0,
    subscriptionFirstNameFilled: false,
    subscriptionLastNameFilled: false,
    subscriptionEmailFilled: false,
    subscribeClickable: false
  };

  subscribeButtonStateSwitch = () => {
    if (this.state.subscriptionFirstNameFilled &&
      this.state.subscriptionLastNameFilled &&
      this.state.subscriptionEmailFilled) {
        this.setState({ subscribeClickable: true })
    } else {
      this.setState({ subscribeClickable: false })
    }
  }

  checkIfAreaIsFilled = (event) => {
    let targetIsFilled = false;
    if (event.target.value !== "") {
      targetIsFilled = true;
    }

    switch(event.target.name) {
      case 'FirstName':
        this.setState({subscriptionFirstNameFilled: targetIsFilled}, () => {
          this.subscribeButtonStateSwitch();
        });
        break;
      case 'LastName':
        this.setState({subscriptionLastNameFilled: targetIsFilled}, () => {
          this.subscribeButtonStateSwitch();
        });
        break;
      case 'E-MailAddress':
        this.setState({subscriptionEmailFilled: targetIsFilled}, () => {
          this.subscribeButtonStateSwitch();
        });
        break;
      default:
        break;
    }
  }

  renderSubscribeButton = (clickable) => {
    if (clickable) {
      return (
        <div className="section-4-form-submit enabled"
          onClick={this.subscribeButtonOnClick}
          style={{ width:"30%"}}
          >
          <span style={{ opacity: '1' }}>I want to receive cool news!</span>
        </div>
      )
    }
    return (
      <div className="section-4-form-submit disabled"
        style={{ width:"20px", transitionDelay: '0.2s'}}
        >
        <span style={{ opacity: '0', transitionDelay: '0s' }}>I want to receive cool news!</span>
      </div>
    )
  }

  subscribeButtonOnClick = () => {
    this.setState({subscriptionScreen: 1});
    setTimeout(this.finalizeSubscription, 2400)
  }

  finalizeSubscription = () => {
    this.setState({subscriptionScreen: 2})
  }

  returnToSubscription = () => {
    this.setState({subscriptionScreen: 0,
      subscriptionFirstNameFilled: false,
      subscriptionLastNameFilled: false,
      subscriptionEmailFilled: false,
      subscribeClickable: false})
  }

  renderSubscriptionScreen = (screen) => {
    switch(screen) {
      case 0:
        return ( <div className="section-4-form-container">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <form className="section-4-form">
            <input type="text" name="FirstName" placeholder="First Name" onChange={this.checkIfAreaIsFilled}  />
            <input type="text" name="LastName" placeholder="Last Name" onChange={this.checkIfAreaIsFilled} />
            <input type="text" name="E-MailAddress" placeholder="E-mail Address" onChange={this.checkIfAreaIsFilled} />
          </form>
          {this.renderSubscribeButton(this.state.subscribeClickable)}
        </div>
        );
      case 1:
        return ( <div className="section-4-form-container">
          <p>We are signing you up!</p>
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </div>
        );
      case 2:
        return ( <div className="section-4-form-container">
          <h2 className="section-4-form-container-subscribed-h2">You have successfully subscribed to our newsletter!</h2>
          <p className="section-4-form-container-subscribed-p">From now on, you will be up-to-date about the hottest products and builds, inspiring design ideas to include in the your paludarium!</p>
          <div className="section-4-form-container-subscribed-return" onClick={this.returnToSubscription}>Cool!</div>
        </div>
        );
      default:
        return ( <div className="section-4-form-container">
          <p>Welcome to the Paludarium Club!</p>
        </div>
        );
    }
  };

  render() {
    return (
      <div className="section-4">
          {this.renderSubscriptionScreen(this.state.subscriptionScreen)}
          <div className="section-4-banner-container">
            <div className="section-4-banner-filter"></div>
            <div className="section-4-banner-text-container">
                <div className="section-4-banner-line"></div>
                <div className="section-4-banner-text">THE PALUDARIUM CLUB</div>
                <div className="section-4-banner-line"></div>
            </div>
          </div>
        </div>
    )
  }
};

export default SectionFour;
