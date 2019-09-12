import React from "react"

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FaSearch } from 'react-icons/fa';

import ClickAway from '../dropdown'

import {theme} from '../root'

export default function ActionBar() {
    return (
        <div className="searchSection" style={{backgroundColor:theme.dark.elementColor, color:theme.dark.textColor}}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <FaSearch />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" placeholder="Search for a country.." />
          </Grid>
        </Grid>
        <ClickAway></ClickAway>
      </div>
    );
  }
  