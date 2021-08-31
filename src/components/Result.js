/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { Container, Grid, Typography, Button, makeStyles } from '@material-ui/core'
import { queryOne, queryTwo, queryThree, queryZero } from '../mocks/rowData'

const useStyles = makeStyles((theme) => {
  return {
    button: {
      background: theme.palette.background,
      '&:hover': {
        background: '#f00'
      },
      color: '#FFFF'
    }
  }
})
function Result ({ query }) {
  const [rowData, setRowData] = useState([])
  const [gridApi, setGridApi] = useState(null)
  const classes = useStyles()

  const onGridReady = (params) => {
    setGridApi(params.api)
  }

  useEffect(() => {
    if (query === '0')setRowData(queryZero)
    else if (query === '1') setRowData(queryOne)
    else if (query === '2') setRowData(queryTwo)
    else if (query === '3') setRowData(queryThree)
  }, [query])

  const onBtnExport = () => {
    gridApi.exportDataAsCsv()
  }
  return (
    <Container xs={{ margin: 10 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="space-around"
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="h5" >
            RESULTS!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            className="ag-theme-alpine"
            style={{ height: 600, margin: 100, width: 1000 }}
          >
            <AgGridReact
              defaultColDef={{
                initialWidth: 100,
                sortable: true,
                resizable: true,
                filter: true,
                flex: 1
              }}
              checkboxSelection={true}
              suppressExcelExport={true}
              rowData={rowData}
              onGridReady={onGridReady}
            >
              <AgGridColumn field="id" width={100} ></AgGridColumn>
              <AgGridColumn field="firstName"width={100}></AgGridColumn>
              <AgGridColumn field="lastName"></AgGridColumn>
              <AgGridColumn field="age"></AgGridColumn>
              <AgGridColumn field="profession"></AgGridColumn>
              <AgGridColumn field="city"></AgGridColumn>
            </AgGridReact>
          </div>
        </Grid>
        <Grid item xs={12}>
        <Button onClick={() => onBtnExport()} className={classes.button}>
            Download CSV export file
        </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Result
