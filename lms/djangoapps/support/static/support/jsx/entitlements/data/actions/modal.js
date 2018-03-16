

const openReissueModal = entitlement => ({
  type:'OPEN_REISSUE_MODAL',
  entitlement
});

const openCreationModal = () => ({
  type:'OPEN_CREATION_MODAL',
});

const closeModal = () => ({
  type:'CLOSE_MODAL',
});

export {
  openReissueModal,
  openCreationModal,
  closeModal,
};
