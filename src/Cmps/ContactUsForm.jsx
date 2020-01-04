import React, { Component } from "react";

import "antd/dist/antd.css";
import {
  Form,
  Input,
  select,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import FormItem from "antd/lib/form/FormItem";

// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;

// class ContactUsForm extends React.Component {
//   state = {
//     confirmDirty: false,
//     autoCompleteResult: []
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFieldsAndScroll((err, values) => {
//       if (!err) {
//         console.log("Received values of form: ", values);
//       }
//     });
//   };

//   // handleConfirmBlur = e => {
//   //     const { value } = e.target;
//   //     this.setState({ confirmDirty: this.state.confirmDirty || !!value });
//   // };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const { autoCompleteResult } = this.state;
//     const { TextArea } = Input;
//     const { Option } = Select;
//     const formItemLayout = {
//       labelCol: {
//         xs: { span: 24 },
//         sm: { span: 8 }
//       },
//       wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 16 }
//       }
//     };
//     const tailFormItemLayout = {
//       wrapperCol: {
//         xs: {
//           span: 24,
//           offset: 0
//         },
//         sm: {
//           span: 16,
//           offset: 8
//         }
//       }
//     };
//     // const prefixSelector = getFieldDecorator("prefix", {
//     //   initialValue: "86"
//     // })();
//     // <Select style={{ width: 70 }}>
//     //   <Option value="86">+86</Option>
//     //   <Option value="87">+87</Option>
//     // </Select>

//     const websiteOptions = autoCompleteResult.map(website => (
//       <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
//     ));

//     return (
//       <Form {...formItemLayout} onSubmit={this.handleSubmit}>
//         <Form.Item label="אימייל">
//           {getFieldDecorator("email", {
//             rules: [
//               {
//                 type: "email",
//                 message: "אימייל לא תקין"
//               },
//               {
//                 required: true,
//                 message: "Please input your E-mail!"
//               }
//             ]
//           })(<Input />)}
//         </Form.Item>
//         <Form.Item label={<span>שם&nbsp;</span>}>
//           {getFieldDecorator("name", {
//             rules: [
//               {
//                 required: true,
//                 message: "Please input your name!",
//                 whitespace: true
//               }
//             ]
//           })(<Input />)}
//         </Form.Item>
//         <Form.Item label="Phone Number">
//           {getFieldDecorator("phone", {
//             rules: [
//               { required: true, message: "Please input your phone number!" }
//             ]
//           })(
//             <Input
//               // addonAfter={prefixSelector}
//               style={{ width: "300px" }}
//             />
//           )}
//         </Form.Item>
//         <Form.Item>
//           <Select
//             mode="multiple"
//             style={{ width: "350px" }}
//             placeholder="בחר נושא"

//             // onChange={handleChange}
//           >
//             <Option value="הנהלת חשבונות">הנהלת חשבונות</Option>
//             <Option value="חשבות שכר">חשבות שכר</Option>
//             <Option value="הצהרת הון">הצהרות הון</Option>
//             <Option value="החזרי מס">החזרי מס</Option>
//             <Option value="תכנון מס">תכנון מס</Option>
//             <Option value="גיוס הון">גיוס הון</Option>
//             <Option value="דוחות שנתיים">דוחות שנתיים</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item>
//           <TextArea
//             // value={value}
//             onChange={this.onChange}
//             placeholder="Controlled autosize"
//             autoSize={{ minRows: 3, maxRows: 5 }}
//           />
//         </Form.Item>
//         <Form.Item {...tailFormItemLayout}>
//           <Button type="primary" htmlType="submit">
//             Register
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }

// const contactUsForma = Form.create({ name: "register" })(
//   ContactUsForma
// );
// export default Form.create({ name: "register" })(ContactUsForm);

class ContactUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tel: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    const { Option } = Select;
    return (
      <form
        className="main-form align-center flex column"
        onSubmit={this.handleSubmit}
      >
        <div className="main-inputs flex">
          <div className="flex column space-between">
            <input
              placeholder="* שם מלא"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              placeholder="* טלפון"
              value={this.state.tel}
              onChange={this.handleChange}
            />
            <input
              placeholder="* מייל"
              type="email"
              value={this.state.tel}
              onChange={this.handleChange}
            />
          </div>
          <div className="textarea flex column space-between">
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="בחר נושא"

              // onChange={handleChange}
            >
              <Option value="הנהלת חשבונות">הנהלת חשבונות</Option>
              <Option value="חשבות שכר">חשבות שכר</Option>
              <Option value="הצהרת הון">הצהרות הון</Option>
              <Option value="החזרי מס">החזרי מס</Option>
              <Option value="תכנון מס">תכנון מס</Option>
              <Option value="גיוס הון">גיוס הון</Option>
              <Option value="דוחות שנתיים">דוחות שנתיים</Option>
            </Select>
            <textarea
              placeholder="תוכן הפנייה"
              rows="6"
              cols="50"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <input className="send-ms-btn" type="submit" value="שלח" />
      </form>
    );
  }
}
export default ContactUsForm;
