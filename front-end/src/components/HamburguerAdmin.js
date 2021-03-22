import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {

    zIndex: 99,
    marginRight: theme.spacing(2),
  },
}));

export default function Hamburguer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const history = useHistory();

  const handleRedirect = (event) => {
    switch (event) {
    case 'Pedidos':
      history.push('/admin/orders');
      break;
    case 'Perfil':
      history.push('/admin/profile');
      break;
    case 'Sair':
      history.push('/login');
      break;
    default:
      break;
    }

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <MenuList
      className="admin-side-bar-container"
      autoFocusItem={ open }
      id="menu-list-grow"
      onKeyDown={ handleListKeyDown }
    >
      <div className={ classes.root }>
        <MenuItem
          data-testid="side-menu-item-orders"
          onClick={ () => handleRedirect('pedidos') }
        >
          Pedidos
        </MenuItem>
        <MenuItem
          data-testid="side-menu-item-profile"
          onClick={ () => handleRedirect('Perfil') }
        >
          Perfil
        </MenuItem>
        <MenuItem
          data-testid="side-menu-item-logout"
          onClick={ () => handleRedirect('Sair') }
        >
          Sair
        </MenuItem>
      </div>

    </MenuList>
  );
}
