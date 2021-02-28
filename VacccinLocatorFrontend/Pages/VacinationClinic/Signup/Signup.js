import React from "react";
import { Text, View, Button, Alert, StyleSheet } from "react-native";
import { DefaultTheme, TextInput } from "react-native-paper";
import * as planted_colors from "../../../Components/Color";
import { Formik } from "formik";
import * as yup from "yup";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: planted_colors.BLUEISH_GREEN,
    accent: planted_colors.OFF_WHITE,
  },
};


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const loginValidationSchema = yup.object().shape({
   clinicName: yup
    .string()
    .required("clinic Name is required"),
  phoneNo: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

const MyReactNativeForm = props => (
  <View style={styles.MainContainer}>


    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{
        clinicName: "",
        AddressOfClinic: "",
        ClinicCoordinates: "",
        phoneNo: "",
        vaccineCount: "",
      }}
      onSubmit={values => {
        console.log(values);
        const jsonData = JSON.stringify(values);

      }}

    >
      {({
          handleChange, handleBlur, handleSubmit, values, errors,
          touched,
          isValid,
        }) => (
        <View style={{
          height: "100%",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text style={{

            color: planted_colors.STRONG_YELLOW,
          }}>Fill The Form Up </Text>
          <TextInput
            theme={theme}
            style={styles.input}
            onChangeText={handleChange("clinicName")}
            onBlur={handleBlur("clinicName")}
            value={values.clinicName}
            placeholder={"Email ID"}
            keyboardType="email-address"
          />
          {(errors.clinicName && touched.clinicName) &&
          <Text style={styles.errorText}>{errors.clinicName}</Text>
          }
          <GooglePlacesAutocomplete
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            placeholder='Enter Location'
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            styles={{
              textInputContainer: {
                backgroundColor: planted_colors.OFF_WHITE,
                width:"90%",
                height:"100%"
              },
              textInput: {
                height: 34,
                width:"100%",
                color: 'black',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            query={{
              key: 'AIzaSyD09ZcG7fHZltsAOsKjxq5Eww4xEIfXZNc',
              language: 'en',
              types:`(cities)`
            }}
          />
          <TextInput
            theme={theme}
            style={styles.input}
            onChangeText={handleChange("AddressOfClinic")}
            onBlur={handleBlur("AddressOfClinic")}
            value={values.AddressOfClinic}
            placeholder={"Address Of Clinic"}
            secureTextEntry
          />
          {(errors.AddressOfClinic && touched.AddressOfClinic) &&
          <Text style={styles.errorText}>{errors.AddressOfClinic}</Text>
          }
          <TextInput
            theme={theme}
            style={styles.input}
            onChangeText={handleChange("ClinicCoordinates")}
            onBlur={handleBlur("ClinicCoordinates")}
            value={values.ClinicCoordinates}
            placeholder={"Aadhar Card"}
          />
          {(errors.ClinicCoordinates && touched.ClinicCoordinates) &&
          <Text style={styles.errorText}>{errors.ClinicCoordinates}</Text>}


          <TextInput
            theme={theme}
            style={styles.input}
            onChangeText={handleChange("phoneNo")}
            onBlur={handleBlur("phoneNo")}
            value={values.phoneNo}
            placeholder={"Phone No."}
          />
          {(errors.phoneNo && touched.phoneNo) &&
          <Text style={styles.errorText}>{errors.phoneNo}</Text>}
          <Button theme={theme} style={{
            marginTop: 20,

          }} onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  </View>
);


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: planted_colors.OFF_WHITE,
  },
  input:
    {
      backgroundColor: planted_colors.LIGHT_BLUE,
      color: planted_colors.OFF_WHITE,
      width: "90%",
      height: 25,
      margin: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 18,


    },
  errorText: {
    color: planted_colors.STRONG_RED,
    fontSize: 15,
    marginLeft: 20,

  },


});

export default MyReactNativeForm;