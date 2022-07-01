import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from '../Navigation/Navigation.styled';

import authOperations from '../../redux/auth/authOperations';
import defaultAvatar from './default-av.png';
import { Cont, Avatar } from './UserMenu.styled';
import Typography from '@mui/material/Typography';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);
  const avatar = defaultAvatar;
  return (
    <>
      <Link to="/login" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </Link>
      <Cont>
        <Typography component="h5" variant="h7">
          Hi, {email}
        </Typography>
        <Avatar src={avatar} alt="" width="32" />
      </Cont>
    </>
  );
}
