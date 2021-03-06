import { connect } from 'react-redux';
import SignupForm from './signup';
import { signup, clearErrors, login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'Signup'
    });
};


const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: (user) => dispatch(login(user))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
