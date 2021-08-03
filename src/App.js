// import { Component } from "react";
import { useState, useEffect } from "react";
import shortid from "shortid";

import Container from "./Components/Container";
import Form from "./Components/form";
import Filter from "./Components/filter";
import ContactList from "./Components/Phonebook";

export default function App() {
  const state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  const addContact = (task) => {
    const searchSameName = this.state.contacts
      .map((cont) => cont.name)
      .includes(task.name);

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        ...task,
        id: shortid.generate(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  const changeFilter = (filter) => {
    this.setState({ filter });
  };

  const getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  // componentDidMount() {
  //   const contact = localStorage.getItem("contacts");
  //   const parsetContact = JSON.parse(contact);

  //   if (parsetContact) {
  //     this.setState({ contacts: parsetContact });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevStates = this.state.contacts;

  //   if (prevStates !== prevState) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  const { filter } = state;
  const visibleContacts = getVisibleContacts();

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <Form onAddContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={removeContact}
        />
      </Container>
    </>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   addContact = (task) => {
//     const searchSameName = this.state.contacts
//       .map((cont) => cont.name)
//       .includes(task.name);

//     if (searchSameName) {
//       alert(`${task.name} is already in contacts`);
//     } else if (task.name.length === 0) {
//       alert("Fields must be filled!");
//     } else {
//       const contact = {
//         ...task,
//         id: shortid.generate(),
//       };

//       this.setState((prevState) => ({
//         contacts: [...prevState.contacts, contact],
//       }));
//     }
//   };

//   changeFilter = (filter) => {
//     this.setState({ filter });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;

//     return contacts.filter((contacts) =>
//       contacts.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   removeContact = (contactId) => {
//     this.setState((prevState) => {
//       return {
//         contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//       };
//     });
//   };

//   componentDidMount() {
//     const contact = localStorage.getItem("contacts");
//     const parsetContact = JSON.parse(contact);

//     if (parsetContact) {
//       this.setState({ contacts: parsetContact });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const prevStates = this.state.contacts;

//     if (prevStates !== prevState) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <>
//         <Container>
//           <h1>Phonebook</h1>
//           <Form onAddContact={this.addContact} />
//           <h2>Contacts</h2>
//           <Filter value={filter} onChangeFilter={this.changeFilter} />
//           <ContactList
//             contacts={visibleContacts}
//             onRemoveContact={this.removeContact}
//           />
//         </Container>
//       </>
//     );
//   }
// }

// export default App;
