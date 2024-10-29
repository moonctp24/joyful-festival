import { useSelector } from "react-redux";
import PopupButton from "./popupLayout/PopupButton";
import PopupContent from "./popupLayout/PopupContent";
import PopupTitle from "./popupLayout/PopupTitle";
import { confirmAction } from "@/store/modal/confirm-slice";
import { RootState } from "@/store";

const type = "confirm";

/**
 * alert popup when error or warning occured
 */
const CommConfirm = () => {
  const isOpen = useSelector((state: RootState) => state.confirm.isOpen);
  const title = useSelector((state: RootState) => state.confirm.title);
  const cont = useSelector((state: RootState) => state.confirm.cont);
  const width = useSelector((state: RootState) => state.confirm.width);

  return (
    <div className="popup_common">
      <p className="skip_text">{title}</p>
      <div
        className="popup"
        style={{ display: isOpen ? "block" : "none", zIndex: 930 }}
      >
        <div className="popup_section">
          <div className={`popup_content popwidth${width} pop_openDown`}>
            <PopupTitle title={title} action={confirmAction} type={type} />
            <PopupContent type={type} content={cont} cntOpt={null} />
            <PopupButton
              type={type}
              action={confirmAction}
              btnOpt={null}
              btmPd={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommConfirm;
