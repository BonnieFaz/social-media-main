import { Link } from "react-router-dom";
import { Span } from "../UI";

const RegistrationInfo = ({linkText, hasAccountText, authWithText}) => {
  return (
    <div className="registration">
      <Span>
        {hasAccountText} <Link to="/registration">{linkText}</Link>
      </Span>
      {/* Тег P заменить на компонент */}
      <p>{authWithText}</p>
      <div className="icons-wrapper">
        <Link className="reg__link google-link" to="#">
          <img src="./img/icons/google.svg" alt="Google" />
        </Link>
        <Link className="reg__link google-plus-link" to="#">
          <img src="./img/icons/google-plus.svg" alt="Google Plus" />
        </Link>
        <Link className="reg__link yandex-link" to="#">
          <img src="./img/icons/yandex.svg" alt="Yandex" />
        </Link>
        <Link className="reg__link mail-ru-link" to="#">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </Link>
      </div>
    </div>
  );
};

export default RegistrationInfo;
