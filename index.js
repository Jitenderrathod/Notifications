function Notification(props) {
  const { image, text, backgroundColor } = props;
  return (
    <div className={backgroundColor}>
      <img src={image} className="image" />
      <p className="description">{text}</p>
    </div>
  );
}

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="notification-container">
      <h1 className="heading">Notifications</h1>
      <div className="notifications-container">
        <Notification
          image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          text="Information Message"
          backgroundColor="notification primary"
        />
        <Notification
          image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          text="Success Message"
          backgroundColor="notification success"
        />
        <Notification
          image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          text="Warning Message"
          backgroundColor="notification warning"
        />
        <Notification
          image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          text="Error Message"
          backgroundColor="notification danger"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
