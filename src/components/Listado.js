import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
//import { useDemoData } from '@mui/x-data-grid-generator';
import { darken, lighten } from "@mui/material/styles";
import { Modal } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const getBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const Listado = () => {
  /* const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
    }); */

  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errores, setErrores] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  /* const getUsuariosAW = () => {
    setTimeout(async () => {
      try {
        //const peticion = await fetch("181.129.146.146:3000/wms/cli-classicjeans/v1/api/getAllDataSync");
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        
        const { data } = await peticion.json();

        setDatos(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrores(error.message);
      }
    }, 2000);
  }; */

  const getDatosEstaticos = () => {
    setTimeout(async () => {
      try {
        setDatos([
          {
            id: 1,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            status: "succes",
          },
          {
            id: 2,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            status: "process",
          },
          {
            id: 3,
            email: "tobias.funke@reqres.in",
            first_name: "Tobias",
            last_name: "Funke",
            status: "rejected",
          },
        ]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrores(error.message);
      }
    }, 2000);
  };

  // Columnas de la tabla
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "first_name", headerName: "First name", width: 130 },
    { field: "last_name", headerName: "Last name", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 100 },
    {
        //Acción para abrir modal y ver mayor información
      field: "action",
      renderCell: () => {
        /* return (
          <button
            variant="contained"
            color="primary"
            onClick={(event) => {

            }}
            style={{
              background: "green",
              color: "white",
              fontFamily: "monospace",
              border: "none",
            }}
          >
            More
          </button>
        ); */
        return (
            <div>
              <Button onClick={handleOpen} style={{ background: 'green', color: 'white' }}>More</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ol>
                        {datos.map((dato) => {
                            return (
                                <li key={dato.id}>
                                    {" "}
                                    {dato.first_name} {dato.last_name}{" "}
                                </li>
                            )
                        })}
                    </ol>
                  </Typography>
                </Box>
              </Modal>
            </div>
          );
      },
    },
  ];

  //Hooks para renderizas una sola vez al cargar el componente
  useEffect(() => {
    getDatosEstaticos();
    //getUsuariosAW();
  }, []);

  if (errores !== "") {
    return <div className="error">{errores}</div>;
  } else if (loading === true) {
    // Cuando esta todo cargando
    return (
      <>
        <div style={{ paddingBottom: 300 }}></div>
        <br />
        <div className="dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      </>
    );
  } else if (loading === false && errores === "") {
    return (
      <div style={{ height: 500, width: "100%" }}>
        <Box
          sx={{
            height: 400,
            width: "100%",
            "& .super-app-theme--succes": {
              bgcolor: (theme) =>
                getBackgroundColor(
                  theme.palette.success.main,
                  theme.palette.mode
                ),
              "&:hover": {
                bgcolor: (theme) =>
                  getHoverBackgroundColor(
                    theme.palette.success.main,
                    theme.palette.mode
                  ),
              },
            },
            "& .super-app-theme--process": {
              bgcolor: (theme) =>
                getBackgroundColor(
                  theme.palette.warning.main,
                  theme.palette.mode
                ),
              "&:hover": {
                bgcolor: (theme) =>
                  getHoverBackgroundColor(
                    theme.palette.warning.main,
                    theme.palette.mode
                  ),
              },
            },
            "& .super-app-theme--rejected": {
              bgcolor: (theme) =>
                getBackgroundColor(
                  theme.palette.error.main,
                  theme.palette.mode
                ),
              "&:hover": {
                bgcolor: (theme) =>
                  getHoverBackgroundColor(
                    theme.palette.error.main,
                    theme.palette.mode
                  ),
              },
            },
          }}
        >
          <DataGrid
            //{...datos}
            //getRowClassName={(params) => `super-app-theme--${params.row.status}`}
            rows={datos}
            columns={columns}
            getRowClassName={(params) =>
              `super-app-theme--${params.row.status}`
            }
            pageSize={7}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </div>
    );
  }
};
