import React from "react";
import Notification from "./Notification";

const reservedNotification = [
  {
    id: 1,
    message: "안녕하세요. 오늘의 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotification.length) {
        const index = notifications.length;
        notifications.push(reservedNotification[index]);

        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((el) => {
          return <Notification key={el.id} id={el.id} message={el.message} />;
        })}
      </div>
    );
  }
}
export default NotificationList;
