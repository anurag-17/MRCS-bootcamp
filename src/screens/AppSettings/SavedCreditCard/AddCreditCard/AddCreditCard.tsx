import React, { useState } from 'react';
import {StyleSheet, Platform, Text} from 'react-native';
import Fonts from '../../../../assets/Fonts';
import {DarkBlue, LightGrayColor, grayD9, secondaryTextColor} from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import {View, TextField, Button} from 'react-native-ui-lib';
import CardValidator from 'card-validator';

const AddCreditCard = () => {
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [isCardValid, setIsCardValid] = useState(false);
    const [formattedCreditCardNumber, setFormattedCreditCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [formattedExpirationDate, setFormattedExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const handleCreditCardChange = (input) => {
        // Remove non-numeric characters from the input
        const formattedInput = input.replace(/\D/g, '');
    
        // Add a space after every 4 digits
        const formattedNumber = formattedInput.replace(/(\d{4})/g, '$1 ').trim();
    
        setCreditCardNumber(formattedInput);
        setFormattedCreditCardNumber(formattedNumber);
      };

      function expirationDateFormatter(
        oldValue: string,
        newValue: string,
      ): string {
        // user is deleting so return without formatting
        if (oldValue.length > newValue.length) {
          return newValue;
        }
        return newValue
          .replace(/\W/gi, '')
          .replace(/(.{2})/g, '$1 / ')
          .substring(0, 7);
      }

      const handleExpirationDateChange = (input) => {
        // const formattedInput = input.replace(/\D/g, '');
        // const formattedDate = formattedInput
        //   .replace(/(\d{2})(\d{2})/, '$1 / $2')
        //   .trim()
        //   .slice(0, 7);
        const formattedInput = expirationDateFormatter(expirationDate, input);

    
        setExpirationDate(input);
        setFormattedExpirationDate(formattedInput);
      };



  return (
    <View style={styles.mainContanier}>
      <Header
        type="blue"
        title={'Enter Card Details'}
        titleStyle={styles.settingsTitle}
        containerStyle={styles.headerStyle}
      />
    
    <View style={styles.formContainer}> 
      <TextField
        label="Card number*"
        placeholder="Enter card number"
        keyboardType={'number-pad'}
        style={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderTextColor={grayD9}
        value={formattedCreditCardNumber}
        onChangeText={handleCreditCardChange}
        validationMessage={["Enter a valid car number"]}
        enableErrors
        validationMessageStyle={styles.errorMessage}
        validateOnChange={true}
        validateOnBlur={true}
        validate={[
          (value:string) => 
            CardValidator.number(value).isValid
          
        ]}
        maxLength={19}
      />
      <TextField
        label="Expiration date*"
        placeholder="MM / YY"
        keyboardType={'number-pad'}
        style={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderTextColor={grayD9}
        value={formattedExpirationDate}
        onChangeText={handleExpirationDateChange}
        validationMessage={["Enter a valid expiration date"]}
        enableErrors
        validationMessageStyle={styles.errorMessage}
        validateOnChange={true}
        validateOnBlur={true}
        validate={[
          (value:string) => 
            CardValidator.expirationDate(value).isValid
          
        ]}
        maxLength={7}
      />
      <TextField
        label="Security code (CVV)*"
        placeholder="XXX"
        keyboardType={'number-pad'}
        style={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderTextColor={grayD9}
        value={cvv}
        onChangeText={(tx)=>setCvv(tx)}
        validationMessage={["Enter a valid security code (CVV)."]}
        enableErrors
        validationMessageStyle={styles.errorMessage}
        validateOnChange={true}
        validateOnBlur={true}
        validate={[
          (value:string) => 
            value.length >=3 ?  true :false
          
        ]}
        maxLength={4}
      />
      <TextField
        label="Cardholder name *"
        placeholder=""
        style={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderTextColor={grayD9}
        value={cardHolderName}
        onChangeText={(tx)=>setCardHolderName(tx)}
        validationMessage={["Enter your name as shown on the card"]}
        enableErrors
        validationMessageStyle={styles.errorMessage}
        validateOnChange={true}
        validateOnBlur={true}
        validate={[
          'required'
        ]}
      />
           

     
      
      </View>
    </View>
  );
};

export default AddCreditCard;

const styles = StyleSheet.create({
  mainContanier: {
    flex: 1,
    backgroundColor: 'white',
  },
  settingsTitle: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
    marginBottom:30
  },
  formContainer:{
    marginHorizontal:10,
    marginTop:30
  },
  labelStyle:{
    fontFamily:Fonts.POPPINS_REGULAR,
    fontSize:14,
    color:LightGrayColor,
  },

  inputStyle:{
    fontFamily:Fonts.POPPINS_REGULAR,
    fontSize:14,
    color:secondaryTextColor,
    borderBottomWidth:1,
    borderBottomColor:grayD9,
    marginVertical:5

  },
  errorMessage:{
    fontSize:13,
    fontFamily:Fonts.POPPINS_REGULAR,
  }
});
