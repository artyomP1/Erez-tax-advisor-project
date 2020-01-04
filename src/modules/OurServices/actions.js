import OurServicesService from "./OurServices.Service";


const setCurrOurService = (OurService) => {
    return { type: 'SET_CURR_OUR_SERVICE', OurService: OurService };
};

export const loadCurrService = (id) => {
    return async (dispatch) => {
        const OurService = await ContactService.getServiceById(id);
        return dispatch(setCurrOurService(OurService));
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

const setServices = (Services) => {
    return { type: 'SET_OUR_SERVICES', ourServices };
};

export const loadServices = () => {
    return async (dispatch) => {
        const Services = await OurServicesService.query();
        return dispatch(setServices(Services));
    };
};