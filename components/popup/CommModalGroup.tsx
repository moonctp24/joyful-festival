import { useSelector } from "react-redux";
import CommAlert from "./CommAlert";
import CommConfirm from "./CommConfirm";
import CustomModal from "./CustomModal";
import { RootState } from "@/store";

const CommModalGroup = () => {
  const confirmOpen = useSelector((state: RootState) => state.confirm.isOpen);
  const alertOpen = useSelector((state: RootState) => state.alert.isOpen);
  const modalOpen = useSelector((state: RootState) => state.custom.isOpen);

  return (
    <>
      <div>{alertOpen && <CommAlert />} </div>
      <div>{confirmOpen && <CommConfirm />} </div>
      <div>{modalOpen && <CustomModal />} </div>
    </>
  );
};

export default CommModalGroup;
