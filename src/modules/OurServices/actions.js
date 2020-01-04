import OurServicesService from "./OurServices.Service";


const setCurrOurService = (ourService) => {
    return { type: 'SET_CURR_OUR_SERVICE', ourService: ourService };
};

export const loadCurrService = (id) => {
    return async (dispatch) => {
        const ourService = await OurServicesService.getServiceById(id);
        return dispatch(setCurrOurService(ourService));
    };
};

// const updateContact = (contact) => {
//     return { type: 'UPDATE_CONTACT', contact };
// };

// export const saveContact = (contact) => {
//     return async (dispatch) => {
//         const contact = await ContactService.save(contact);
//         return dispatch(updateContact(contact));
//     };
// };

const setServices = (ourServices) => {
    return { type: 'SET_OUR_SERVICES', ourServices };
};

export const loadServices = () => {
    return async (dispatch) => {
        const OurService = await OurServicesService.query();
        return dispatch(setServices(OurService));
    };
};