import * as httputils from '../../utils/HttpUtils';

export const GETTING_COMMITTEE = 'getting_committee';
export const GET_COMMITTEE_SUCCESSFUL = 'get_committee_successful';
export const GET_COMMITTEE_FAILED = 'get_committee_failed';

export const processingCommittee = () => {
    return {
        type: GETTING_COMMITTEE
    }
};

const processingCommitteeFailed = () => {
    return {
        type: GET_COMMITTEE_FAILED
    }
};

const processingCommitteeSuccessful = (committee) => {
    return {
        type: GET_COMMITTEE_SUCCESSFUL,
        data: committee
    }
};

export const getCommittee = () => {
    return (dispatch => {
        httputils.get('http://localhost:8080/public/committee')
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            dispatch(processingCommitteeSuccessful(data));
                        }).catch(error => {
                        console.log(error);
                        dispatch(processingCommitteeFailed());
                    })
                } else {
                    dispatch(processingCommitteeFailed());
                }
            })
            .catch(error => {
                console.log(error);
                dispatch(processingCommitteeFailed());
            })
    });
};