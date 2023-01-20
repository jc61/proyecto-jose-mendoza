import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
//import { useDemoData } from '@mui/x-data-grid-generator';
import { darken, lighten } from "@mui/material/styles";
import { Modal } from "@mui/material";
import Button from "@mui/material/Button";
import { Buscador } from "../Buscador";
//import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloseIcon from "@mui/icons-material/Close";

// css
import style from "./Listado.module.css";

const getBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

export const Listado = () => {
  /* const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  }); */

  const [pageSize, setPageSize] = useState(5);

  const [datos, setDatos] = useState([]); // Datos estáticos
  const [loading, setLoading] = useState(true); // Cargando
  const [errores, setErrores] = useState("");
  const [open, setOpen] = useState(false); // Modal
  const [imprimirDatos, setImprimirDatos] = useState({}); // Obtiene el dato de la fila

  const handleOpen = ({ row }) => {
    setImprimirDatos(row);
    setOpen(true);
  };

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
          {
            id: 4,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            status: "succes",
          },
          {
            id: 5,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            status: "process",
          },
          {
            id: 6,
            email: "tobias.funke@reqres.in",
            first_name: "Tobias",
            last_name: "Funke",
            status: "rejected",
          },
          {
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            status: "succes",
          },
          {
            id: 8,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            status: "process",
          },
          {
            id: 9,
            email: "tobias.funke@reqres.in",
            first_name: "Tobias",
            last_name: "Funke",
            status: "rejected",
          },
          {
            id: 10,
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

  //Hooks para renderizas una sola vez al cargar el componente
  useEffect(() => {
    getDatosEstaticos();
    //getUsuariosAW();
  }, []);

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
      renderCell: (data) => (
        <>
          <Button
            onClick={() => handleOpen(data)}
            style={{
              background: "#06712A",
              color: "white",
              width: "20px",
              height: "40px",
            }}
          >
            More...
          </Button>
        </>
      ),
    },
  ];

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
      <>
        <div className="titulo">
          <h1>
            <Buscador />
            {/* <input type='text' placeholder='Buscar' className="buscador" /> */}
          </h1>
        </div>
        {/* <aside className="lateral">
          <div>
            <p><button className="aside-btn"><AcUnitIcon /></button></p>
            <p><button className="aside-btn"><AcUnitIcon /></button></p>
            <p><button className="aside-btn"><AcUnitIcon /></button></p>
            <p><button className="aside-btn"><AcUnitIcon /></button></p>
          </div>
        </aside> */}
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
              // super-app-theme--succes
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              pagination
              disableSelectionOnClick={true}
            />
          </Box>
        </div>
        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={style.modelContainer}>
            <div className={style.title}>
              <CloseIcon
                onClick={() => {
                  setOpen(false);
                }}
                className={style.btnExit}
                sx={{ fontSize: 35 }}
              />
              Información de contacto
            </div>

            <div className={style.modalInfoBox}>
              <div className={style.col}>
                <label>Nombre </label>
                <p>
                  {imprimirDatos.first_name} {imprimirDatos.last_name}
                </p>
              </div>

              <hr />
              <div className={style.col}>
                <label>Correo </label>
                <p> {imprimirDatos.email}</p>
              </div>
              <hr />
              <div className={style.col}>
                <label>Status </label>
                <p> {imprimirDatos.status?.toUpperCase()}</p>
              </div>
              <hr />
            </div>
          </Box>
        </Modal>
      </>
    );
  }
};
