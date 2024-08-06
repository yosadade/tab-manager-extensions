/* global chrome */
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, IconButton, TextField, Button, ListItemIcon, Snackbar, Alert } from '@mui/material';
import { Close as CloseIcon, Delete as DeleteIcon, Search as SearchIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  transition: 'background-color 0.3s ease',
}));

const TabManager = () => {
  const [tabs, setTabs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [closedTabTitle, setClosedTabTitle] = useState('');

  useEffect(() => {
    chrome.tabs.query({}, (result) => {
      setTabs(result);
    });
  }, []);

  const closeTab = (tabId, title) => {
    chrome.tabs.remove(tabId, () => {
      setClosedTabTitle(title);
      setSnackbarOpen(true);
      setTabs(tabs.filter(tab => tab.id !== tabId));
    });
  };

  const closeAllTabs = () => {
    chrome.tabs.query({}, (result) => {
      const currentTabId = result.find(tab => tab.active).id;
      const tabIds = result.filter(tab => tab.id !== currentTabId).map(tab => tab.id);
      chrome.tabs.remove(tabIds, () => {
        setClosedTabTitle('all tabs');
        setSnackbarOpen(true);
        setTabs(tabs.filter(tab => tab.id === currentTabId));
      });
    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const filteredTabs = tabs.filter(tab => tab.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <TextField
        label="Search Tabs"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: <SearchIcon />
        }}
        style={{ marginBottom: '1rem' }}
      />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={closeAllTabs}
        fullWidth
        style={{ marginBottom: '1rem' }}
      >
        Delete All Tabs
      </Button>
      <List>
        {filteredTabs.map(tab => (
          <StyledListItem key={tab.id}>
            <ListItemIcon>
              <img src={tab.favIconUrl || 'https://via.placeholder.com/24'} alt="favicon" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary={tab.title} />
            <IconButton onClick={() => closeTab(tab.id, tab.title)}>
              <CloseIcon />
            </IconButton>
          </StyledListItem>
        ))}
      </List>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Closed {closedTabTitle}
        </Alert>
      </Snackbar>
    </>
  );
};

export default TabManager;
