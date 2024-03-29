import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { TextInput } from "react-native-paper";
import * as planted_colors from "../../../Components/Color";

import { useDispatch } from "react-redux";
import * as authActions from "../../../store/actions/auth";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

const theme = {

  roundness: 4,
  colors: {
    placeholder: "white", text: "red", primary: "red",
    underlineColor: "black", background: planted_colors.LIGHT_BLUE,
  },
};    

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const MyReactNativeForm = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      console.log("User Data AsyncStorage", userData);
      if (!userData) {
        navigation.navigate("UserClinicPage");
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate,userType } = transformedData;
      const expirationDate = new Date(expiryDate);

      // const response = await fetch("http://10.0.2.2:4000/patient/single", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       "patientId": userId,
      //
      //     }),
      //   },
      // );


      // const resData = await response.json();
      // setUserDetails(resData);

      const response = await fetch("http://10.0.2.2:4000/get/slots", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "clinicObjectId": userId,

          }),
        },
      );


      const resData = await response.json();
      setSlotDetails(resData);

      if (expirationDate <= new Date() || !token || !userId) {
        navigation.navigate("UserClinicPage");
        return;
      }

      const expirationTime = expirationDate.getTime() - new Date().getTime();

      dispatch(authActions.authenticate(userId, token, expirationTime,userType));
      setLoading(false);
    };

    tryLogin();
<<<<<<< HEAD
=======


  }, [dispatch]);
>>>>>>> cb0e1ec50413bb25563532ad8630c159e18f589e


  }, [dispatch]);


  const [mode, setMode] = useState("time");
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [time, setTime] = useState();

<<<<<<< HEAD
  const [showStartTimeText, setShowStartTimeText] = useState("");
  const [showEndTimeText, setShowEndTimeText] = useState("");
=======
  const [visibleEndTime, setVisibleEndTime] = React.useState(false);

  const [showStartTimeText, setShowStartTimeText] = useState(null);
  const [showEndTimeText, setShowEndTimeText] = useState(null);
>>>>>>> a9ed9bf9f0b463251f696a1d7d07977be3d78158
  const [showDateText, setShowDateText] = useState("");
<<<<<<< HEAD
  const [count, setCount] = useState("");
=======
  const [count, setCount] = useState(0);

  const [slotDetails, setSlotDetails] = useState(null);

>>>>>>> e401e5699d0c0933b5c6a86d49de86cd008073f4



  const showModeStartTime = (currentMode) => {
    setShowStartTime(true);

  };

  const showTimepickerStartTime = () => {
    showModeStartTime("time");
  };

<<<<<<< HEAD
=======
  const onConfirmTime = React.useCallback(
    ({ hours, minutes }) => {
      setVisibleTime(false);
      var d = new Date();
      d.setHours(hours);
      d.setMinutes(minutes);
      setShowStartTimeText(d.toISOString());
>>>>>>> a9ed9bf9f0b463251f696a1d7d07977be3d78158

  const showModeEndTime = (currentMode) => {
    setShowEndTime(true);

<<<<<<< HEAD
  };
=======
  const onDismissEndTime = React.useCallback(() => {
    setVisibleEndTime(false);
  }, [setVisibleEndTime]);


  const onConfirmEndTime = React.useCallback(
    ({ hours, minutes }) => {
      setVisibleEndTime(false);
      var d = new Date();
      d.setHours(hours);
      d.setMinutes(minutes);
      setShowEndTimeText(d.toISOString());

      console.log({ hours, minutes });
    },
    [setVisibleTime],
  );
  const getSlots = async () => {

    console.log("getSlots", getUserId);
>>>>>>> a9ed9bf9f0b463251f696a1d7d07977be3d78158

  const showTimepickerEndTime = () => {
    showModeEndTime("time");
  };


  // const showDate = (currentMode) => {
  //   setShowEndTime(true);
  //
  // };

  const showDatePicker = () => {
    setShowDate(true);
  };

  const addSlot = async () => {
<<<<<<< HEAD
    var timeSlots = {};
    var nestedTimeSlot = {};
<<<<<<< HEAD
=======
=======


>>>>>>> cb0e1ec50413bb25563532ad8630c159e18f589e
    console.log(JSON.stringify({
            "clinicObjectId": getUserId,
            "eventDate": showDateText,
            "startTime": showStartTimeText,
            "endTime":showEndTimeText,
            "count": count,
          }));
    let new_event_date = new Date(showDateText)

    let new_end_date = new Date(showDateText)
    let showStartTimeTextFor = new Date(showEndTimeText)
    new_end_date.setHours(showStartTimeTextFor.getHours())
    new_end_date.setMinutes(showStartTimeTextFor.getMinutes())

    let new_start_date = new Date(showDateText)
    let showEndTimeTextFor = new Date(showStartTimeText)
    new_start_date.setHours(showEndTimeTextFor.getHours())
    new_start_date.setMinutes(showEndTimeTextFor.getMinutes())
>>>>>>> a9ed9bf9f0b463251f696a1d7d07977be3d78158

    nestedTimeSlot[showStartTimeText.toString()] =[0,count];

    timeSlots[showDateText] = nestedTimeSlot;



    var timeSlotData = JSON.stringify({
      "clinicObjectId": "6044df4fb8b7d14f20a42b3a",
      "timeSlots": timeSlots,

    });

    console.log(timeSlotData);
    const response = await fetch("http://10.0.2.2:4000/clinic/addtime", {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
<<<<<<< HEAD
          "clinicObjectId": "6044df4fb8b7d14f20a42b3a",
          "timeSlots": timeSlots,
=======
          "clinicObjectId": getUserId,
          "eventDate": showDateText,
          "startTime": new_start_date,
          "endTime":new_end_date,
          "count": count,
>>>>>>> a9ed9bf9f0b463251f696a1d7d07977be3d78158
        }),
      },
    );


    const resData = await response.json();
    console.log(resData)
  };

  console.log("The Slots Created",slotDetails);
  const slotDetailManagement=()=>{
    if(slotDetails) {
     return <View style={{
        marginTop: 20,
        backgroundColor: planted_colors.LIGHT_BLUE,
        height: "100%",
        alignItems: "center",
      }}>
        {slotDetails && slotDetails.map((i, j) => {
          return <Card key={j} style={{
            width: "90%",
            marginTop: 10,
            backgroundColor: planted_colors.BLUEISH_GREEN,
          }}>

            <Card.Content>
              <Title>Date: {new Date(i.eventDate).toLocaleDateString()}</Title>
              {i.eventTiming.map((k, l) => {
                return <View key={l} view={{
                backgroundColor:planted_colors.STRONG_YELLOW,
                  width:"100%",
                  height:"100%"
                }}>
                  <Paragraph>Start Time : {new Date(k.startTime).toLocaleTimeString()}</Paragraph>
                  <Paragraph>End Time : {new Date(k.endTime).toLocaleTimeString()}</Paragraph>
                  <Paragraph>Capacity: {k.allotmentLimit}</Paragraph>
                </View>;
              })}

            </Card.Content>


          </Card>;
        })

        }


      </View>
    } else {
      return <Card style={{
        width: "90%",
        marginTop: 10,
        backgroundColor: planted_colors.BLUEISH_GREEN,
      }}>

        <Card.Content>
          <Title>No Slots Created Yet</Title>


        </Card.Content>


      </Card>;
    }

  }
  if (loading) {
    return (
      <View style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Image style={{
          width: "50%",
          resizeMode: "contain",
        }}
               source={require("../../../Components/Images/user.png")}
        />
      </View>
    );
  }
  return (

    <View style={styles.MainContainer}>
      <View style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",

        marginTop: 10,
      }}>

        <View style={{
          width: "30%",
          alignItems: "center",
        }}>
          <Text style={{
            color: planted_colors.STRONG_RED,


          }}>{showStartTimeText}</Text>
        </View>
        <View style={{
          width: "30%",
          alignItems: "center",
        }}>
          <Text style={{
            color: planted_colors.STRONG_RED,


          }}>{showEndTimeText}</Text>
        </View>

        <View style={{
          width: "30%",
          alignItems: "center",

        }}>
          <Text style={{
            color: planted_colors.STRONG_RED,

          }}>{showEndTimeText}</Text>
        </View>
        <View style={{
          width: "30%",
          alignItems: "center",

        }}>
          <Text style={{
            color: planted_colors.STRONG_RED,

          }}>{showDateText}</Text>
        </View>
      </View>
      <View style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: 10,
      }}>

        <View style={{
          width: "30%",
        }}>
          <Button onPress={showTimepickerStartTime} title="Start Time" />
        </View>

        <View style={{
          width: "30%",
<<<<<<< HEAD
=======
        }}>
          <Button theme={theme} onPress={() => setVisibleEndTime(true)} uppercase={false}
                  mode="outlined">
            End Time
          </Button>
        </View>

        <View style={{
          width: "30%",
>>>>>>> a9ed9bf9f0b463251f696a1d7d07977be3d78158
          justifyContent: "center",
        }}>
          <Button onPress={showTimepickerEndTime} title="End Time" />
        </View>
        <View style={{
          width: "30%",
          justifyContent: "center",
        }}>
          <Button onPress={showDatePicker} title="Date" />
        </View>
      </View>

      <View style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: 10,
      }}>

        <View style={{
          width: "40%",
        }}>
          <TextInput theme={theme}
                     label={"Capacity"}
                     onChangeText={value => {
                       setCount(value);
                     }}
                     mode={"outlined"}
                     placeholder={"Capacity"} />

        </View>

        <View style={{
          width: "40%",
          justifyContent: "center",
        }}>
          <Button
            onPress={addSlot}
            title="Add Slot" />
        </View>
      </View>
<<<<<<< HEAD
      <View style={{
        marginTop: 20,
        backgroundColor: planted_colors.LIGHT_BLUE,
        height: "100%",
      }}>

      </View>


      {showStartTime && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={false}
          display="clock"
          onChange={(event, date) => {
            setShowStartTimeText(date.toLocaleTimeString(undefined, { timeZone: "Asia/Kolkata" }));
            setShowStartTime(false);
          }}
        />
      )}

      {showEndTime && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          style={{ backgroundColor: planted_colors.BLUEISH_GREEN }}
          mode={mode}
          is24Hour={false}
          display="clock"
          onChange={(event, date) => {
            setShowEndTimeText(date.toLocaleTimeString(undefined, { timeZone: "Asia/Kolkata" }));
            setShowEndTime(false);
          }}
        />
      )}

      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          style={{ backgroundColor: planted_colors.BLUEISH_GREEN }}
          mode={"date"}
          is24Hour={false}
          display="default"
          onChange={(event, date) => {
            setShowDateText(date.toLocaleDateString(undefined, { timeZone: "Asia/Kolkata" }));
            setShowDate(false);
          }}
        />
      )}
=======
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        {slotDetailManagement()}
      </ScrollView>

      <DatePickerModal
        // locale={'en'} optional, default: automatic
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={new Date()}
        onConfirm={onConfirmSingle}
        onChange={(date) => {
          setShowDateText(date.date.toISOString());
        }} // same props as onConfirm but triggered without confirmed by user
        saveLabel="Save" // optional
        label="Select date" // optional
        // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
      />

      <TimePickerModal
        visible={visibleTime}
        onDismiss={onDismissTime}
        onConfirm={onConfirmTime}

        hours={9} // default: current hours
        minutes={0} // default: current minutes
        label="Select time" // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        // animationType="fade" // optional, default is 'none'
        locale={"en"} // optional, default is automically detected by your system
      />

      <TimePickerModal
        visible={visibleEndTime}
        onDismiss={onDismissEndTime}
        onConfirm={onConfirmEndTime}

        hours={10} // default: current hours
        minutes={0} // default: current minutes
        label="Select time" // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        // animationType="fade" // optional, default is 'none'
        locale={"en"} // optional, default is automically detected by your system
      />
>>>>>>> a9ed9bf9f0b463251f696a1d7d07977be3d78158

    </View>

  );
};


const styles = StyleSheet.create({
  MainContainer: {
    width: "100%", height: "100%",

    backgroundColor: planted_colors.LIGHT_BLUE,
  },
  MainContainer2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: planted_colors.LIGHT_BLUE,

  },
  input:
    {
      backgroundColor: planted_colors.LIGHT_BLUE,
      color: planted_colors.OFF_WHITE,
      width: "90%",
      height: 45,
      margin: 10,


      fontSize: 18,


    },
  input2:
    {
      backgroundColor: planted_colors.LIGHT_BLUE,
      color: planted_colors.OFF_WHITE,
      width: "42%",
      height: 45,
      margin: 10,

      fontSize: 18,


    },
  errorText: {
    color: planted_colors.STRONG_RED,
    fontSize: 15,
    marginLeft: 20,

  },
  SplashScreen_ChildView:
    {
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

    },

});

export default MyReactNativeForm;



