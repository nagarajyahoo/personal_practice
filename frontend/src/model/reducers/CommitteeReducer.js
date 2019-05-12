import * as Actions from '../actions/CommitteeActions';

const initialState = {
    processingCommittee: false,
    committee: null,
    error: null
};

const handleCommitteeActions = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GETTING_COMMITTEE:
            return {
                ...state,
                processingCommittee: true,
                error: null
            };
        case Actions.GET_COMMITTEE_SUCCESSFUL:
            return {
                ...state,
                processingCommittee: false,
                committee: action.data,
                error: null
            };
        case Actions.GET_COMMITTEE_FAILED:
            return {
                ...state,
                processingCommittee: false,
                error: 'Getting Committee Details Failed'
            };
        default:
            return {...state};
    }
};


export default handleCommitteeActions;
