import React from 'react';
import { View, Text, TextInput, Button,  TouchableOpacity,StyleSheet,SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });
import { validationSchema } from "./../utils/validation";
import { styles } from "./../utils/styles";
const InputScreen = () => {
  const onSubmitHandler = (values) => {
    // You can perform login logic here with values.email and values.password
    console.log('Login123 form values:', values);
  };

  return (
    <>
    <SafeAreaView style={styles.topSafeArea} />

    <StatusBar style="light" />

    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Register</Text>
      </View> */}
      <Formik
        initialValues={{
          name: "netra213",
          phone: "",
          address: "",
          email: "",
          landMark:"",
          city:"",
          personToContact: "",
          personToContactPhone: "",
          serviceBeginDate: '',
          serviceExpirationDate: '',
          pestsToControl: '',
          serviceFrequency:'Monthly',
          propertyType:'Commercial',
          reneval:false,
          paymentTerms:"",
          billingInstructions:""
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitHandler(values)}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <KeyboardAwareScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          >
            <View style={styles.formGroup}>
            <Text style={styles.label}>Customer Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Name.." 
              onChangeText={handleChange('name')}
              value={values.name}
            />
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
          </View>
         
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>SUBMIT234</Text>
              </TouchableOpacity>
          </KeyboardAwareScrollView>
        )}
      </Formik>

    
    </SafeAreaView>
    </>
  );
};


export default InputScreen;