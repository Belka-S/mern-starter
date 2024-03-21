import { useEffect, useState } from 'react';
import { Button } from 'components/ui/Button';
import Modal from 'components/ui/Modal';
import { useAppExtraDispatch } from 'store';
import { logoutThunk } from 'store/auth';
import { getAbbreviation } from 'utils/helpers';
import { useAuth } from 'utils/hooks';

import s from './index.module.scss';

const ProfileBtn = () => {
  const dispatch = useAppExtraDispatch();
  const { user } = useAuth();
  const [isModal, setIsModal] = useState(false);

  // profile button styles
  const btnId = 'profile-btn';
  useEffect(() => {
    if (user.avatarUrl) {
      document.styleSheets[0].insertRule(
        `#${btnId} {background-image: url(${user.avatarUrl})}`,
        0,
      );
    } else if (user.name) {
      document.styleSheets[0].deleteRule(0);
      document.styleSheets[0].insertRule(
        `#${btnId}::after {` +
          'color: #ffffff;' +
          `content: '${getAbbreviation(user.name)}'` +
          '}',
      );
    }
  }, [user.avatarUrl, user.name]);

  const switchIsModal = () => setIsModal(!isModal);
  const handleLogout = () => dispatch(logoutThunk());

  return (
    <>
      <div id={`${btnId}`} className={s[btnId]} onClick={switchIsModal} />

      {isModal && (
        <Modal setIsModal={switchIsModal}>
          <Button onClick={handleLogout} variant="smooth" label="Log Out" />
        </Modal>
      )}
    </>
  );
};

export default ProfileBtn;
