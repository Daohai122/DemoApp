import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

export default class NotificationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          description: "Một đề nghị kê đơn thuốc đang chờ bạn duyệt!",
        },
        {
          id: 2,
          description: "Một yêu cầu kê đơn thuốc đang chờ bác sĩ kê đơn",
        },
        {
          id: 3,
          description: "Bác sĩ đã kê toa xong, thuốc của bạn đang chờ về kho",
        },
        {
          id: 4,
          description: "Thông báo từ người quản lý của bạn",
        },
        {
          id: 5,
          description: "Thông báo từ DM",
        },
        {
          id: 6,
          description:
            "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
        },
        {
          id: 7,
          description:
            "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
        },
        {
          id: 8,
          description:
            "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
        },
        {
          id: 9,
          description:
            "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit",
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.notificationList}
          enableEmptySections={true}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.notificationBox}>
                <Image
                  style={styles.icon}
                  source={{
                    uri:
                      "https://img.icons8.com/nolan/64/appointment-reminders.png",
                  }}
                />

                <Text style={styles.description}>{item.description}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
  },
  notificationList: {
    marginTop: 10,
    padding: 10,
  },
  notificationBox: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 10,
  },
  icon: {
    width: 45,
    height: 45,
  },
  description: {
    fontSize: 15,
    color: "#3498db",
    marginLeft: 10,
    paddingRight: 40,
  },
});
