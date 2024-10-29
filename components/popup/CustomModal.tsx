import { useSelector } from "react-redux";
import { customAction } from "store/modal/custom-slice";
import PopupButton from "./popupLayout/PopupButton";
import PopupContent from "./popupLayout/PopupContent";
import PopupTitle from "./popupLayout/PopupTitle";
import { RootState } from "@/store";

const type = "custom";

/**
 * custom popup when error or warning occured
 */
const CustomModal = () => {
  const isOpen = useSelector((state: RootState) => state.custom.isOpen);
  const title = useSelector((state: RootState) => state.custom.title);
  const cont = useSelector((state: RootState) => state.custom.cont);
  const width = useSelector((state: RootState) => state.custom.width);
  console.log("innnn", isOpen, title);

  return (
    <div className="popup_common">
      <p className="skip_text">{title}</p>
      <div
        className="popup"
        style={{ display: isOpen ? "block" : "none", zIndex: 930 }}
      >
        <div className="popup_section">
          <div className={`popup_content popwidth${width} pop_openDown`}>
            <PopupTitle title={title} action={customAction} type={type} />
            <PopupContent type={type} content={cont} cntOpt={null} />
            <PopupButton
              type={type}
              action={customAction}
              btnOpt={null}
              btmPd={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
