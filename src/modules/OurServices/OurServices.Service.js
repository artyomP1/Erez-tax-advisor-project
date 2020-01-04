export default {
    // getServiceById,
    // deleteContact,
    // saveContact,
    // getEmptyContact,
    query
};



function query() {
    return Promise.resolve(OurServices);
}


// function getServiceById(id) {
//     return new Promise((resolve, reject) => {
//         const OurServices = OurServices.find(service => service._id === id);
//         service ? resolve(service) : reject(`service id ${id} not found!`);
//     });
// }

// function deleteContact(id) {
//     return new Promise((resolve, reject) => {
//         const index = contacts.findIndex(contact => contact._id === id);
//         if (index !== -1) {
//             contacts.splice(index, 1);
//         }
//         resolve(contacts);
//     });
// }

// function _updateContact(contact) {
//     return new Promise((resolve, reject) => {
//         const index = contacts.findIndex(c => contact._id === c._id);
//         if (index !== -1) {
//             contacts[index] = contact;
//         }
//         resolve(contact);
//     });
// }

// function _addContact(contact) {
//     return new Promise((resolve, reject) => {
//         contact._id = _makeId();
//         contacts.unshift(contact);
//         resolve(contact);
//     });
// }

// function saveContact(contact) {
//     return contact._id ? _updateContact(contact) : _addContact(contact);
// }

// function getEmptyContact() {
//     return {
//         name: '',
//         email: '',
//         phone: ''
//     };
// }



function _makeId(length = 10) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

const OurServices = [{
    "_id": "5a56640269f443a5d64b32ca",
    "name": "החזרי מס לשכירים",
    "imgUrl": "https://res.cloudinary.com/artyompogosov/image/upload/v1577873366/lyvvivj2zalfbmdxajfh.jpg",
},
{
    "_id": "5a5664025f6ae9aa24a99fde",
    "name": "הצהרות הון",
    "imgUrl": "https://res.cloudinary.com/artyompogosov/image/upload/v1577873365/dln0vf5es7qhy5ifv8uk.jpg",
},
{
    "_id": "5a56640252d6acddd183d319",
    "name": "הנהלת חשבונות",
    "imgUrl": "https://res.cloudinary.com/artyompogosov/image/upload/v1577873364/qfstpqny0vrvmnnrjj8q.jpg",
},
{
    "_id": "5a1110252d6acddd183d319",
    "name": "תכנון מס",
    "imgUrl": "https://res.cloudinary.com/artyompogosov/image/upload/v1578124500/rflxfggrhmysqgduiveb.jpg",
},
{
    "_id": "5a566402ed1cf3412345674d",
    "name": "חשבות שכר",
    "imgUrl": "https://res.cloudinary.com/artyompogosov/image/upload/v1578124354/qwldp3x9y3zw39bf2anz.jpg",

},
{
    "_id": "5a566402ed1cf349f0b47b4d",
    "name": "דוחות שנתיים",
    "imgUrl": "https://res.cloudinary.com/artyompogosov/image/upload/v1577873361/q8oyglbim4eysp88k8da.jpg",
},
{
    "_id": "5a566402ed1cf349f0b4123",
    "name": "גיוס הון",
    "imgUrl": "https://res.cloudinary.com/artyompogosov/image/upload/v1578124570/s6r9xg11gwrnsqxkiyes.jpg",
}

];