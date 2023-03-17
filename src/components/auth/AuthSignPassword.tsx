import type { FC } from '../../lib/teact/teact';
import React, { memo, useCallback, useState } from '../../lib/teact/teact';
import { getActions, withGlobal } from '../../global';

import type { GlobalState } from '../../global/types';

import { pick } from '../../util/iteratees';
import useLang from '../../hooks/useLang';

import MonkeyPassword from '../common/PasswordMonkey';
import PasswordForm from '../common/PasswordForm';
import Button from "../ui/Button";
import PasswordValidator from "password-validator";

type StateProps = Pick<GlobalState, 'authIsLoading' | 'authError' | 'authHint'>;

const AuthSignPassword: FC<StateProps> = ({
  authIsLoading, authError, authHint,
}) => {
  const { setAuthPassword, clearAuthError,showAuthError } = getActions();

  const lang = useLang();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePasswordVisibility = useCallback((isVisible) => {
    setShowPassword(isVisible);
  }, []);

  const handleSubmit = useCallback(async (password: string) => {
    const schema = new PasswordValidator();
    schema
      .is().min(8)                                    // Minimum length 8
      .is().max(100)                                  // Maximum length 100
      .has().uppercase()                              // Must have uppercase letters
      .has().lowercase()                              // Must have lowercase letters
      .has().not().spaces()                           // Should not have spaces
      .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

    if(!schema.validate(password)){
      return showAuthError("密码需要包含大小写字母至少8个字符")
    }

    setAuthPassword({ password });
  }, [setAuthPassword]);

  const handleClose = useCallback(() => {
    getActions().updateGlobal({
      authState:"authorizationStateReady"
    })
  }, [setAuthPassword]);

  return (
    <div id="auth-password-form" className="custom-scroll">
      <div className={'auth-close'}>
        <Button
          round
          color="translucent"
          size="smaller"
          ariaLabel={lang('Close')}
          onClick={handleClose}
        >
          <i className="icon-close" />
        </Button>
      </div>
      <div className="auth-form">
        <MonkeyPassword isPasswordVisible={showPassword} />
        <h1>{lang('Login.Header.Password')}</h1>
        <p className="note"></p>
        <PasswordForm
          clearError={clearAuthError}
          error={authError && lang(authError)}
          hint={authHint}
          isLoading={authIsLoading}
          isPasswordVisible={showPassword}
          onChangePasswordVisibility={handleChangePasswordVisibility}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default memo(withGlobal(
  (global): StateProps => pick(global, ['authIsLoading', 'authError', 'authHint']),
)(AuthSignPassword));