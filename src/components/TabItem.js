import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TabItem = ({ tab, onClose }) => (
  <ListItem>
    <ListItemText primary={tab.title} />
    <IconButton onClick={() => onClose(tab.id)}>
      <CloseIcon />
    </IconButton>
  </ListItem>
);

export default TabItem;
