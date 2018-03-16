import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createEntitlement, reissueEntitlement } from '../../data/actions/error';
import { closeModal } from '../../data/actions/modal';

import EntitlementModal from './EntitlementModal';

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.isOpen
    entitlement: state.modal.activeEntitlement,
  }
}

const mapDispatchToProps = dispatch => ({
  createEntitlement: ({username, courseUuid, mode, comments}) => dispatch(
    createEntitlement({username, courseUuid, mode, comments})
  ),
  reissueEntitlements: ({entitlement, comments}) => dispatch(
    fetchEntitlements({entitlement, comments})
  ),
  closeModal: () => dispatch(closeModal()),
});

const EntitlementModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntitlementModal);

export default EntitlementModalContainer;