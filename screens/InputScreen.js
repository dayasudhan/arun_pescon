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
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
          {/* </View> */}
          {/* <View style={styles.formGroup}> */}
            <TextInput
                 style={styles.input}
                 value={values.phone}
                 placeholder="Phone.."
                 onChangeText={handleChange("phone")}
                //  onBlur={handleBlur("phone")}
               />
             {/* </View> */}
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
                <TextInput
                  style={styles.input}
                  value={values.address}
                  placeholder="Address.."
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  autoCapitalize="none"
                />

<View style={styles.formGroup}>
                <Text style={styles.label}>Person To be Contacted</Text>

                <TextInput
                  style={styles.input}
                  value={values.personToContact}
                  placeholder="Contact Name.."
                  onChangeText={handleChange("personToContact")}
                  onBlur={handleBlur("personToContact")}
                />

                {/* <ErrorMessage
                  errorValue={touched.name && errors.name}
                /> */}
              </View>
              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.personToContactPhone}
                  placeholder="Contact Phone.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Property to be serviced</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="Name.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
 </View>

<View style={styles.formGroup}>
  <Text style={styles.label}>Service Frequeny:</Text>

  <TextInput
    style={styles.input}
    value={values.firstName}
    placeholder="Name.."
    onChangeText={handleChange("name")}
    onBlur={handleBlur("name")}
  />
   </View>
   <View style={styles.formGroup}>
                <Text style={styles.label}>Service Start Date</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="Name.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />

                {/* <ErrorMessage
                  errorValue={touched.name && errors.name}
                /> */}
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Service End Date</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="Name.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />

                {/* <ErrorMessage
                  errorValue={touched.name && errors.name}
                /> */}
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Reneval</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="Name.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />

                {/* <ErrorMessage
                  errorValue={touched.name && errors.name}
                /> */}
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Pests to be Controlled</Text>

                <TextInput
                  style={styles.input}
                  value={values.pestsToControl}
                  placeholder="Pests to be controlled.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />

                {/* <ErrorMessage
                  errorValue={touched.name && errors.name}
                /> */}
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

                {/* <ErrorMessage
                  errorValue={touched.name && errors.name}
                /> */}
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

                {/* <ErrorMessage
                  errorValue={touched.name && errors.name}
                /> */}
              </View>


          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
          </KeyboardAwareScrollView>
        )}
      </Formik>

    
    </SafeAreaView>
    </>
  );
};


export default InputScreen;