import React, { useEffect } from "react";
import "../../App.css";

const Modal = ({ modalContent, removeModal, modalType }) => {
  // useEffect(()=> setTimeout(()=>{
  //     removeModal()
  // },3000),[])
  useEffect(() => {
    setTimeout(() => {
      removeModal();
    }, 3000);
  }, []);
  return <div className={`modal alert-${modalType}`}>{modalContent}</div>;
};
export default Modal;

// const [isModal,setIsModal]=useState(false);
// const [modalContent,setModalContent]=useState('');
// const [modalType,setModalType]=useState('');

// const removeModal=()=>{

//     setIsModal(false);
// }
// {isModal && <Modal modalContent={modalContent} removeModal={removeModal} modalType={modalType}/>}
