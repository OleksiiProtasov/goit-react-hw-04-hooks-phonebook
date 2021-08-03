import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";
// import {useState, useEffect} from 'react'

// const useRecording = (key, defaultValue) => {
//   const [state,setState] = useState(() => {
//     return
//   })
// }

// export default function Form() {
//   const [name, setName] = useRecording('name', '');
//   const [number, setNamber] = useRecording('number', '');
//   // state = {
//   //   name: "",
//   //   number: "",
//   // };

// const handleChange = e => {
//   const {name, value } = e.target;

//   switch (name){
//     case 'name': setName(value);
//     break;
//     case 'namber': setNamber(value);
//     break;
//     default:return;
//   }
// }

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   this.setState({
//   //     [name]: value,
//   //   });
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onAddContact({ ...this.state });

//     this.setState({ name: "", number: "" });
//   };

//     return (
//       <form className={styles.TaskEditor} onSubmit={handleSubmit}>
//         <label className={styles.TaskEditor_label}>
//           Name
//           <input
//             className={styles.TaskEditor_input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//           />
//         </label>
//         <label className={styles.TaskEditor_label}>
//           Number
//           <input
//             className={styles.TaskEditor_input}
//             type="text"
//             name="number"
//             value={number}
//             onChange={handleChange}
//           />
//         </label>
//         <button className={styles.TaskEditor_button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );

// }

// Form.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
        <label className={styles.TaskEditor_label}>
          Name
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Number
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
