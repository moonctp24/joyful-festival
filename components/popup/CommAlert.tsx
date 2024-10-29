import { useSelector } from "react-redux";
import { alertAction } from "store/modal/alert-slice";
import PopupButton from "./popupLayout/PopupButton";
import PopupContent from "./popupLayout/PopupContent";
import PopupTitle from "./popupLayout/PopupTitle";
import { RootState } from "@/store";

const type = "alert";

/**
 * alert popup when error or warning occured
 */
const CommAlert = () => {
  const isOpen = useSelector((state: RootState) => state.alert.isOpen);
  const title = useSelector((state: RootState) => state.alert.title);
  const cont = useSelector((state: RootState) => state.alert.cont);
  const width = useSelector((state: RootState) => state.alert.width);

  return (
    <div className="popup_common">
      <p className="skip_text">{title}</p>
      <div
        className="popup"
        style={{ display: isOpen ? "block" : "none", zIndex: 930 }}
      >
        <div className="popup_section">
          <div className={`popup_content popwidth${width} pop_openDown`}>
            <PopupTitle title={title} action={alertAction} type={type} />
            <PopupContent type={type} content={cont} cntOpt={null} />
            <PopupButton
              type={type}
              action={alertAction}
              btnOpt={null}
              btmPd={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommAlert;
