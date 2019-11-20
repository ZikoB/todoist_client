import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { AddTask } from '../AddTask';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add"></li>
            <li className="settings__darkmode">
              <button data-testid="dark-mode-action" type="button">
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
