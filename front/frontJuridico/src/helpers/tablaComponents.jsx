export const columns = [
  { name: "Fecha", selector: (row) => row.fecha, sortable: true },
  {
    name: "Hora",
    selector: (row) => row.hora,
  },
  {
    name: "Comentario",
    selector: (row) => row.comentarios,
  },
  {
    name: "Estado",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Acciones",
    selector: (row) => row.button || <button>Cancelar Turno</button>,
  },
];

export const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      outlineStyle: "solid",
      outlineWidth: ".25px",
      outlineColor: "#32495d",
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      color: "#32495d",
      fontWeight: "bold",
      fontSize: "1.25rem",
      backgroundColor: "#91b8c0d6",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      alignItems: "center",
      justifyContent: "center",
    },
  },
};
