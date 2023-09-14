import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { validationSchema } from "./../utils/validation";
import { styles } from "./../utils/styles";
import React, { useState, useEffect } from 'react';
const ErrorMessage = ({ errorValue }) => {
  return errorValue ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{errorValue}</Text>
    </View>
  ) : null;
};
const URL = "http://13.233.26.160:3002/leads";
export default function RegisterForm() {

  // const [formData, setFormData] = useState({
  //   name: "dayas",
  //   phone: "",
  //   address: "",
  //   email: "",
  //   landMark:"",
  //   city:"",
  //   personToContact: "",
  //   personToContactPhone: "",
  //   serviceBeginDate: '',
  //   serviceExpirationDate: '',
  //   pestsToControl: '',
  //   serviceFrequency:'Monthly',
  //   propertyType:'Commercial',
  //   reneval:false,
  //   paymentTerms:"",
  //   billingInstructions:""
  // });
  const handleSubmit = async (values,actions) => {
    try {
      console.log("values",values)
      // Make a POST request to your server's registration endpoint
      const response = await axios.post(URL, values);

      // Handle the server response as needed (e.g., show a success message)
      console.log('Registration Successful:', response.data);
    } catch (error) {
      // Handle any registration errors (e.g., show an error message)
      console.error('Registration Error:', error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
        </View> */}

        {/* https://formik.org/docs/overview */}
        <Formik
          initialValues={{
            name: "netra",
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
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
          }) => (
            // https://github.com/APSL/react-native-keyboard-aware-scroll-view
            <KeyboardAwareScrollView
              style={styles.content}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formGroup}>
                <Text style={styles.label}>Customer Details</Text>

                <TextInput
                  style={styles.input}
                  value={values.name}
                  placeholder="Name.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />

                <ErrorMessage
                  errorValue={touched.name && errors.name}
                />
              </View>

              {/* <View style={styles.formGroup}>
               

                <TextInput
                  style={styles.input}
                  value={values.phone}
                  placeholder="Phone.."
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                />
              </View>

              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.email}
                  placeholder="LandMark.."
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"
                />

                <ErrorMessage errorValue={touched.email && errors.email} />
              </View>
              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.email}
                  placeholder="Village/City.."
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"
                />

                <ErrorMessage errorValue={touched.email && errors.email} />
              </View>
              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.email}
                  placeholder="Address.."
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"
                />

                <ErrorMessage errorValue={touched.email && errors.email} />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Person To be Contacted</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="Contact Name.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />

                <ErrorMessage
                  errorValue={touched.name && errors.name}
                />
              </View>
              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="Contact Phone.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />

                <ErrorMessage
                  errorValue={touched.name && errors.name}
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

                <ErrorMessage
                  errorValue={touched.name && errors.name}
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

                <ErrorMessage
                  errorValue={touched.name && errors.name}
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

                <ErrorMessage
                  errorValue={touched.name && errors.name}
                />
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

                <ErrorMessage
                  errorValue={touched.name && errors.name}
                />
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

                <ErrorMessage
                  errorValue={touched.name && errors.name}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Pests to be Controlled</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="Name.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />

                <ErrorMessage
                  errorValue={touched.name && errors.name}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Payment Terms</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="Name.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  multiline={true} // Set to true for multiline input
                  numberOfLines={4} // Specify the number of lines to display (optional)
                />

                <ErrorMessage
                  errorValue={touched.name && errors.name}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Billing Instructions</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  placeholder="Billing Instructions.."
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                   multiline={true} // Set to true for multiline input
          numberOfLines={4} // Specify the number of lines to display (optional)
                />

                <ErrorMessage
                  errorValue={touched.name && errors.name}
                />
              </View> */}

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>SUBMIT</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </SafeAreaView>
    </>
  );
}
