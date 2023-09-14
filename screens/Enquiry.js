import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
// import {Picker} from 'react-native-picker';
import axios from 'axios';
const URL= "http://13.233.26.160:3002/leads" 
function EnquiryScreen({ navigation }){
  const [data, setData] = useState([]);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [searchKey, setSearchKey] = useState('name');
  // const { user, token } = useContext(AuthContext);

  useEffect(() => {
    // console.log("user123", user);
    // console.log("token123", token);
    console.log("data", data.length);
    if (data.length === 0) {
      axios.get(URL)
        .then(response => {
          if (response.status !== 401) {
            setData(response.data);
            setFilteredData(response.data);
          } else {
            setData([]);
            setFilteredData([]);
          }
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  const handleDetailButtonClick = (id) => {
    console.log("handleDetailButtonClick", id);
    const queryString = `?id=${id}`;
    const newPageUrl = '/agreement' + queryString;
    // Replace window.open with React Navigation navigation.navigate or your preferred navigation method
  };

  const handleRowClick = (index) => {
    setExpandedRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    console.log("value", value, data);

    const filteredResults = data.filter((item) =>
      item?.[searchKey]?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  const handleDropdownChange = (value) => {
    console.log('handleDropdownChange: Selected Value:', value);
    setSearchKey(value);
  };

  const searchOptions = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'Id' },
    { key: 'city', label: 'City' },
    { key: 'phone', label: 'Phone' },
  ];

  return (
    <View>
      {/* Your search and filter UI */}
      {/* <Picker
        selectedValue={searchKey}
        onValueChange={(itemValue) => handleDropdownChange(itemValue)}>
        {searchOptions.map((option) => (
          <Picker.Item key={option.key} label={option.label} value={option.key} />
        ))}
      </Picker> */}
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearchChange}
      />
      
      {/* Your table */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity onPress={() => handleRowClick(index)}>
              <Text>{index + 1}</Text>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
              {/* <Button title="Agreement" onPress={() => handleDetailButtonClick(item._id)} /> */}
            </TouchableOpacity>
            {expandedRowIndex === index && (
              <View>
                {/* Render additional content here */}
                {/* Use <Text> for each piece of information */}
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}

export default EnquiryScreen;