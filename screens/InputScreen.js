import React, { useState } from 'react';
import { View, Text, TextInput, Button,  TouchableOpacity,StyleSheet,SafeAreaView,Switch,Modal } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { validationSchema } from "./../utils/validation";
import { styles } from "./../utils/styles";
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import BASE_URL from './../utils/utils' 
const URL = BASE_URL + "leads";


const InputScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onSubmitHandler = (values) => {
    console.log('Login form values:', values);
    axios.post(URL, values)
    .then(response => {
      console.log("response1",response);
      console.log("response2",response?.data?.id);
      setTimeout(() => {
        setResponseText(`Customer Inserted Successfully With Id : ${response?.data?.id}`); // Set the response text to be shown in the modal
        setShowModal(true); // Show the modal
      }, 1000); // Delay of 1 second
    })
    .catch(error => {
      console.error("error",error);
    });
  };
  const closeModal = () => {
    setShowModal(false);
    // location.reload();
  };
  const openModal = () => {
    setShowModal(true);
  };
  const [propertyType, setPropertyType] = useState('Commercial');
  const [serviceFrequency, setServiceFrequency] = useState('Monthly');
  return (
    <>
    <SafeAreaView style={styles.topSafeArea} />

    <StatusBar style="light" />

    <SafeAreaView style={styles.container}>

      <Formik
        initialValues={{
          name: "",
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
        {({ handleChange, handleSubmit,handleBlur, values, errors, touched }) => (
          <KeyboardAwareScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          >
            {/* <View style={styles.formGroup}> */}
            <Text style={styles.label}>Customer Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Name.." 
              onChangeText={handleChange('name')}
              value={values.name}
            />
             <Text style={{ color: "red" }}>{errors.name}</Text>
            {/* {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>} */}
          {/* </View> */}
          {/* <View style={styles.formGroup}> */}
            <TextInput
                 style={styles.input}
                 value={values.phone}
                 placeholder="Phone.."
                 onChangeText={handleChange("phone")}
                //  onBlur={handleBlur("phone")}
               />
            <Text style={{ color: "red" }}>{errors.phone}</Text>
             <TextInput
                  style={styles.input}
                  value={values.landMark}
                  placeholder="LandMark.."
                  onChangeText={handleChange("landMark")}
                  // onBlur={handleBlur("email")}
                  autoCapitalize="none"
                />
                <TextInput
                  style={styles.input}
                  value={values.city}
                  placeholder="Village/City.."
                  onChangeText={handleChange("city")}
                 
                  autoCapitalize="none"
                />
                 <Text style={{ color: "red" }}>{errors.city}</Text>
                <TextInput
                  style={styles.input}
                  value={values.address}
                  placeholder="Address.."
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  autoCapitalize="none"
                />
 <Text style={{ color: "red" }}>{errors.address}</Text>
<View style={styles.formGroup}>
                <Text style={styles.label}>Person To be Contacted</Text>

                <TextInput
                  style={styles.input}
                  value={values.personToContact}
                  placeholder="Contact Name.."
                  onChangeText={handleChange("personToContact")}
                  onBlur={handleBlur("personToContact")}
                />
             <Text style={{ color: "red" }}>{errors.personToContact}</Text>

              </View>
              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.personToContactPhone}
                  placeholder="Contact Phone.."
                  onChangeText={handleChange("personToContactPhone")}
                  onBlur={handleBlur("personToContactPhone")}
                />
                 <Text style={{ color: "red" }}>{errors.personToContactPhone}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Property to be serviced : {propertyType}</Text>
                  <RadioButton.Group
                  onValueChange={(value) => setPropertyType(value)}
                  value={propertyType}
                  >
                    <View style={styles.radioOption}>
                      <View style={styles.radioButtonContainer}>
                        <RadioButton value="Commercial" />
                        <Text style={styles.radioLabel}>Commercial</Text>
                      </View>
                    </View>
                    <View style={styles.radioOption}>
                      <View style={styles.radioButtonContainer}>
                        <RadioButton value="Residential" />
                        <Text style={styles.radioLabel}>Residential</Text>
                      </View>
                    </View>
                  </RadioButton.Group>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Service Frequeny:  {serviceFrequency}</Text>
                  <RadioButton.Group
                  onValueChange={(value) => setServiceFrequency(value)}
                  value={serviceFrequency}
                  >
                    <View style={styles.radioOption}>
                      <View style={styles.radioButtonContainer}>
                        <RadioButton value="Monthly" />
                        <Text style={styles.radioLabel}>Monthly</Text>
                      </View>
                    </View>
                    <View style={styles.radioOption}>
                      <View style={styles.radioButtonContainer}>
                        <RadioButton value="Quarterly" />
                        <Text style={styles.radioLabel}> Quarterly</Text>
                      </View>
                    </View>
                    <View style={styles.radioOption}>
                      <View style={styles.radioButtonContainer}>
                        <RadioButton value="AMC" />
                        <Text style={styles.radioLabel}> AMC</Text>
                      </View>
                    </View>
                  </RadioButton.Group>

                  </View>
   <View style={styles.formGroup}>
                <Text style={styles.label}>Service Start Date (ex :2023-10-02)</Text>

                <TextInput
                  style={styles.input}
                  value={values.serviceBeginDate}
                  placeholder="2023-10-02"
                  onChangeText={handleChange("serviceBeginDate")}
                  onBlur={handleBlur("serviceBeginDate")}
                />
              <Text style={{ color: "red" }}>{errors.serviceBeginDate}</Text>
              
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Service End Date</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="2023-10-02"
                  onChangeText={handleChange("serviceExpirationDate")}
                  onBlur={handleBlur("serviceExpirationDate")}
                />

              <Text style={{ color: "red" }}>{errors.serviceExpirationDate}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Reneval: {isEnabled? ' Yes' : 'No'}</Text>

                  <Switch
                    trackColor={{ false: "#fff", true: "#52d964" }}
                    thumbColor={isEnabled ? "#fff" : "#fff"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.switch}
                  />
                
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Pests to be Controlled</Text>

                <TextInput
                  style={styles.input}
                  value={values.pestsToControl}
                  placeholder="Pests to be controlled.."
                  onChangeText={handleChange("pestsToControl")}
                  onBlur={handleBlur("pestsToControl")}
                />

              <Text style={{ color: "red" }}>{errors.pestsToControl}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Payment Terms</Text>

                <TextInput
                  style={styles.input}
                  value={values.paymentTerms}
                  placeholder="Payment Terms.."
                  onChangeText={handleChange("paymentTerms")}
                  onBlur={handleBlur("paymentTerms")}
                  multiline={true} // Set to true for multiline input
                  numberOfLines={4} // Specify the number of lines to display (optional)
                />

              <Text style={{ color: "red" }}>{errors.paymentTerms}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Billing Instructions</Text>

                <TextInput
                  style={styles.input}
                  value={values.billingInstructions}
                  placeholder="Billing Instructions.."
                  onChangeText={handleChange("billingInstructions")}
                  onBlur={handleBlur("billingInstructions")}
                   multiline={true} // Set to true for multiline input
          numberOfLines={4} // Specify the number of lines to display (optional)
                />
                <Text style={{ color: "red" }}>{errors.billingInstructions}</Text>
              </View>


          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
          </KeyboardAwareScrollView>
          
        )}
      </Formik>
       {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
      <Modal   animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={closeModal}>
         <View style={{ flex: 1, justifyContent: 'center' }}>
         <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
         <Text>{responseText}</Text>
         <Button title="Close" onPress={closeModal} />
         </View>
         </View>
      </Modal>
      
    </SafeAreaView>
    </>
  );
};


export default InputScreen;