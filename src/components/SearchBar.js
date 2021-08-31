/* eslint-disable react/prop-types */
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  option,
  Select
} from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    button: {
      background: theme.palette.background,
      '&:hover': {
        background: '#f00'
      },
      color: '#FFFF'
    },
    Select: {
      background: theme.palette.background
    }
  }
})

function SearchBar ({ onQueryChange, number }) {
  const classes = useStyles()
  const [query, setQuery] = useState(number)
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = () => {
    onQueryChange(query)
  }
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={10}
        alignItems="center"
      >
        {/* Dropdown */}
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="query-native-simple">Query</InputLabel>
            <Select
              native
              value={query}
              onChange={handleChange}
            >
              <option aria-label="None" value={0}>None</option>
              <option value={1}>Age greater than 18</option>
              <option value={2}>Profession is developer</option>
              <option value={3}>Age is less than 50</option>
            </Select>
          </FormControl>
        </Grid>

        {/* Run button */}
        <Grid item xs={6}>
          <Button
            variant="primary"
            className={classes.button}
            onClick={() => handleSubmit()}
          >
            Execute!
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SearchBar
